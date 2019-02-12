import scrapy


class ProductsSpider(scrapy.Spider):
    name = 'jumbo_products'

    custom_settings = {
        'DOWNLOAD_DELAY': 0.5
    }

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
        #get number of pages
        pages = int(response.css('div.ws-product-listing-pagination').xpath('@data-jum-pagecount').getall()[0])

        for page in range(0, pages-1):
            next = '?PageNumber={page}'.format(page=page)
            yield response.follow(next, self.pagination)

    def pagination(self, response):
        for href in response.css('div.jum-item-titlewrap').css('a::attr(href)'):
            yield response.follow(href, self.parse_products)

    def parse_products(self, response):
        page = response.url.split("/")[-3]
        filename = 'data/jumbo/%s.html' % page
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('Saved file %s' % filename)
