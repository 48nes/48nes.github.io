+++
title = "The Path to Password Protection"
date = 2021-09-28
+++
Over the past week, I've been working on creating an alternative to Pastebin specifically tailored towards my needs as a frontend hobbyist developer on [Toyhouse](https://48nes.github.io/projects/toyhouse/). While you can read more about the site and its features [here](https://48nes.github.io/projects/eightbyte-codes/), I wanted to elaborate on the long (and arduous) path to creating password protected pages.

### Pre-Password Protection

Before I decided to migrate P2U (pay to use) content onto my own site, I tested the waters with only F2U (free to use) content. Back when the site was only hosting my free content (I say "back when", but I mean 3 days ago), I had placed all of the various webpages in a static folder. This was extremely low security, but it was the easiest method and, as the content was F2U, I had not considered security measures.

### First Attempt with Passwords

When I first began attempts to move P2U content onto the site, I employed the same mechanic I had used with F2U content except adding another toggle in the JS of the file and an input button with an onclick function to trigger the JS function. 

The JS function would proceed to add a hidden class to the password content box and remove the hidden class from the code box. 

#### Key Problems

The key problem with this approach was the password box could be easily evaded by conducting inspect element on the page. Obviously, this was a no-go. 

### JavaScript Handling

The second thing I attempted was having JavaScript handle finding the template code itself once a password was inputted. The innerHTML of the `textarea` where the code would be was left blank in the template and the onclick function would take in a param to find the specific code that was requested. 

This approach successfully fixed the key problems of my last approach; running inspect element would show an empty textarea until the password was inputted. However, this method was not without its own issues.

#### Key Problems

The main problem with this approach was the files had to be kept in the static folder in order for the JavaScript to be able to access them. This meant that users could easily evade the password by going directly to the file, with the path to the file easily accessible through inspect element.

### Current Approach

The current approach involves a second form following the username verification form. The password is then posted to the server, where the code is found in Python and then returned to the webpage. This approach ensures security as the server handles finding the code, rather than having the browser search for the code.

### Alternative Approach

Another approach I considered was encrypting the template code in Python, sending the encrypted String to the page, and then decrypting through JS. In the end, I went against this approach as it involved importing encryption libraries for Python and JS and I wanted to keep it more lightweight. 
