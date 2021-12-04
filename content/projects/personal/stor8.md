+++
title = "STOR8"
description = "stor8 dark"
date = 2021-09-28
[taxonomies]
primary-language = ["Python"]
secondary-language = ["HTML"]
[extra]
image = "https://raw.githubusercontent.com/48nes/48nes.github.io/main/static/stor8%20dark.PNG"
category = "Fullstack"
+++
<img src="https://github.com/48nes/48nes.github.io/blob/main/content/projects/stor8%20light.jpeg?raw=true" style="width:33%;"/> <img src="https://github.com/48nes/48nes.github.io/blob/main/content/projects/stor8%20dark.jpeg?raw=true" style="width:33%;"/> <img src="https://github.com/48nes/48nes.github.io/blob/main/content/projects/eightbyte.PNG?raw=true" alt="drawing" style="width:33%;"/>

I created STOR8 as an alternative to Pastebin specific for storing HTML and CSS templates for [toyhouse](https://48nes.github.io/projects/toyhouse/). The site is written in Python using the Flask library. This project page details both the version of STOR8 released to the public and my personal modified version, [8byte Codes](https://eightbyte-codes.herokuapp.com).

### Features

#### STOR8

1. Up to 5 layers of folders (note: it is possible to have more layers of folders; the UI will simply not support any more than 5)
2. Copy all button allows users to quickly copy/paste shared codes
3. Password feature can be enabled/disabled on a code by code basis
4. Base UI comes with light/dark mode toggles
5. UI is farely barebones; it can be easily customized by users to suit their own needs
6. Setup is easy and documented in the [respository](https://github.com/48nes/stor8)

#### Premium Features

In addition to everything listed above, my own site has a few additional features.

1. Username Verification

Before being able to access my templates, a user must input their username to confirm they have read my Terms of Service. Their username is then checked against a list of users scraped from my forum post to ensure the user has read the rules. After verification, the data is saved in browser so users do not need to re-validate information each time.

2. File Bundles

Certain files are bundled together. You can view examples of this [here](https://eightbyte-codes.herokuapp.com/premium/reef) and [here](https://eightbyte-codes.herokuapp.com/premium/roadtrip). 

#### Live Demo

You can view the public version of STOR8 at [stor8.herokuapp.com](https://stor8.herokuapp.com/) and a beta demo of all features at [eightbyte-codes.herokuapp.com](https://eightbyte-codes.herokuapp.com).

STOR8's source code is available in [this repository](https://github.com/48nes/stor8).
