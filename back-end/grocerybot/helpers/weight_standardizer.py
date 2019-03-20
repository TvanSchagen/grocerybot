import re


class WeightStandardizer:

    # todo: deal with things like '4 x 250 ml'

    @staticmethod
    def standardize_quantity(input):
        if input is None:
            return None
        weight = input.lower()
        weight = weight.replace(" ", "")
        weight = weight.replace(",", ".")
        match = re.search("(.+(g|ml|l|liter|gram|kilogram|kg|dl|cl|deciliter|centiliter))", weight)
        if match is None:
            return None
        match = match.group()
        if re.match(".+(dl|deciliter)", match):
            quantity = re.search("[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?", match).group()
            quantity = float(quantity) * 100
        elif re.match(".+(cl|centiliter)", match):
            quantity = re.search("[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?", match).group()
            quantity = float(quantity) * 10
        elif re.match(".+(ml|milliliter)", match):
            quantity = re.search("[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?", match).group()
            quantity = float(quantity)
        elif re.match(".+(l|kg|liter|kilogram)", match):
            quantity = re.search("[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?", match).group()
            quantity = float(quantity) * 1000
        else:
            quantity = re.search("[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?", match).group()
        return int(quantity)

    @staticmethod
    def standardize_indicator(input):
        if input is None:
            return None
        weight = input.lower()
        weight = weight.replace(" ", "")
        match = re.search(".+(g|ml|l|liter|gram|kilogram|kg|dl|cl|deciliter|centiliter)", weight)
        if match is None:
            return None
        match = match.group()
        if re.match(".+(kg|kilogram)", match):
            indicator = "g"
        elif re.match(".+(l|liter|dl|deciliter|cl|centiliter)", match):
            indicator = "ml"
        else:
            indicator = re.sub("\d", "", match)
        return indicator
