import markdown
import os
import re
from bs4 import BeautifulSoup

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

def wrap(to_wrap, wrap_in):
        contents = to_wrap.replace_with(wrap_in)
        wrap_in.append(contents)

def skip_quote(soup):
    bq = soup.find("blockquote")
    if bq:
        return True
    return False

def is_unnumbered_list(soup):
    ul = soup.find("ul")
    if ul:
        return True
    return False

## FORMATTING ##

def format_quote(soup):
    p = soup.find("p")
    assert p, "No quote found to format"
    bq = soup.new_tag("blockquote")
    # p['class'] = p.get('class', []) + ['TBD'] # maybe add class later
    wrap(p, bq)

# TODO: only works for ul lists
def format_list(tag_list):
    ul = BeautifulSoup("<ul></ul>", "html.parser").ul #.new_tag("ul")
    wrap(tag_list[0], ul)
    for li in tag_list[1:]:
        ul.append(li)
    return BeautifulSoup(str(ul), 'html.parser')
    

def format_date(soup):
    date = soup.find("p")
    date['class'] = date.get('class', []) + ['post-date']

def format_title(soup):
    title = soup.find("h1")
    if title:
        title['class'] = title.get('class', []) + ['post-title']

def format_links(soup):
    """
    Find all links in soup and formats them correctly
    """
    links = soup.find_all("a")
    if len(links) > 0:
        for link in links:
            span = soup.new_tag("span")
            span['class'] = span.get('class', []) + ['links']
            wrap(link, span)
            link['target'] = link.get('target', []) + ['_blank']

def generate_html_from_markdown(post_list):
    for post in post_list:
        print('converting post: {}'.format(post))
        with open('{}/{}.md'.format(POST_PATH, post), 'r') as f:
            text = f.read()
            html = markdown.markdown(text)

        final_html = []
        # line by line custom html formatting
        split_items = html.split("\n")
        quote = 0 # not most elegant solution
        list_ = 0 # not most elegant solution
        a_list = []
        for ind, elem in enumerate(split_items):
            soup = BeautifulSoup(elem, 'html.parser')
            # format date on first line
            if ind == 0:
                date_match = re.findall(r"\d\d-\d\d-\d\d\d\d", elem)
                assert date_match, "No date found in post"
                assert len(date_match) == 1, "Too many dates found in post"
                format_date(soup)
                final_html.append(str(soup))
                continue
            
            # TODO: needs to work for numbered lists too
            if is_unnumbered_list(soup):
                list_ = 1
                continue
            if list_ == 1: # track elements in list to wrap them
                if soup.find("li"):
                    a_list.append(soup.find("li"))
                    continue
                else:
                    list_ = 0
                    soup = format_list(a_list)
            
            if skip_quote(soup):
                quote = 1
                continue
            if quote == 1:
                format_quote(soup)
                quote = 0

            format_title(soup)
            format_links(soup)
            
            final_html.append("\t\t\t\t\t"+str(soup))
                
        
        # join all custom html and save
        final_html = "\n".join(final_html)
        page = markdown_to_template(final_html)
        with open('{}/{}.html'.format(BASE_PATH, post), 'w') as f:
            print("saving post: {}".format(post))
            f.write(page)