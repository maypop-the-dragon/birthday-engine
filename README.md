# Birthday Engine

Birthday Engine is a game engine designed for making games as birthday gifts
(and other similar use-cases).

Making a video game for someone as a birthday gift is a really nice thing to do,
but realistically, you probably don't want to spend a ton of time on it.
You also might not know much about the recipient's computer,
and they might not even be very experienced operating it.

As a result, I decided that:
- **Birthday Engine runs in web browsers, using only functionality that files
  opened from local storage are allowed to use.**
  - This way, someone can just double-click to run your game
    regardless of what kind of system they have,
    without any pop-ups warning them that it could be a virus.
- **Birthday Engine is completely modular, with functionality being separated
  into libraries called *Birthday Bits* that are designed to interoperate
  cleanly with nearly any other code, not just other Birthday Bits.**
  - This way, if you prefer another library for certain functionality
    (such as drawing graphics), you can still use it.
  - The ability to leave out code you don't need can also help keep the final
    file size size small, which is good for sending your game over the internet.

## Recommended Usage

Your directory structure may look something like this:

- 📄 ***Click Me*.html**: This is the main HTML file for your game.
  Name it something that makes it obvious that opening it runs the game.
- 📂 ***resources***: It's good to put every other file your game depends on in
  a single folder to avoid overwhelming the recipient of the game.
  - 📂 **bits**: Everything in this "resources" folder is just an example,
    but I think it makes sense to organize your files!
    - 📜 **easel.js**
    - 📜 **sprite.js**
  - 📂 **gfx**
    - 🎨 **dirt-texture.png**
    - 🎨 **grass-atlas.png**
  - 📂 **logic**
    - 📜 **demo.js**

Birthday Bits aren't really
[modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
because those are unfortunatley only allowed if the page was downloaded from an
actual web server, not opened from a file. Instead, you just place them in your
HTML as `<script>` tags before your own game logic.

Here's what that might look like in that "*Click Me*.html" file:

```html
<!doctype html>
<html lang="en">
   <head>
      <title>Grass Planting Demo</title>
      <meta name="color-theme" content="dark light" />
      <meta name="viewport" content="width=device-width" />

      <!-- Birthday Bits -->
      <script src="./resources/bits/controllers.js"></script>
      <script src="./resources/bits/easel.js"></script>
      <script src="./resources/bits/sprite.js"></script>
   </head>
   <body>
      <bday-easel id="easel"><noscript>
         JavaScript must be enabled for this demo.
         ...or for Birthday Engine to work at all, really.
      </noscript></bday-easel>

      <!-- Demo Code -->
      <script src="./resources/logic/demo.js"></script>
   </body>
</html>
```
