from multiprocessing import Process
from scrapy.utils.project import get_project_settings
from scrapy.crawler import CrawlerProcess
from scrapy.utils.log import configure_logging
import datetime


def start_crawler(spider_name):
    # load logging settings
    configure_logging()
    # create a CrawlerProcess that starts a Twisted reactor to asyncronously execute the crawlers
    settings = get_project_settings()
    # set output format to json
    settings.set('FEED_FORMAT', 'JSON')
    # create current date in string
    now = datetime.datetime.now()
    current_date = (str(now.day) + "-" + str(now.month) + "-" + str(now.year))
    # set output type to file
    settings.set('FEED_URI', current_date + "_" + spider_name + '.json')
    process = CrawlerProcess(settings)
    process.crawl(spider_name)
    process.start()


if __name__ == "__main__":
    Process(target=start_crawler, args=('ah',)).start()
    Process(target=start_crawler, args=('vomar',)).start()
    Process(target=start_crawler, args=('coop',)).start()
    Process(target=start_crawler, args=('jumbo_products',)).start()
    Process(target=start_crawler, args=('plus_products',)).start()
