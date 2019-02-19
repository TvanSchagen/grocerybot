import scrapy
from datetime import datetime as dt

from grocerybot.items import create_grocery_bot_item
from grocerybot.spiders.models.page_attributes import PageAttributes


class ProductsSpider(scrapy.Spider):
    name = 'coop'
    start_urls = ['https://www.coop.nl/boodschappen']

    def parse(self, response):
        self.logger.info('main: %s' % response.url)
        for href in response.css('li.categoryItem').css('a::attr(href)'):
            yield response.follow(href, self.parse_categories)

    def parse_categories(self, response):
        pages = int(response.css('div.gi section').xpath('@data-pagecount').getall()[0])

        for page in range(0, pages - 1):
            next = '?PageNumber={page}'.format(page=page)
            yield response.follow(next, self.pagination)

    def pagination(self, response):
        self.logger.info('cat: %s' % response.url)
        for href in response.css('div.formfields').css('a::attr(href)'):
            yield response.follow(href, self.save_product)

    def save_product(self, response):
        self.logger.info('product: %s' % response.url)
        title = response.css('h1.head1::text').get()
        filename = 'data/coop/%s.html' % title
        with open(filename, 'wb') as f:
            f.write(response.body)

            yield create_grocery_bot_item(title, response.url, filename, dt.now())
