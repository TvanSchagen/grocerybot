import json
import os
from multiprocessing import Process
from elasticsearch_dsl import connections
from grocerybot.indexers.product_indexer import Product


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
