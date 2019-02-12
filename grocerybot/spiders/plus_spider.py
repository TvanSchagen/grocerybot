import scrapy


class ProductsSpider(scrapy.Spider):
    name = 'plus_products'

    start_urls = ['https://www.plus.nl/']

    def parse(self, response):
        # follow product categorie pages
        for href in response.css('li.category-menu__item').css('a::attr(href)'):
            #print(href)
            yield response.follow(href, self.parse_categories)

    def parse_categories(self, response):
        for href in response.css('li.ish-productList-item').css('a::attr(href)'):
            yield response.follow(href, self.parse_products)

    def parse_products(self, response):
        page = response.url.split("/")[-1]
        filename = 'data/plus/%s.html' % page
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('Saved file %s' % filename)
