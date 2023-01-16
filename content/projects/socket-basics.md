+++
title = "Socket Basics"
description = "socket basics"
date = 2021-09-29
[extra]
image = "https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
languages = ["Python"]
+++
This project is currently in a private repository. If you would like a full demonstration of features, please shoot me an email at [agnesshan@live.com](mailto:agnesshan@live.com).

### Project Description
For this project, I created a very simple client program to communicate with a server, both unencrypted and encrypted with TLS. The end goal of the project was to retrieve a secret flag from the server, after counting the number of times a character appeared in some random string.

The following text is duplicated from the README for this project.

## Approach

My approach followed these steps in order:

1. Get a list of all the arguments given
2. Check for errors with arguments (i.e. less than 2 arguments, port given is incorrect)
3. Depending on arguments, set port (or keep as default)
4. Set host and NUID from arguments given
5. Create a socket
6. If the `-s` flag is seen, wraps the socket
7. Connect the socket to the given host and port
8. Send the first Hello message

After these initial steps, a loop was executed while the server was sending "FIND" messages where:

1. While a newline was not found in the FIND message, the client would wait for more bytes
2. Once the entire message was read, the FIND string would be split into the `character` to be found within the `search_string`. 
3. A built in Python function would count the number of times the character appeared in the String.
4. The count would be sent to the server.
5. A new message would be read and checked to see if it was a FIND message, thus continuing the loop.

Finally, once the message given by the server was not a FIND message, the client would print either the secret flag or Unknown_Husky_ID if the ID given was invalid.

## Challenges

Luckily, most of the challenges I faced were (relatively) easily resolved. 

The first problem I faced was the original order in which I did things was:

1. Get the message as bytes
2. Split the bytes to find the character
3. Count the number of times that specific byte appeared in the long byte message

This led to a lot of difficulty with counting escaped characters, so I ended up changing the order to:

1. Get the message as bytes
2. Decode bytes to String
3. Use the built-in Python function to count the number of times the character appeared

The second problem I faced was testing on the Linux servers. This was, luckily, an even quicker fix. I hadn't realized the Linux servers didn't support Python above 3.6.8 and was previously using some 3.7 features (such as `with` and `.SSLContext()`).

Both of the above were quick one line fixes to make my client compatible with lower versions of Python. 

## Testing

Besides testing the general cases, I also made sure to test:

1. Invalid port given with -p
2. No port given with -p
3. -p 27994 with -s
4. Incorrect NUID
5. Not enough arguments passed