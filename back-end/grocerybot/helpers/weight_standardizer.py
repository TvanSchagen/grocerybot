import re

class WeightStandardizer:

    # todo: deal with things like '4 x 250 ml'

    @staticmethod
    def standardize_quantity(input):
        if (input == None):
            return None
        weight = input.replace(" ", "")
        weight = weight.replace(",", ".")
        match = re.search("(\d+(g|ml|l|liter|gram|kilogram|kg|dl|cl|deciliter|centiliter))", weight).group()
        if (re.match("(\d+(l|kg|liter|kilogram))", match)):
            quantity = re.sub("\D", "", match)
            quantity = float(quantity) * 1000
        elif (re.match("(\d+(dl|deciliter)", match)):
            quantity = re.sub("\D", "", match)
            quantity = float(quantity) * 10
        elif (re.match("(\d+(cl|centiliter)", match)):
            quantity = re.sub("\D", "", match)
            quantity = float(quantity) * 100
        else:
            quantity = float(re.sub("\D", "", match))
        return int(quantity)

    @staticmethod
    def standardize_indicator(input):
        if (input == None):
            return None
        weight = input.replace(" ", "")
        match = re.search("(\d+(g|ml|l|gram|kilogram|kg))", weight).group()
        if (re.match("(\d+(kg|kilogram))", match)):
            indicator = "g"
        elif (re.match("(\d+(l|liter|dl|deciliter|cl|centiliter))", match)):
            indicator = "ml"
        else:
            indicator = re.sub("\d", "", match)
        return indicator