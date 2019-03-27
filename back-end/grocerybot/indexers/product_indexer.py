import json
import os
import sys
from datetime import datetime

import requests
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Document, Date, Text, connections, Float, Completion, Search, Keyword

# Define a default Elasticsearch client
# connections.create_connection(hosts=['localhost'])
connections.create_connection(
    hosts=['https://e084291822ed42bab3766eefee360eb2.eu-west-1.aws.found.io:9243'],
    http_auth='dim:asd123')


class Product(Document):
    product_name = Text(analyzer="rebuilt_dutch")
    # suggest = Completion(analyzer="rebuilt_dutch_autocomp")
    suggest = Completion()
    page_title = Text(analyzer="rebuilt_dutch")
    description = Text(analyzer="rebuilt_dutch")
    supermarket = Keyword()
    url = Text()
    date = Date()
    weight_q = Float()
    weight_ind = Text()
    size = Text()
    category = Text(analyzer="rebuilt_dutch")
    price = Float()
    img_url = Text()

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
                    },
                    "autocomplete_filter": {
                        "type": "edge_ngram",
                        "min_gram": 1,
                        "max_gram": 4
                    }
                },
                "analyzer": {
                    "rebuilt_dutch_autocomp": {
                        "tokenizer": "standard",
                        "type": "custom",
                        "filter": [
                            "lowercase",
                            "autocomplete_filter",
                            "dutch_stop",
                            "dutch_keywords",
                            "dutch_override",
                            "dutch_stemmer"
                        ]
                    },
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


def convert_json_to_product(product_json):
    return Product(product_name=product_json['product_name'],
                   suggest=product_json['product_name'],
                   page_title=product_json['page_title'],
                   description=product_json['description'],
                   supermarket=product_json['supermarket'],
                   url=product_json['url'],
                   date=product_json['date'],
                   weight_q=product_json['weight_q'],
                   weight_ind=product_json['weight_ind'],
                   size=product_json['size'],
                   category=product_json['category'],
                   price=product_json['price'],
                   img_url=product_json['img_url']
                   )


def document_exists(document):
    url = 'http://localhost:9200/product/_count?q=' + '"' + document.url + '"'
    r = requests.get(url)
    json_data = r.json()
    return json_data['count'] > 0


def create_index(directory):
    Product.init()

    # get the filename from the command line args
    # remember: sys.argv[0] is always the current file.
    for file in os.listdir(directory):
        if file.endswith('.json'):
            # load json array
            input_file = open(os.path.join(directory, file))
            json_array = json.load(input_file)

            for product_json in json_array:
                # create and save the product
                product = convert_json_to_product(product_json)
                product.save()

        print('Successfully saved data from: ' + file)


def update_index(filename):
    if os.path.isfile(filename):
        # load json array
        input_file = open(filename)
        json_array = json.load(input_file)

        for product_json in json_array:
            product = convert_json_to_product(product_json)
            exists = document_exists(product)
            if not exists:
                product.save()
            else:
                print('Skipping already indexed product: ' + str(product.product_name))

        print('Successfully saved data from: ' + filename)
    else:
        print('File not found: ' + filename)


if __name__ == '__main__':
    if len(sys.argv) == 3:
        # get the filename from the command line args
        # remember: sys.argv[0] is always the current file.
        input_path = sys.argv[1]
        operation = sys.argv[2]
        if operation == 'create':
            create_index(input_path)
        elif operation == 'update':
            update_index(input_path)
    else:
        print('Args should be given in the format [path of file/directory to index] [create or update].')

# Display cluster health
# print(connections.get_connection().cluster.health())
