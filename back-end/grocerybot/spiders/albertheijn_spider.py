import scrapy
import json
from datetime import datetime as dt

from grocerybot.items import create_grocery_bot_item
from grocerybot.spiders.models.page_attributes import PageAttributes
from grocerybot.helpers.weight_standardizer import WeightStandardizer


def parse_json_response(response):
    # convert repsonse to json
    return json.loads(response.body)


class ProductsSpider(scrapy.Spider):
    name = 'ah'
    root_url = 'https://www.ah.nl/service/rest/delegate'
    start_urls = [f'{root_url}?url=%2Fproducten']

    def parse(self, response):
        # self.logger.info('main: %s' % response.url)
        json_res = parse_json_response(response)
        # select the json node where the categories are loaded
        json_res = json_res[u'_embedded'][u'lanes'][0]['_embedded']['items']

        for item in json_res:
            # Visit only the product categories
            if item['type'] == 'ProductCategory':
                # from each category, extract the href
                href = str(item[u'navItem'][u'link'][u'href'])

                yield response.follow(f'{self.root_url}?url={href}', self.parse_categories)

    def parse_categories(self, response):
        json_res = parse_json_response(response)
        json_res = json_res[u'_embedded'][u'lanes']

        # Find the lanes that correspond to filters - these are the ones containing links to subcategory requests
        filter_lane = next(lane for lane in json_res if lane['id'] == 'Filters')
        subcat_filters = next(
            (sub for sub in filter_lane['_embedded']['items'][0]['_embedded']['filters'] if sub['label'] == 'Soort'),
            -1)

        # If no 'Soort' section is found, then there are no more filters to be applied, so we crawl the product.
        if subcat_filters == -1:
            # Find the lane that corresponds to products.
            product_lane = next(lane for lane in json_res if lane['type'] == 'ProductLane')
            for item in product_lane['_embedded']['items']:
                href = str(item[u'navItem'][u'link'][u'href'])
                yield response.follow(f'{self.root_url}?url={href}', self.parse_products)
        # If a Soort section is found, we follow this link recursively.
        else:
            for item in subcat_filters['_embedded']['filterItems']:
                href = str(item[u'navItem'][u'link'][u'href'])

                yield response.follow(f'{self.root_url}?url={href}', self.parse_categories)

    def parse_products(self, response):
        json_res = parse_json_response(response)
        page_title = json_res['title']
        json_res = json_res[u'_embedded'][u'lanes']

        # Get the ProductDetailLane
        product_lane = next(lane for lane in json_res if lane['type'] == 'ProductDetailLane')
        product_details = product_lane['_embedded']['items'][0]
        if product_details:
            product_name = product_details['_embedded']['product']['description']
            description = product_details['_embedded']['product']['details']['summary']
            description = description.replace('[list]', '')
            description = description.replace('[*]', '')
            size_or_weight = product_details['_embedded']['product']['unitSize']
            
            if size_or_weight is not None:
                if "stuk" in size_or_weight:
                    size = size_or_weight
                    weight_q = None
                    weight_ind = None
                else:
                    size = None
                    weight_q = WeightStandardizer.standardize_quantity(size_or_weight)
                    weight_ind = WeightStandardizer.standardize_indicator(size_or_weight)
            else:
                size = None
                weight_q = None
                weight_ind = None
                
            images = product_details['_embedded']['product']['images']
            img_src = None
            if images:
                first_image = images[0]
                if first_image:
                    img_src = first_image['link']['href']

            price = product_details['_embedded']['product']['priceLabel']['now']

            # filename = f'data/ah/{title}.html'
            # with open(filename, 'wb') as f:
            #     f.write(response.body)

            yield create_grocery_bot_item(product_name, page_title, description,
                                          'albert heijn ah', response.url, dt.now(), weight_q, weight_ind, size, '',
                                          price, img_src)
