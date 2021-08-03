import markdown
import os

BASE_PATH = "posts"
POST_PATH = "{}/md".format(BASE_PATH)
post_list = [md.split(".")[0] for md in os.listdir(POST_PATH) if md.endswith(".md")]

def markdown_to_template(html):
    page = """<!doctype html>

    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta charset="UTF-8">
            <title> gwpicard </title>
            <link rel="shortcut icon" type="image/ico" href="../favicon.ico"/>
            <link href="../style.css" type="text/css" rel="stylesheet" /> 
        </head>
        <body>
            <header>
                <h1 class="title"><a href="/">gwpicard</a></h1>
                <h2 class="page-title">/blog</h2>
            </header>
            <main>
                <div class="content">
                    {}
                </div>
            </main>
            <footer></footer>
        </body>

    </html>
    """.format(html)

    return page

for post in post_list:
    print('converting post: {}'.format(post))
    with open('{}/{}.md'.format(POST_PATH, post), 'r') as f:
        text = f.read()
        html = markdown.markdown(text)

    page = markdown_to_template(html)

    with open('{}/{}.html'.format(BASE_PATH, post), 'w') as f:
        f.write(page)