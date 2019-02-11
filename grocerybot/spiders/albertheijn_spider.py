import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class AlbertHeijnSpider(CrawlSpider):
    name = 'albertheijn'
    allowed_domains = ['ah.nl']
    start_urls = ['https://www.ah.nl/producten']

    custom_settings = {
        'DOWNLOAD_DELAY': 0.5
    }

    rules = (
        # Extract links that include 'producten'
        Rule(LinkExtractor(allow=()), callback="log", follow = True),

        # Extract links matching 'producten/product' and parse them with the spider's method parse_item
        Rule(LinkExtractor(allow=(r'/producten/product/', )), callback='parse_item', follow = True),
    )

    def log(self, response):
        self.logger.info('Traversing..')

    def parse_item(self, response):
        self.logger.info('Item: ', response.url)
        # page = response.url.split("/")[-1]
        # filename = 'ah-%s.html' % page
        # with open(filename, 'wb') as f:
        #     f.write(response.body)
        # self.log('Saved file %s' % filename)