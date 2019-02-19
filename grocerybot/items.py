# -*- coding: utf-8 -*-

import datetime
import string

import scrapy


def create_grocery_bot_item(title: string, url: string, filepath: string, timestamp: datetime):
    """
    Creates a GrocerybotItem object, assigns it's fields and returns it.
    :param title: title of the parsed product
    :param url: remote url location of the product
    :param filepath: local path of the saved page
    :param timestamp: date & time when it was crawled
    :return: GroverybotItem with all the fields assigned
    """
    item = GrocerybotItem()

    item['title'] = title
    item['url'] = url
    item['filepath'] = filepath
    item['timestamp'] = timestamp.strftime("%d-%m-%Y %H:%M:%S")

    return item


class GrocerybotItem(scrapy.Item):
    """Attributes that accompany every scraped page. Used for easy indexing.

    Attributes:
        id (int): universal document id (used throughout the mined documents)
        url (str): the remote url of the file in the supermarket's webpage.
        filepath (str): the path of the file in the disk.
        timestamp (datetime): the timestamp when the page was crawled.
    """

    id = scrapy.Field()
    title = scrapy.Field()
    url = scrapy.Field()
    filepath = scrapy.Field()
    timestamp = scrapy.Field()
