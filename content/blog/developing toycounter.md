+++
title = "Developing Toycounter"
date = 2021-08-18
+++

Compared to my other projects, the Toyhouse Like Counter/Toycount.er (viewable [here](https://48nes.github.io/projects/toycounter/)!) was relatively simple and straightforward. From the ideation stage to project completion, I'd say it took roughly 6 hours (albeit 6 non-stop hours) total.

All in all, I think building Toycount.er was a good introduction to using [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) and [Gunicorn](https://gunicorn.org/), both of which I anticipate using in the future on other projects.

### The Scraper

Surprisingly, the actual scraping portion of the project was very straightforward and didn't require that much debugging. It essentially came down to three steps:

1. Accessing user's characters (in particular, characters that were listed as available to logged in users only)
2. Actually counting the likes on each character
3. Finding a way to host the site

#### Accessing Characters

I originally built Toycount.er to look directly at a user's character page, but I soon came to realize this would fail to count characters marked as visible to logged in users only, which constituted a fairly large portion of my demographic. I had run into this issue before when working on [LeetBot](https://48nes.github.io/projects/leetbot/), so I knew the solution was to create a dummy account and login using the Python requests library.

The code ended up being something like this:

```Python
with Session() as s:
  site = s.get("https://toyhou.se/~account/login")
  bs_content = BeautifulSoup(site.content, 'html.parser')
  token = bs_content.find("meta", attrs={'name':'csrf-token'}).get('content')
  login_data = {"login_username": DUMMY_ACCOUNT, "login_password": DUMMY_PASSWORD, "csrf_token": token}
  s.post("https://toyhou.se/~account/login", login_data)
```

#### Counting the Likes

Luckily for me, Toyhouse is not built dynamically (another problem I had run into while working on [LeetBot](https://48nes.github.io/projects/leetbot/) and a blog post for another day), so the process of counting likes was extremely simple.

First, I checked for how many pages of characters a user had*:

```Python
req = s.get(url)
soup = BeautifulSoup(req.content, 'html.parser')

pages = soup.find_all("li", {"class": "page-item"})
```

Then it was just a simple loop through all the pages with an additional loop to add each favorite count to the sum*:

```Python
for x in range(total_pages):
  page_req = s.get(page_url)
  page_soup = BeautifulSoup(page_req.content, 'html.parser')
  favorites = page_soup.find_all("span", {"class": "th-favorite-count"})
  for favorite in favorites:
    sum = sum + int(favorite.get_text())
```

*some code may have been shortened for clarity

#### Hosting the Site

Strangely, finding a way to host the site was the lengthiest part of the project. As I was already using Heroku to host LeetBot, I was a hesitant to use it for Toycount.er as well as I was afraid I'd go over the hours limit. However, I ended up using Heroku as I was more familiar with it.

The first challenge was setting up the various files required. From my work on LeetBot, I was aware of the general requirements. However, due to several key differences between bot hosting and web hosting on Heroku, setting the site up on Heroku proved difficult.

Early on, I found I was able to run everything, but Heroku would send a "H10-App Crashed" error. I ended up having to create a separate repo and slowly moved everything from the old repo into the new repo in order to gauge which parts of my code were causing Heroku to crash. The following were my major bugs:

1. Wrong version requirement in my requirements.txt
2. Incorrect Procfile, which is how I was led to use Gunicorn

While writing about it now makes these bugs seem trivial, they seemed impossible when actually working on the bot. All in all, working on Toycount.er has not just introduced me to some very useful libraries, but has also given me access to more strategies for debugging code when console error messages aren't quite as descriptive as hoped. 