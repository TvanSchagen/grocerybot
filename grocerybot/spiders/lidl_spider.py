import scrapy
from datetime import datetime as dt

class LidlSpider(scrapy.Spider):
    name = "lidl"

    start_urls = [
        'https://www.lidl.nl/nl/Acties.htm',
        'https://www.lidl.nl/nl/Acties.htm?id=546&week=1',
        'https://www.lidl.nl/nl/Acties.htm?id=546&week=2',
        'https://www.lidl.nl/nl/Acties.htm?id=347&week=1',
        'https://www.lidl.nl/nl/Acties.htm?id=348&week=1',
        'https://www.lidl.nl/nl/Acties.htm?id=372&week=1',
        'https://www.lidl.nl/nl/Acties.htm?id=372&week=2',
        'https://www.lidl.nl/nl/Acties.htm?id=398&week=1',
        'https://www.lidl.nl/nl/Acties.htm?id=398&week=2',
        'https://www.lidl.nl/nl/Acties.htm?id=568&week=1',
        'https://www.lidl.nl/nl/Acties.htm?id=558&week=1',
        'https://www.lidl.nl/nl/Nieuw-bij-Lidl.htm',
        'https://www.lidl.nl/nl/De-goedkoopste-van-Nederland-9047.htm',
        'https://www.lidl.nl/nl/Blijvend-in-prijs-verlaagd.htm',
        'https://www.lidl.nl/nl/Goed-getest.htm'
    ]

    custom_settings = {
        'DOWNLOAD_DELAY': 0.5
    }

    def parse(self, response):
        for a in response.css('li.productgrid__item a.product__body::attr(href)').getall():
            yield response.follow(a, callback=self.parse_product)

    def parse_product(self, response):
        title = response.css('h1.attributebox__headline--h1::text').get()
        page_title = response.css('title::text').get()

        filename = 'data/lidl/lidl-%s.html' % title
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('Saved file %s' % filename)

        yield dict(title=title, url=response.url, date_crawled=str(dt.now()), filename=filename)

        for a in response.css('div.product.product--tile a.product__body::attr(href)').getall():
            yield response.follow(a, callback=self.parse_product)

