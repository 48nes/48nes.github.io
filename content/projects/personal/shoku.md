+++
title = "Shoku"
date = 2022-04-13
[taxonomies]
primary-language = ["Python"]
secondary-language = ["CSS"]
[extra]
image = "https://github.com/48nes/48nes.github.io/blob/main/public/shoku.PNG?raw=true"
category = "Fullstack"
+++

This project is currently a work in progress. The below is the Alpha version created alongside [Nick Bacskia](https://github.com/nbacskai) for CS3200: Database Design. 

#### Video Demo

<iframe src="https://www.youtube.com/embed/THBG_hOpjvw" frameborder="0" allowfullscreen="true"> </iframe>

#### READ.ME

Our `READ.ME` for this project has been replicated below. The project is currently being hosted in a private repository, email me at [agnesshan@live.com](mailto:agnesshan@live.com) for inquiries.

# Shoku

Shoku is a pokemon-like mini game featuring battling between various different "Shokus". Each shoku is a food-themed character.

## Installing and Running Locally

The shoku app is written in Python3 and it is recommended to run in a virtual environment. To create a virtual environment run 

`python3 -m venv venv`

Then activate with 

`.\venv\Scripts\activate` on Windows

or 

`source venv/bin/activate` on MacOS/Linux

Once the environment is activated, install the required modules from the requirements.txt

`pip install -r requirements.txt`

To set up the database locally, first you have to create a .env file in the shoku root directory. There is an example named .env.example that you can copy from.
The format is 

`
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
`

Once you have the .env file with correct info and the virtual environment activated, cd into the database folder and run the creation script.

`
cd database
python create_database.py
`

If there are any errors, double check that you have the correct information in your .env file.
Once the database is created you can go back to the project root folder and run the web server.

`
cd ..
python main.py
`

Once that is running you can visit the webpage at `http://127.0.0.1:5000`

## About

Shoku was written in Python and uses MySQL databases. The site employs the Flask framework. It is currently only hosted locally.

### Credits
- [Agnes Shan](https://github.com/48nes)
- [Nick Bacskai](https://github.com/nbacskai)

Special thanks to [Carter](https://github.com/darling) for the game idea and for lending us all the image assets used.

## Features
Shoku's main feature allows users to collect and assemble various Shokus into teams.

## Implementation
For each page, we would connect to the database in the backend. Data would then be queried, which we would present to the front-end.

On several of these pages, forms were available in order for users to operate various functions to Create, Read, Update, and Delete tuples from the database.

## Future Features
- Password hashing for better security
- Support for team battles
- Support for pairing boosts
- Support for utensil boosts/item consumption
- Pagination and search functions for owned characters
- Battle stats for individuals and kitchens
- Support for more detailed user profiles, i.e. user profile pictures