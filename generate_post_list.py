import os
import codecs
from bs4 import BeautifulSoup
import datetime
POST_PATH = "posts"

post_list = []

for post in os.listdir(POST_PATH):
    g=codecs.open("{}/{}".format(POST_PATH, post), 'r')
    f = g.read()
    soup = BeautifulSoup(f, 'html.parser')
    tags = soup.find(class_="post-title")
    assert len(tags) == 1, "Missing title or too many titles"
    title = str(tags.text)

    date = soup.find_all(class_="post-date")
    assert len(date) == 1, "Missing date or too many dates"
    format_ = "%d-%m-%Y"
    date = datetime.datetime.strptime(date[0].text, format_)
    
    post_list.append((date, title, post))

sorted_post_list = sorted(post_list, key=lambda x:x[0], reverse=True)

final = []

for date, title, link in sorted_post_list:
    list_item = '<p> {} &nbsp; <span class="links"><a href="/{}/{}">{}</a></span></p>'.format(
        date.strftime("%Y-%m-%d"),
        POST_PATH,
        link,
        title
    )
    final.append(list_item)

final_list = "\n\t\t\t\t".join(final)
blog_page = """
<!doctype html>

<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <title> gwpicard </title>
        <link rel="shortcut icon" type="image/ico" href="favicon.ico"/>
        <link href="style.css" type="text/css" rel="stylesheet" /> 
    </head>
    <body>
        <header>
            <h1 class="title"><a href="/">gwpicard</a></h1>
            <h2 class="page-title">/blog</h2>
        </header>
        <main>
            <div id="post-list">
                {}
            </div>
        </main>
        <footer></footer>
    </body>
</html>
""".format(final_list)

with open("blog.html", 'w') as f:
    f.write(blog_page)