import scrapy


class ProductsSpider(scrapy.Spider):
    name = 'coop'
    start_urls = ['https://www.coop.nl/boodschappen']

    def parse(self, response):
        self.logger.info('main: %s' % response.url)
        for href in response.css('li.categoryItem').css('a::attr(href)'):
            yield response.follow(href, self.parse_categories)

    def parse_categories(self, response):
        self.logger.info('cat: %s' % response.url)
        for href in response.css('div.formfields').css('a::attr(href)'):
            yield response.follow(href, self.parse_products)

    def parse_products(self, response):
        self.logger.info('product: %s' % response.url)
        title = response.css('h1.head1::text').get()
        filename = 'data/coop/%s.html' % title
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.logger.info('Saved file %s' % filename)
