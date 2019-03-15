import re

class WeightStandardizer:

    # todo: deal with things like '4 x 250 ml'

    @staticmethod
    def standardize(input):
        # delete spaces
        weight = input.replace(" ", "")
        # match and return first input
        match = re.search("(\d+(g|ml|l|gram|kilogram|kg))", weight).group()
        match = match.replace("gram", "g")
        match = match.replace("kilogram", "kg")

        if (re.match("(\d+(l))", match)):
            quantity = re.sub("\D", "", match)
            quantity = int(quantity) * 1000
            match = quantity + "ml"
        elif (re.match("(\d+(kg))", match)):
            quantity = re.sub("\D", "", match)
            quantity = int(quantity) * 1000
            match = quantity + "g"

        return match

    @staticmethod
    def standardize_quantity(input):
        weight = input.replace(" ", "")
        weight = weight.replace(",", ".")
        match = re.search("(\d+(g|ml|l|liter|gram|kilogram|kg))", weight).group()
        if (re.match("(\d+(l|kg|liter|kilogram))", match)):
            quantity = re.sub("\D", "", match)
            quantity = int(quantity) * 1000
        else:
            quantity = int(re.sub("\D", "", match))
        return quantity

    @staticmethod
    def standardize_indicator(input):
        weight = input.replace(" ", "")
        match = re.search("(\d+(g|ml|l|gram|kilogram|kg))", weight).group()
        if (re.match("(\d+(kg|kilogram))", match)):
            indicator = "g"
        elif (re.match("(\d+(l|liter))", match)):
            inidcator = "ml"
        else:
            indicator = re.sub("\d", "", match)
        return indicator