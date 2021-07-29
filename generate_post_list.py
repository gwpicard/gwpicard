import os
POST_PATH = "posts"

import codecs
import re

for post in os.listdir(POST_PATH):
    g=codecs.open("{}/{}".format(POST_PATH, post), 'r')
    f = g.read()
    start = f.find("<h1>")
    start = start + 7
    end =  f.find("</h1>")
    end = end - 1
    paragraphs = f[start:end]
    print(paragraphs)
    g.close()