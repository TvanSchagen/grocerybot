# GroceryBot

Open source crawlers for groceries

## Installing

### Front-end

To install packages `npm install`

### Back-end

To install packages `pip install -r requirements.txt`

## Running

### Front-end

To run `npm start`

### Back-end

To run a single spider `scrapy crawl <spider name>`

To run all spiders in multiple processes `python multi_threaded_crawler.py`

To index all outputs to ElasticSearch `python multi_threaded_indexer.py` (make sure ElasticSearch instance is running at http://localhost:9200)