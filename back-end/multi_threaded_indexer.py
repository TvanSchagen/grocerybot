import json
import os
import sys
import datetime
from multiprocessing import Process
from elasticsearch_dsl import connections
from grocerybot.indexers.product_indexer import Product


def start_indexer(output_file_name):
    # connect to es instance
    es = connections.create_connection(hosts=['localhost'])

    # check if index already exists
    if not es.indices.exists(index="product"):
        # create the mappings in elasticsearch
        Product.init()

    filename = output_file_name
    if os.path.isfile(filename):
        print("file found, opening " + filename)
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
    # if user did not specify date, take todays date
    if (len(sys.argv) < 2):
        now = datetime.datetime.now()
        append = (str(now.day) + "-" + str(now.month) + "-" + str(now.year))
        print("checking for date " + str(append))
    else:
        # else, take the users input
        append = sys.argv[1]
        print("checking for date " + str(sys.argv[1]))
    
    # start building the index in parallel
    Process(target=start_indexer, args=(append + '_ah.json',)).start()
    Process(target=start_indexer, args=(append + '_vomar.json',)).start()
    Process(target=start_indexer, args=(append + '_coop.json',)).start()
    Process(target=start_indexer, args=(append + '_jumbo_products.json',)).start()
    Process(target=start_indexer, args=(append + '_plus_products.json',)).start()
