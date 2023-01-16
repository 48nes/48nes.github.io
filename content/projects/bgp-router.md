+++
title = "BGP Router"
description = "TBD..."
date = 2021-10-22
[extra]
image = "https://github.com/48nes/48nes.github.io/blob/main/static/router.PNG?raw=true"
languages = ["Python"]
+++
This project is currently in a private repository. If you would like a full demonstration of features, please shoot me an email at [agnesshan@live.com](mailto:agnesshan@live.com).

### Project Description
For this project, we implemented a simple BGP router to route messages to and from a collection of networks. In passing a package from one router to another, we had to ensure that the best path was selected based on localpref, self origin, ASPath length, and then by IP. 

Additionally, we had to ensure that peer to peer, peer to prov, and prov to peer routes were pruned. 

Finally, we also implemented path coalescing. This was the most challenging part as we had to support both aggregation and disaggregation; we kept a copy of non-aggregated paths which we would update at the same time so that if a disaggregation call was made, we had a backup copy. 