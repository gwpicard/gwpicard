import os
POST_PATH = "posts"

raw_page = """<!doctype html>

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
                <p class="post-date">xx-xx-20xx</p>
                <h1>Title</h1>
                <p style="text-align: center;">. &nbsp;&nbsp;. &nbsp;&nbsp;.</p>
                <p>content</p>
            </div>
        </main>
        <footer></footer>
    </body>

</html>
"""


with open(os.path.join(POST_PATH, 'untitled.html'), 'w') as f:
    f.write(raw_page)