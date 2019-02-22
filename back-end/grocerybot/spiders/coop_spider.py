import scrapy
import time
from datetime import datetime as dt

from grocerybot.items import create_grocery_bot_item
from grocerybot.spiders.models.page_attributes import PageAttributes


class ProductsSpider(scrapy.Spider):
    name = 'coop'
    start_urls = ['https://www.coop.nl/boodschappen']

    # parse the main page and follow the categories
    def parse(self, response):
        for href in response.css('li.categoryItem').css('a::attr(href)'):
            yield response.follow(href, self.parse_categories)

    # parse the category pages, and follow pagination links
    def parse_categories(self, response):
        pages = int(response.css('div.gi section').xpath('@data-pagecount').getall()[0])

        for page in range(0, pages - 1):
            next = '?PageNumber={page}'.format(page=page)
            yield response.follow(next, self.pagination)

    # parse pagination links, and follow product pages
    def pagination(self, response):
        self.logger.info('cat: %s' % response.url)
        for href in response.css('div.formfields').css('a::attr(href)'):
            yield response.follow(href, self.save_product)

    # parse the product and send it back to the pipeline
    def save_product(self, response):
        product_name = response.css('h1.altHead::text').get()
        page_title = response.css('title::text').get()
        # only extract the description when the p is an immediate child of dd.active, otherwise it's not a description
        description = response.css('dl.definitionList dd.active>p::text').get()
        # in coop, weight and size are currently the same 'block'
        weight = response.css('header.gi h2.subHead::text').get()
        size = response.css('header.gi h2.subHead::text').get()
        # grab the n-2 th element of the item/category breadcrumb
        category = response.css('ol.cf span::text')[-2].get()
        # get both parts of the price (replace comma's by dots to make for easy float parsing)
        price = str(response.css('ins.price::text').get() + response.css('ins.price span.sup::text').get()).replace(',', '.')

        #with open('coop-' + (time.strftime("%d%m%Y")) + '.txt', 'a+') as f:
        #    f.write(response.url + '\n')
        #    print(f.read())
        #    f.close()

        yield create_grocery_bot_item(product_name, page_title, description, 'coop', response.url, dt.now(), weight, size, category, price)