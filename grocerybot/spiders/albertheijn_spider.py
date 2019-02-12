import scrapy


class ProductsSpider(scrapy.Spider):
    name = 'ah'
    start_urls = ['https://www.ah.nl/producten']

    def parse(self, response):
        self.logger.info('main: %s' % response.url)
        for href in response.css('div.product-category-navigation-lane').css('a::attr(href)'):
            yield response.follow(href, self.parse_categories)

    def parse_categories(self, response):
        self.logger.info('cat: %s' % response.url)
        for href in response.css('article.product').css('a::attr(href)'):
            yield response.follow(href, self.parse_products)

    def parse_products(self, response):
        self.logger.info('product: %s' % response.url)
        page = response.url.split("/")[-1]
        filename = 'data/ah/%s.html' % page
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.logger.info('Saved file %s' % filename)
