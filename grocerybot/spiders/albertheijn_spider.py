import scrapy
import json


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
        subcat_filters = next(sub for sub in filter_lane['_embedded']['items'][0]['_embedded']['filters'] if sub['label'] == 'Soort')

        for item in subcat_filters['_embedded']['filterItems']:
            href = str(item[u'navItem'][u'link'][u'href'])

            yield response.follow(f'{self.root_url}?url={href}', self.parse_sub_categories)

    def parse_sub_categories(self, response):
        self.logger.info(response.url)

    def parse_products(self, response):
        self.logger.info('product: %s' % response.url)
        title = "todo"
        filename = 'data/ah/%s.html' % title
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.logger.info('Saved file %s' % filename)
