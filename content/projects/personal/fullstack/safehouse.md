+++
title = "Safehou-se"
description = "An easy code editor for those unfriendly with code"
date = 2022-08-28
[extra]
image = "https://github.com/48nes/48nes.github.io/blob/main/public/safehouse.png?raw=true"
languages = ["TypeScript", "SCSS"]
+++

<img src="https://github.com/48nes/48nes.github.io/blob/main/public/safehouse.png?raw=true" alt="homepage image" width="100%" style="box-shadow: 0px 0px 5px #000000; margin-bottom: 20px;"/>

[Safehou-se](https://safehou-se.vercel.app) is a simple web application I built in a two day sprint. The project involved creating Template objects from a user given code template input (after sanitizing the input, of course), which could then be filled in by the user through inputs rather than having to go through the entire code themselves.

The project is an update on an old prototype created by [Carter](https://github.com/darling), known as [Bruhhouse](https://bruhhouse.vercel.app). 

On November 4, 2022, another feature was added to the site to add inline color styling to templates. This feature was built in a one day sprint. 

You can also read about my development process in the following blog posts on my web development blog! Parts 1-4 are a much shorter read, but I go much more in depth into my development process in Part 5, where I complete a major overhaul in redesigning my data structures to be recursive.

- [Part 1](https://8byte.vercel.app/blog/safehouse-1) - the very first beta version of the site with only global variables
- [Part 2](https://8byte.vercel.app/blog/safehouse-2) - adding input types and basic loop implementation
- [Part 3](https://8byte.vercel.app/blog/safehouse-3) - the inline color styling feature
- [Part 4](https://8byte.vercel.app/blog/safehouse-4) - accommodating using the same loop in multiple place (useful for tabs)
- [Part 5](https://8byte.vercel.app/blog/safehouse-5) - massive overhaul involving supporting nested loops
