import scrapy


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
        # page_title = page_title.replace('_', '')

        filename = 'data/vomar/vomar-%s.html' % title
        try:
            with open(filename, 'wb') as f:
                f.write(response.body)
        except:
            return

        yield dict(title=title, pageTitle=page_title, url=response.url)
