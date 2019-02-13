from scrapy import spiderloader
from scrapy.utils.project import get_project_settings
from scrapy.crawler import CrawlerProcess
from scrapy.utils.log import configure_logging

# load global settings
settings = get_project_settings()

# create a spider loader that gets all the spiders in our project
spider_loader = spiderloader.SpiderLoader.from_settings(settings)

# create a CrawlerProcess that starts a Twisted reactor to asyncronously execute the crawlers
process = CrawlerProcess(get_project_settings())

# load logging settings
configure_logging()

# loop through all the spiders in the loader, and add them to the process
for spider_name in spider_loader.list():
    print("Starting process for spider '%s'" % (spider_name))
    process.crawl(spider_name) 

process.start()