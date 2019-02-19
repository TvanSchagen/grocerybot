# -*- coding: utf-8 -*-

import datetime
import string

import scrapy


def create_grocery_bot_item(
        product_name: string, page_title: string, description: string,
        supermarket: string, url: string, date: datetime, weight: string,
        size: string, category: string, price: string):
    """
    Creates a GrocerybotItem object, assigns it's fields and returns it.
    """
    item = GrocerybotItem()

    item['product_name'] = product_name
    item['page_title'] = page_title
    item['description'] = description
    item['supermarket'] = supermarket
    item['url'] = url
    item['date'] = date.strftime("%d-%m-%Y %H:%M:%S")
    item['weight'] = weight
    item['size'] = size
    item['category'] = category
    item['price'] = price

    return item


class GrocerybotItem(scrapy.Item):
    """Attributes that accompany every scraped page. Used for easy indexing.
    """

    product_name = scrapy.Field()
    page_title = scrapy.Field()
    description = scrapy.Field()
    supermarket = scrapy.Field()
    url = scrapy.Field()
    date = scrapy.Field()
    weight = scrapy.Field()
    size = scrapy.Field()
    category = scrapy.Field()
    price = scrapy.Field()
