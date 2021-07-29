import os
import codecs
from bs4 import BeautifulSoup
POST_PATH = "posts"

for post in os.listdir(POST_PATH):
    g=codecs.open("{}/{}".format(POST_PATH, post), 'r')
    f = g.read()
    soup = BeautifulSoup(f, 'html.parser')
    tags = soup.find_all("h1")
    for t in tags:
        if 'class="title"' not in t.text:
            print(t)

    date = soup.find_all(class_="post-date")
    assert len(date) == 1
    date = date[0].text
    print(date)