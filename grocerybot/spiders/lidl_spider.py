import scrapy


class LidlSpider(scrapy.Spider):
    name = "lidl"

    start_urls = [
        'https://www.lidl.nl/nl/Acties.htm',
    ]

    def parse(self, response):
        # for quote in response.css('div.quote'):
        #     text = quote.css("span.text::text").get()
        #     author = quote.css("small.author::text").get()
        #     tags = quote.css("div.tags a.tag::text").getall()
        #
        #     yield dict(text=text, author=author, tags=tags)

        # General ways to follow a link
        # next_page = response.css('li.next a::attr(href)').get()
        # if next_page is not None:
        #     yield response.follow(next_page, callback=self.parse)

        # If the link is inside an anchor tag

        for a in response.css('li.productgrid__item a.product__body::attr(href)').getall():
            yield response.follow(a, callback=self.parse_product)

    def parse_product(self, response):
        title = response.css('h1.attributebox__headline--h1::text').get()
        yield dict(title=title)

        for a in response.css('div.product.product--tile a.product__body::attr(href)').getall():
            yield response.follow(a, callback=self.parse_product)
