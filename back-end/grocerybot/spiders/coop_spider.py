import scrapy

from grocerybot.helpers.weight_standardizer import WeightStandardizer

from datetime import datetime as dt
from grocerybot.items import create_grocery_bot_item


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
        weight_or_size = response.css('header.gi h2.subHead::text').get()
        
        if weight_or_size is not None:
            if "stuk" in weight_or_size:
                size = weight_or_size
                weight_q = None
                weight_ind = None
            else:
                weight_q = WeightStandardizer.standardize_quantity(weight_or_size)
                weight_ind = WeightStandardizer.standardize_indicator(weight_or_size)
                size = None
        else:
            size = None
            weight_q = None
            weight_ind = None  

        # image = response.css('div.gi b0_12 img').xpath('@data-srcset').get()
        img_src = response.css('div.b0_12').css('img').xpath('@data-srcset').get().split(' ')[0]

        # grab the n-2 th element of the item/category breadcrumb
        category = response.css('ol.cf span::text')[-2].get()
        # get both parts of the price (replace comma's by dots to make for easy float parsing)
        price = str(response.css('ins.price::text').get() + response.css('ins.price span.sup::text').get()).replace(',', '.')

        #with open('coop-' + (time.strftime("%d%m%Y")) + '.txt', 'a+') as f:
        #    f.write(response.url + '\n')
        #    print(f.read())
        #    f.close()

        yield create_grocery_bot_item(product_name, page_title, description, 'coop', response.url, dt.now(), weight_q, weight_ind, size, category, price, img_src)
