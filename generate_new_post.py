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
                <p class="post-date">XX-XX-20XX</p>
                <h1 class="post-title">Untitled</h1>
                <p style="text-align: center;">. &nbsp;&nbsp;. &nbsp;&nbsp;.</p>
                <p>
                    start text
                </p>
                <p style="text-align: center;">. &nbsp;&nbsp;. &nbsp;&nbsp;.</p>
                <p class="small-grey" style="text-align: center;">undertext</p> 
            </div>
        </main>
        <footer></footer>
    </body>

</html>

"""


with open(os.path.join(POST_PATH, 'untitled.html'), 'w') as f:
    f.write(raw_page)