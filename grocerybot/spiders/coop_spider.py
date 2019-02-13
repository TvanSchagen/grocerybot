import scrapy


class ProductsSpider(scrapy.Spider):
    name = 'coop'
    start_urls = ['https://www.coop.nl/boodschappen']

    # start by crawling all pages from the start url, detect categories (that lead to overview pages) and parse them
    def parse(self, response):
        self.logger.info('main: %s' % response.url)
        for href in response.css('li.categoryItem').css('a::attr(href)'):
            yield response.follow(href, self.parse_overview_pages)

    # then parse the overview pages that follow from categories, and overview pages that follow from pagination within categories
    def parse_overview_pages(self, response):
        self.logger.info('cat: %s' % response.url)
        # detect individual product pages and parse them
        for href in response.css('div.formfields').css('a::attr(href)'):
            yield response.follow(href, self.parse_products)
        # detect pagination links and parse them
        for href in response.css('li.pagination__listItem').css('a::attr(href)'):
            yield response.follow(href, self.parse_overview_pages)

    # parse products and write each product to a file
    def parse_products(self, response):
        self.logger.info('product: %s' % response.url)
        # extract the title from the product
        title = response.css('h1.head1::text').get()
        # save the HTML with the extracted title
        filename = 'data/coop/%s.html' % title
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.logger.info('Saved file %s' % filename)
