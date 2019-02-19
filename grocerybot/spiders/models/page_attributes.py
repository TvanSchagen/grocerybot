import datetime
import string


class PageAttributes:
    """Attributes that accompany every scraped page. Used for easy indexing.

    Attributes:
        id (int): universal document id (used throughout the mined documents)
        url (str): the remote url of the file in the supermarket's webpage.
        filepath (str): the path of the file in the disk.
        timestamp (datetime): the timestamp when the page was crawled.
    """
    id: int
    url: string
    filepath: string
    timestamp: datetime

    def __init__(self, url, filepath, timestamp):
        self.url = url
        self.filepath = filepath
        self.timestamp = timestamp
