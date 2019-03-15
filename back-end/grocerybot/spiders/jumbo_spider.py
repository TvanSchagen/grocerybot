import scrapy
from datetime import datetime as dt

from grocerybot.items import create_grocery_bot_item
from grocerybot.spiders.models.page_attributes import PageAttributes
from grocerybot.helpers.weight_standardizer import WeightStandardizer


class ProductsSpider(scrapy.Spider):
    name = 'jumbo_products'

    start_urls = ['https://www.jumbo.com/producten/categorieen/aardappel,-rijst,-pasta/',
                  'https://www.jumbo.com/producten/categorieen/vlees,-vis,-vegetarisch/',
                  'https://www.jumbo.com/producten/categorieen/groente/',
                  'https://www.jumbo.com/producten/categorieen/fruit/',
                  'https://www.jumbo.com/producten/categorieen/koken,-soepen,-maaltijden/',
                  'https://www.jumbo.com/producten/categorieen/diepvries/',
                  'https://www.jumbo.com/producten/categorieen/brood,-cereals,-beleg/',
                  'https://www.jumbo.com/producten/categorieen/zuivel,-eieren,-boter/',
                  'https://www.jumbo.com/producten/categorieen/koek,-gebak,-snoep,-chips/',
                  'https://www.jumbo.com/producten/categorieen/fris,-sap,-koffie,-thee/',
                  'https://www.jumbo.com/producten/categorieen/wijn,-bier,-sterke-drank/',
                  'https://www.jumbo.com/producten/categorieen/drogisterij/',
                  ]

    def parse(self, response):
        # get number of pages
        pages = int(response.css('div.ws-product-listing-pagination').xpath('@data-jum-pagecount').getall()[0])

        for page in range(0, pages - 1):
            next = '?PageNumber={page}'.format(page=page)
            yield response.follow(next, self.pagination)

    def pagination(self, response):
        for href in response.css('div.jum-item-titlewrap').css('a::attr(href)'):
            yield response.follow(href, self.parse_products)

    def parse_products(self, response):
        product_name = response.css("div.jum-column-main").css("h1::text").get()
        page_title = response.css('title::text').get()

        # only extract the description when the p is an immediate child of dd.active, otherwise it's not a description
        description = response.css('div.jum-summary-description p::text').get()

        image_url = response.css('div.jum-product-image-figure').css("img").xpath("@data-jum-src").get()

        number_of_units = response.css('div.jum-sale-price-info span.jum-pack-size::text').get()

        if number_of_units is not None:
            if " g" in number_of_units or " l" in number_of_units or " kg" in number_of_units or " ml" in number_of_units:
                weight = WeightStandardizer.standardize(number_of_units)
                size = None
            else:
                size = number_of_units
                weight = None
        else:
            size = None
            weight = None

        # nothing
        category = None

        # get both parts of the price
        price_euro = response.css('span.jum-price-format::text').getall()[0]
        price_cent = response.css('span.jum-price-format::text').get()
        price = price_euro+'.'+price_cent

        price_per_unit = response.css('span.jum-price-format::text').getall()[1]

        yield create_grocery_bot_item(product_name, page_title, description, 'jumbo', response.url, dt.now(), weight,
                                      size, category, price, image_url)
