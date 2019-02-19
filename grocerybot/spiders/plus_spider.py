import scrapy
from datetime import datetime as dt

from grocerybot.items import create_grocery_bot_item
from grocerybot.spiders.models.page_attributes import PageAttributes


class ProductsSpider(scrapy.Spider):
    name = 'plus_products'

    start_urls = ['https://www.plus.nl/']

    def parse(self, response):
        # follow product categorie pages
        for href in response.css('li.category-menu__item--sub').css('a::attr(href)'):
            #print(href)
            yield response.follow(href, self.parse_categories)

    def parse_categories(self, response):

        pages = int(response.css("div.number-items-per-page input").xpath('@value').getall()[0])

        for x in range(0, pages - 1):
            next = '?PageNumber={page}'.format(page=x)
            yield response.follow(next, self.parse_products)

    def parse_products(self, response):
        for href in response.css('li.ish-productList-item').css('a::attr(href)'):
            yield response.follow(href, self.save_product)

    def save_product(self, response):
        page = response.url.split("/")[-1]
        filename = 'data/plus/%s.html' % page

        title = response.css('div.pdp-right-block h1::text').get()

        with open(filename, 'wb') as f:
            f.write(response.body)

        yield create_grocery_bot_item(title, response.url, filename, dt.now())
