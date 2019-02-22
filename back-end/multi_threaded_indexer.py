import json
import os
import sys
from datetime import datetime
from multiprocessing import Process

from elasticsearch_dsl import Document, Date, Text, connections, Float

class Product(Document):
    product_name = Text()
    page_title = Text()
    description = Text()
    supermarket = Text()
    url = Text()
    date = Date()
    weight = Text()
    size = Text()
    category = Text()
    price = Float()

    class Index:
        name = 'product'
        settings = {
            "analysis": {
                "filter": {
                    "dutch_stop": {
                        "type": "stop",
                        "stopwords": "_dutch_"
                    },
                    "dutch_keywords": {
                        "type": "keyword_marker",
                        "keywords": ["voorbeeld"]
                    },
                    "dutch_stemmer": {
                        "type": "stemmer",
                        "language": "dutch"
                    },
                    "dutch_override": {
                        "type": "stemmer_override",
                        "rules": [
                            "fiets=>fiets",
                            "bromfiets=>bromfiets",
                            "ei=>eier",
                            "kind=>kinder"
                        ]
                    }
                },
                "analyzer": {
                    "rebuilt_dutch": {
                        "tokenizer": "standard",
                        "filter": [
                            "lowercase",
                            "dutch_stop",
                            "dutch_keywords",
                            "dutch_override",
                            "dutch_stemmer"
                        ]
                    }
                }
            }
        }

    def save(self, **kwargs):
        return super(Product, self).save(**kwargs)

    def is_published(self):
        return datetime.now() > self.date

def start_indexer(output_file_name):
    # connect to es instance
    connections.create_connection(hosts=['localhost'])
    # create the mappings in elasticsearch
    Product.init()

    filename = output_file_name
    if os.path.isfile(filename):
        # load json array
        input_file = open(filename)
        json_array = json.load(input_file)

        for product_json in json_array:
            # create and save the product
            product = Product(product_name=product_json['product_name'],
                                page_title=product_json['page_title'],
                                description=product_json['description'],
                                supermarket=product_json['supermarket'],
                                url=product_json['url'],
                                date=product_json['date'],
                                weight=product_json['weight'],
                                size=product_json['size'],
                                category=product_json['category'],
                                price=product_json['price'])
            product.save()
            print("saved " + product_json['url'])

        print('successfully saved data from: ' + filename)
    else:
        print('file not found: ' + filename)


if __name__ == "__main__":
    Process(target=start_indexer, args=('ah.json',)).start()
    Process(target=start_indexer, args=('vomar.json',)).start()
    Process(target=start_indexer, args=('coop.json',)).start()
    Process(target=start_indexer, args=('jumbo_products.json',)).start()
    Process(target=start_indexer, args=('plus_products.json',)).start()
