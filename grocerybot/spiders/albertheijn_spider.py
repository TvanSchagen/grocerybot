import scrapy
import json

class ProductsSpider(scrapy.Spider):
    name = 'ah'
    root_url = 'https://www.ah.nl/service/rest/delegate'
    start_urls = [f'{root_url}?url=%2Fproducten']

    def parse(self, response):
        self.logger.info('main: %s' % response.url)
        # convert repsonse to json
        json_res = json.loads(response.body)
        # select the json node where the categories are loaded
        json_res = json_res[u'_embedded'][u'lanes'][0]['_embedded']['items']

        for item in json_res:
            # Visit only the product categories
            if item['type'] == 'ProductCategory':
                # from each category, extract the href
                href = str(item[u'navItem'][u'link'][u'href'])

                yield response.follow(f'{self.root_url}?url={href}', self.parse_categories)

    def parse_categories(self, response):
        self.logger.info('category: %s' % response)
        # for href in response.css('article.product').css('a::attr(href)'):
        #     yield response.follow(href, self.parse_products)

    def parse_products(self, response):
        self.logger.info('product: %s' % response.url)
        title = "todo"
        filename = 'data/ah/%s.html' % title
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.logger.info('Saved file %s' % filename)
