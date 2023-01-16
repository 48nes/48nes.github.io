+++
title = "Web Crawler"
description = "web crawler"
date = 2021-11-19
[extra]
image = "https://raw.githubusercontent.com/48nes/48nes.github.io/main/static/webcrawler.PNG"
languages = ["Python"]
+++
This project is currently in a private repository. If you would like a full demonstration of features, please shoot me an email at [agnesshan@live.com](mailto:agnesshan@live.com).

### Project Description
The goal of this project was to implement a web crawler to retrieve a set of flags from a fairly large (fake) social media platform. 

### Approach
We kept track of the "frontier", or uncrawled URLs, in a queue. We also kept track of crawled URLs to avoid duplication. 

We started with adding only `/` to our frontier and then went page by page. On each page, we first searched for whether the secret flag occurred. If it hadn't, we would add all URLs to the frontier provided they had not appeared in our list of crawled URLs. We would then also append the URLs to our crawled URLs so the frontier would not feature duplicates.

We also made sure to check the response given on each page. The following adjustments were made for each HTTP status code:
- 302, the redirect URL was added to the front of the frontier so it would be the next-traversed page
- 403, the page would be removed from the frontier and we would continue to the next page
- 500, we would not remove the page from the frontier so the crawler would retry to load the page

### Other Notes
While we did not implement it for this project, I think it is appropriate to mention that in future web crawlers, to add parallelism to our algorithm. We were fairly lucky in our average run time for our web crawler was 3-6 minutes, however, in order for greater efficiency, parallelism would have let us rely not as heavily on luck.

