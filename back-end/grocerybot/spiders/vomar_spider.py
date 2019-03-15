import scrapy
from datetime import datetime as dt

from grocerybot.items import create_grocery_bot_item
from grocerybot.spiders.models.page_attributes import PageAttributes
from grocerybot.helpers.weight_standardizer import WeightStandardizer


class VomarSpider(scrapy.Spider):
    name = "vomar"

    start_urls = [
        'https://www.vomar.nl/producten'
    ]

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
        img_src = response.css("img").xpath("@src").get()

        page_title = page_title.replace('/', '')
        page_title = page_title.replace('_', '')
        # get the h5 headers that contain the information we need to extract
        headers = response.css('div.container div.container div.productInfo div.col-md-6')[0].css('h5::text').getall()
        desc_index = headers.index(next(header for header in headers if header == 'Beschrijving'))
        weight_index = headers.index(next(header for header in headers if header == 'Inhoud en gewicht'))

        description = response.css('div.container div.container div.productInfo div.col-md-6')[0].css('p::text')[desc_index].get()
        weight_or_size = response.css('div.unitQuantity span::text').get()
        weight_or_size = weight_or_size.strip()

        weight_or_size = weight_or_size.replace("Stuks", "").replace("Stuk", "")

        if weight_or_size is not None:
            if "Per" in weight_or_size:
                size = weight_or_size
                weight_q = None
                weight_ind = None
            else:
                weight_q = WeightStandardizer.standardize_quantity(weight_or_size)
                weight_ind = WeightStandardizer.standardize_indicator(weight_or_size)
                size = None
        else:
            weight_q = None
            weight_ind = None
            size = None

        category = ' '.join(response.css('ol.breadcrumb li ::text').getall())
        price = ''.join(response.css('div.priceUnitQuantity div.price span::text').getall())

        yield create_grocery_bot_item(title, page_title, description, 'vomar',
                                      response.url, dt.now(), weight_q, weight_ind, size, category, price, 'www.vomar.nl' + img_src)
