from multiprocessing import Process
from scrapy.utils.project import get_project_settings
from scrapy.crawler import CrawlerProcess
from scrapy.utils.log import configure_logging

def start_crawler(spider_name):
    # load global settings
    # settings = get_project_settings()

    # create a spider loader that gets all the spiders in our project
    # spider_loader = spiderloader.SpiderLoader.from_settings(settings)

    # load logging settings
    configure_logging()
    # create a CrawlerProcess that starts a Twisted reactor to asyncronously execute the crawlers
    process = CrawlerProcess(get_project_settings())
    process.crawl(spider_name)
    process.start()


if __name__ == "__main__":
    Process(target=start_crawler, args=('ah',)).start()
    Process(target=start_crawler, args=('vomar',)).start()
    Process(target=start_crawler, args=('lidl',)).start()
    Process(target=start_crawler, args=('coop',)).start()
    Process(target=start_crawler, args=('jumbo_products',)).start()
    Process(target=start_crawler, args=('plus_products',)).start()
