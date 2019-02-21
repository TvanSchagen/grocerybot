import json
import os
import sys
from datetime import datetime
from elasticsearch_dsl import Document, Date, Integer, Keyword, Text, connections, Float

# Define a default Elasticsearch client
connections.create_connection(hosts=['localhost'])


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

    def save(self, **kwargs):
        return super(Product, self).save(**kwargs)

    def is_published(self):
        return datetime.now() > self.date


if __name__ == '__main__':
    if len(sys.argv) == 2:
        # create the mappings in elasticsearch
        Product.init()

        # get the filename from the command line args
        # remember: sys.argv[0] is always the current file.
        filename = sys.argv[1]
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

            print('Successfully saved data from: ' + filename)
        else:
            print('File not found: ' + filename)

    else:
        print('Filename not specified.')

# Display cluster health
# print(connections.get_connection().cluster.health())
