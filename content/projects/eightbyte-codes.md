+++
title = "8byte Codes"
description = "eightbyte"
date = 2021-09-28
[taxonomies]
primary-language = ["Python"]
secondary-language = ["HTML"]
+++

![image of site](https://github.com/48nes/48nes.github.io/blob/main/content/projects/eightbyte.PNG?raw=true)

The eightbyte-codes site is a site I developed as an alternative to Pastebin to store my HTML and CSS templates for [toyhouse](https://48nes.github.io/projects/toyhouse/). The site is written in Python using the Flask library.

#### Current Features

1. Username Verification
Before being able to access my templates, a user must input their username to confirm they have read my Terms of Service. Their username is then checked against a list of users scraped from my forum post to ensure the user has read the rules. After verification, the data is saved in browser so users do not need to re-validate information each time.

2. Password Protection
P2U templates all have password protection enabled. A password matching the password in the database must be entered in order to access these templates.

3. File Bundles
Certain files are bundled together. You can view examples of this [here](https://eightbyte-codes.herokuapp.com/premium/reef) and [here](https://eightbyte-codes.herokuapp.com/premium/roadtrip). 

4. Copy All Button
The simplest, but most useful, feature, once a template is unlocked, users may copy the entire code to template by using the Copy All button in the top right. 

#### Live Demo

You can view a beta demo at [eightbyte-codes.herokuapp.com](https://eightbyte-codes.herokuapp.com).

This project is currently in a private repository. 
