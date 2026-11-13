# How jQuery is used in this project

## What is it?

jQuery is a JavaScript library. It is a set of ready-made shortcuts for common tasks, such as finding an element, changing it, or reacting to a click.

It does nothing plain JavaScript can't do. It just makes the code shorter.

The library file is `js/jquery.min.js`. It is minified, so it is squashed into a few lines. **Do not edit or re-indent it.**

## How it is loaded

Every HTML page loads it first, then our own script:

```html
<script src="js/jquery.min.js"></script>
<script src="js/script.js" defer></script>
```

The order matters. jQuery must load first, so that `$` exists when `script.js` runs.

If `jquery.min.js` is removed, `$` is undefined and the menu button, restaurant pop-up and home page carousel stop working.

## The basic pattern

```js
$("selector").method(...)
```

- `$("selector")` finds elements, using the same selectors as CSS.
- `.method()` does something to them.

If the selector matches several elements, the method applies to all of them. No loop is needed.

## What we use it for

| What we want | jQuery | Example in `script.js` |
| --- | --- | --- |
| Run code when the page is ready | `$(document).ready(...)` | `$(document).ready(init);` |
| Find an element | `$("#id")`, `$(".class")` | `$("#menu")` |
| Run code on click | `.click(fn)` | `$("#menuBtn").click(toggleMenu);` |
| Run code on other events | `.on("event", fn)` | `$(document).on("keydown", popupKeys);` |
| Add, remove or flip a class | `.addClass()`, `.toggleClass()` | `$("#menu").toggleClass("open");` |
| Check for a class | `.hasClass()` | `$("#menu").hasClass("open")` |
| Read or set an attribute | `.attr()`, `.prop()` | `$("#menuBtn").attr("aria-expanded", "true");` |
| Change a style | `.css()` | `$("body").css("overflow", "hidden");` |
| Change text | `.text()` | `$("#galCount").text("2 / 5");` |
| Add or delete elements | `.append()`, `.remove()` | `$("body").append(makePopupHtml(r));` |
| Fade in or out | `.fadeIn()`, `.fadeOut()` | `$("#restWin").fadeIn(200);` |
| The element that was clicked | `$(this)` | `$(this).attr("data-id")` |
| The nearest parent | `.closest()` | `$(this).closest(".card")` |

## Where it is used

- **Menu button** (mobile menu opens and closes): `toggleMenu`
- **Restaurant pop-up and photo gallery**: `showRestaurant`, `closePopup`, `nextPic`, `prevPic`
- **Home page carousel** (top restaurants): `showSlide`, `initRotator` and the other rotator functions

The bill calculator and the form validation do not use jQuery. They use plain `document.getElementById(...)`.

## jQuery vs plain JavaScript

These two lines do the same thing:

```js
// jQuery
$("#menuBtn").click(toggleMenu);

// Plain JavaScript
document.getElementById("menuBtn").addEventListener("click", toggleMenu);
```

jQuery really saves effort when an action applies to many elements:

```js
// jQuery
$(".thumb").attr("aria-current", "false");

// Plain JavaScript
document.querySelectorAll(".thumb").forEach(function (el) {
    el.setAttribute("aria-current", "false");
});
```
