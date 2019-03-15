from datetime import datetime as dt

import scrapy

from grocerybot.items import create_grocery_bot_item
from grocerybot.helpers.weight_standardizer import WeightStandardizer


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
        product_name = response.css("li.page-header__breadcrumb").css("a::text").getall()[-1]
        # product_name = response.css('div.pdp-right-block h1::text').get()
        page_title = response.css("title::text").get()
        img_src = "https://www.plus.nl/" + response.css("img.lazy").xpath("@data-src").get()

        description = None

        number_of_units = response.css('div.product-detail-packing::text').get()

        if ' \n' in number_of_units:
            number_of_units = number_of_units.strip(' \n')

        if 'stuks' in number_of_units:
            size = number_of_units
            weight = None
        else:
            weight = WeightStandardizer.standardize(number_of_units)
            size = None

        try:
            euros = response.css('span.price span::text').getall()[-1]
            cents = response.css('span.price sup::text').get()
            price = euros + '.' + cents
        except:
            print("COULD NOT GET TRUE PRICE")
            price = response.css('span.price span::text').get()

        try:
            category = response.css("li.page-header__breadcrumb").css("a::text").getall()[:2]
        except:
            category = None
            print("Could not find category")

        yield create_grocery_bot_item(product_name, page_title, description, 'plus', response.url, dt.now(), weight,
                                      size, category, price, img_src)
