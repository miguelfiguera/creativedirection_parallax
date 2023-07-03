# Tools for this parallax...

This scrolling animation was made using the gsap (a.k.a. green sock) librarie (the free one, without plugins).

## How does it work?

There are as many elements as there are messages (even some more).

Each message has an id and each div containing the message has a class.

First it makes the message inside the div visible so the dot animation (done with a span with fontsawesome icon) plays,
and just by entering the next message it triggers a function that replaces the dot (of the previous message) corresponding content content.

After the scroll exits a mark, that scrollTrigger gets disable to avoid blinking and other stuff if you go backwards. 

As this animation adds content and changes the divs height, in specific points it refreshes the start and end points of the next active scrollTrigger so it does not play outside the screen. (You can check it on the console as it prints a message saying 'Refreshed at XXXX' where XXXX is the item triggering this function)

## Content

As I was looking for simplicity, there are only three files: .html .css .js

The .js hast three parts: 
1. Message objects inside an array.
2. functions to remove spans and add the content.
3. scrollTrigger animations coded thinking in responsiveness.

Any questions, open an issue, this was my first project using GSAP. but I have to say, I really enjoy gsap and it may become my weapon of choice to make animations for the frontEnd.


Miguel Figuera Q.