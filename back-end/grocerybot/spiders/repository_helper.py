"""
Set of methods to keep the crawled repository up to date.
"""
import json
import os
import string
import sys

import requests


def remove_product_from_index(product_json):
    url = 'http://localhost:9200/product/_search?q=' + '"' + product_json['url'] + '"'
    r = requests.get(url)
    json_data = r.json()

    try:
        product = json_data['hits']['hits'][0]
        delete_r = requests.delete('http://localhost:9200/product/' + product['_id'])
        print(str(delete_r.status_code) + ' - ' + delete_r.text)
    except:
        print('error')
        print('returned json is: ' + json_data)


def delete_broken_links(directory: string):
    print('Parsing ' + directory + ' for json files.')
    for filename in os.listdir(directory):
        if filename.endswith('.json'):
            print('Parsing ' + filename + ' for non-working links.')
            input_file = open(os.path.join(directory, filename))
            json_array = json.load(input_file)
            exclude_list = []
            for product in json_array:
                r = requests.get(product['url'])
                if r.status_code == 404:
                    print('Non-working link was found: ' + product['url'])
                    exclude_list.append(product)

            # save only the products with a working url
            json_array = [product for product in json_array if product not in exclude_list]
            with open(filename, 'w') as f:
                json.dump(json_array, f)

            # remove non-working urls from the index
            for product in exclude_list:
                remove_product_from_index(product)

            print('Found ' + str(len(exclude_list)) + ' non-working links in total.')
            exclude_list = []
    pass


if __name__ == '__main__':
    if len(sys.argv) == 2:
        # get the filename from the command line args
        # remember: sys.argv[0] is always the current file.
        repo_dir = sys.argv[1]
        delete_broken_links(directory=repo_dir)
    else:
        print('Args should be given in the format [repository directory].')
