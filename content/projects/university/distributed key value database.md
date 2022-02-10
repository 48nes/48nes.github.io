+++
title = "Key Value Database"
date = 2021-12-17
[taxonomies]
primary-language = ["Python"]
[extra]
image = "https://github.com/48nes/48nes.github.io/blob/main/static/keyvalue.PNG?raw=true"
category = "Networks and Distributed Systems"
+++
This project is currently in a private repository. If you would like a full demonstration of features, please shoot me an email at [agnesshan@live.com](mailto:agnesshan@live.com).

### Project Description
For this project, we implemented a version of the [Raft consensus algorithm](https://raft.github.io/raft.pdf) for managing logs. To ensure that our database was accurate, we had to ensure that we could handle packet drops, follower failures, and leader failures. 

We implemented the Raft election process and ensured that following a failure, a new leader could be elected and resume responding to clients. 