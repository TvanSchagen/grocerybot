import scrapy
from datetime import datetime as dt

from grocerybot.items import create_grocery_bot_item
from grocerybot.spiders.models.page_attributes import PageAttributes


class VomarSpider(scrapy.Spider):
    name = "vomar"

    start_urls = [
        'https://www.vomar.nl/producten'
    ]

    custom_settings = {
        'DOWNLOAD_DELAY': 0.5
    }

    def parse(self, response):
        for a in response.css('div.item a::attr(href)').getall():
            yield response.follow(a, callback=self.parse_category)

    def parse_category(self, response):
        for a in response.css('div.subCategoryNav div.item a::attr(href)').getall():
            yield response.follow(a, callback=self.parse_subcategory)

    def parse_subcategory(self, response):
        for a in response.css('div.product a::attr(href)').getall():
            yield response.follow(a, callback=self.parse_product)

    def parse_product(self, response):
        title = response.css('div.container div.container h1::text').get()
        page_title = response.css('title::text').get()
        page_title = page_title.replace('/', '')
        page_title = page_title.replace('_', '')
        description = response.css('div.container div.container div.productInfo div.col-md-6')[0].css('p::text')[0].get()
        weight = response.css('div.container div.container div.productInfo div.col-md-6')[0].css('p::text')[1].get()
        weight = weight.strip()
        category = ' '.join(response.css('ol.breadcrumb li ::text').getall())
        price = ''.join(response.css('div.priceUnitQuantity div.price span::text').getall())

        # filename = 'data/vomar/vomar-%s.html' % title
        # try:
        #     with open(filename, 'wb') as f:
        #         f.write(response.body)
        # except:
        #     return

        yield create_grocery_bot_item(title, page_title, description, 'vomar',
                                      response.url, dt.now(), weight, '', category, price)
