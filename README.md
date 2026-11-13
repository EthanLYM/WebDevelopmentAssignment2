# COS10005 Web Development - Assignment 2 (August 2026)
## TapirFind: restaurant discovery and reservation website

GitHub repository : <<< FILL IN: https://github.com/YOUR-USERNAME/YOUR-REPOSITORY >>>  

How to run: open index.html in a browser. No server or install is needed. The reservation form
posts to the Swinburne Mercury test address (http://mercury.swin.edu.au/it000000/cos10005/regtest.php).

Contents of this Readme: 1. Website structure, 2. JavaScript validation logic, 3. Known issues and
limitations, 4. References. The GitHub link is at the top of this file.

## 1. WEBSITE STRUCTURE

```
wd_assign2_studentID/
|-- index.html         Home Page
|-- restaurants.html   Restaurant Listing Page
|-- recommend.html     Restaurant Recommendation Page
|-- register.html      User Registration Page
|-- reservation.html   Reservation Page
|-- bill.html          Estimated Bill Calculator
|-- about.html         About Us Page: A brief overview on how recommendations, deposits and bill estimates work
|-- css/               CSS Files
|    |-- style.css     		The stylesheet linked on every page
|-- js/		       JavaScript Files
|    |-- script.js     		The JavaScript linked on every page
|    |-- js/jquery.min.js   	jQuery 3.7.1 library
|-- images/	       Images
|    |-- logo.png                       Base logo
|    |-- restaurantTapir.png            Logo Overlay
|    |-- cikguMi/                       Nasi Berlauk Cikgu Mi Images
|    |    |-- cikguMiLogo.jpg
|    |    |-- cikguMiRestaurant.jpg
|    |    |-- nasiIkanTongkol.jpg
|    |    |-- nasiKeliGoreng.jpg
|    |    |-- nasiAyamGoreng.jpg
|    |-- desiSwaad/                     Desi Swaad Kitchen Images
|    |    |-- desiSwaadLogo.jpg
|    |    |-- desiSwaadRestaurant.jpg
|    |    |-- paneerPakora.jpg
|    |    |-- muttonDumBiryani.jpg
|    |    |-- chickenTandooriBiryani.jpg
|    |-- zenHouse/                      Zen House Japanese Vegetarian Restaurant Images
|    |    |-- zenHouseLogo.png
|    |    |-- zenHouseSVelocity.jpg
|    |    |-- zenHouseSPyramid.jpg
|    |    |-- zenHouseSashimiMoriawase.jpg
|    |    |-- omakaseMoriawase.jpg
|    |    |-- unagiKabayaki.jpg
|    |-- bearHug/                       The Bear Hug Restaurant & Cafe Images
|    |    |-- bearHugLogo.jpg
|    |    |-- bearHugRestaurant.jpg
|    |    |-- aglioFriedChicken.jpg
|    |    |-- eggSalmonPoke.jpg
|    |    |-- grilledSalmon.jpg
|    |-- karHiong/                      Restoran Kar Hiong Images
|    |    |-- karHiongLogo.jpg
|    |    |-- karHiongRestaurant.jpg
|    |    |-- asamMixedSeafood.jpg
|    |    |-- mangoChicken.jpg
|    |    |-- saltedEggMantisPrawn.jpg
|    |-- siamThaiger/                   Siam Thaiger Thai Cafe Images
|         |-- siamThaigerLogo.jpg
|         |-- siamThaigerRestaurant.jpg
|         |-- siamThaiger3PorkCombo.jpg
|         |-- siamThaigerFlowerCrabSalad.jpg
|         |-- siamThaigerSpicySalmonSalad.jpg
|-- Readme.txt         Readme File (.txt)
|-- README.md          GitHub Readme File
|-- js/		       JavaScript Files              
```

### Pages Explained In Order
- index.html: The index page introduces the platform. It starts off with the website logo and brief introductory text. Below, it introduces the Top
  restaurants via a rotating slideshow that can be manipulated manually with the arrow buttons on each side of the main slide.
  Each slide has a View details button that opens up the restaurant's details card. Further down the page is a another introduction into the purposes and values of the site,
  the target users, and the services  that the site provides.
- about.html: The about us page is an extra page explaining how recommendations, deposits, payment and bill estimates work. It also has two buttons that redirect users
  to the recommendation and reservation pages.
- restaurants.html: This page shows the six restaurants via cards. Each card shows the restaurant image, name, average price per person and price range (estimated),
  location, cuisine, Halal and religious status, dietary choices and featured food served by the restaurant.
  Clicking a restaurant image or its View details button opens a
  pop up window that shows the full details, including a brief description, more images of the food they serve, the prices of those signature dishes,
  the cost of a reservation deposit and a Reserve button that directs users to the reservation page.
- recommend.html: The recommendation page is a form with Dietary & Lifestyle, Halal & Religious Status, Cuisine, budget and
  dining purpose options; filling out this form allows restaurants to be matched with the user's input criteria.
  The top matched result is shown first. Each has a Reserve button that
  passes the restaurant to reservation.html to be reserved.
- register.html: The register page is a mockup registration form that has the following options: username, email, phone, password, confirm password, gender,
  dietary preferences and country. It is a front-end form only and nothing is saved. The data is sent to http://mercury.swin.edu.au/it000000/cos10005/regtest.php.
- reservation.html: The reservation page is a mockup reservation form (name, email, phone, restaurant, date, time, people, special
  requests, deposit, deposit method, voucher code, card details, billing email). It is also a front-end form only and nothing is saved.
  The data is sent to http://mercury.swin.edu.au/it000000/cos10005/regtest.php.
- bill.html: This page is the estimated bill calculator. The user picks a restaurant and group size, and can enter
  how many of each signature dish they want. It then shows the food total, the additional 10% service charge and 6% service
  tax charge and the estimated total. Leaving these fields blank gives an estimated bill based on the minimum and maximum prices for two people.

### Layout and navigation
- Every page uses the same header, navigation menu and footer. The menu links to every page and
  the link for the current page is highlighted via aria-current.
- HTML5 semantic elements are used on every page: header, nav, main, section and footer.
- Responsive design is implemented with three sizes: desktop (1024px and wider), tablet (768 to
  1023px) and mobile (767px and narrower). On mobile, the menu becomes a hamburger button.

## EXPLANATION OF JAVASCRIPT VALIDATION LOGIC (PLAIN ENGLISH)

All JavaScript is in js/script.js. The only other script is the jQuery library file. A mix of both traditional JavaScript and jQuery were used,
with jQuery being used for the menu button, the pop up window and the
Top restaurants slideshow.

### How the error messages work for all forms
Each check adds a error message to a list. After all the checks, if the list is not empty the
messages are shown together in a pop up window and the function returns false, which stops the
form from being sent; If the list is empty the form is allowed to go through. The list is then displayed as a popup

### Registration form (validateRegister)
- Every field is checked for being empty first, then for its format.
- The Username must be at least 5 characters, and only letters, numbers and underscores.
- Emails must have some text, an @, more text, a dot, then more text.
- Phone numbers are digits only, between 8 and 15 digits.
- Passwords must be at least 10 characters with an uppercase letter, a lowercase letter, a number and a
  special character (anything that is not a letter or number).
- When confirming the password, the typed password must be the same as the password.
- One option must be chosen for Gender and at least one box must be ticked for Dietary Preferences. Selecting No Restrictions for Dietary Preferences locks out the other options.
- One country must be selected.
- When there are no errors, a success message is shown and the form is cleared. Nothing is sent.

### Reservation form (validateReservation)
- Full name must not be empty and the Email must be in a valid format similar to the Email field from the registration form.
- Phone: only digits, spaces, + and - are allowed, and there must be at least 10 digits.
- A restaurant, a date and a time must be chosen.
- The date and time must not be in the past. The date box also cannot pick days before today.
- Number of people must be a number greater than 0.
- A deposit method must be chosen:
  - Voucher: the voucher code box is shown, the card boxes are hidden, and the code must be exactly
    12 digits.
  - Online payment: the card boxes are shown and the voucher box is hidden. The card number must be
    digits only. Visa and Mastercard need 16 digits. This is a format check only,
    nothing is processed.
- Billing email must be in a valid format. Ticking "Same as email address" copies the email into the
  billing email box.

### Restaurant selection and deposit (reservation page)
- The restaurant is chosen in this order: the ?r= value in the page address (from the Reserve and
  View details buttons), then the top saved recommendation, otherwise nothing is chosen. The user can
  always change it from the dropdown after.
- Each restaurant has its own deposit; when the restaurant changes, the deposit box updates by itself.
- A note above the form shows the green starred "Your top recommendation" message only when the
  chosen restaurant is the top recommendation, otherwise it is the default link shown that links to the recommendation page.

### Recommendation logic (getScore and showMatches)
Every restaurant is given a score (via points) from the user's answers based on the following rules:
- Rule 1: the chosen Dietary & Lifestyle choice must be matched, otherwise the restaurant is not considered.
  Vegan food also counts as vegetarian.
- Rule 2: the chosen Halal & Religious Status must be matched, otherwise the restaurant is not considered.
  Halal places also count as Muslim-Friendly.
- Rule 3: +3 points are added if the restaurant is in the chosen budget level selected (under RM30, RM30 to RM60, or
  above RM60).
- Rule 4: +3 points are added if it suits the chosen dining purpose.
- Rule 5: +4 points are added if the chosen cuisine is one of the restaurant's food types.

Restaurants scoring 2 or more are listed; the restaurant with the best score is shown first. The best one is shown large as
"Your top recommendation" with the reasons it matched, and the others are shown below it. Different
answers give different results. The recommended restaurants are saved in sessionStorage so
reservation.html can use them.

### Interactive Features
- Restaurant pop up (showRestaurant): built from the restaurants list. It has a picture gallery with
  arrows, thumbnails and arrow keys. The page behind it cannot be clicked or scrolled while the popup is open, Tab stays
  inside it, and it closes with the cross, the dark background or Esc.
- Top restaurants slideshow: shows one slide at a time and changes every 5 seconds. It pauses while the
  mouse or keyboard focus is on it, and has arrows, dots and a Pause button. It does not rotate by
  itself if the device asks for less motion. Without JavaScript all slides show as a normal list.
- Bill calculator (bill.html, bonus): updates live when the restaurant, group size or dish amounts
  change. It adds a 10% service charge, then a 6% service tax on the food plus the service charge. If no
  dishes are chosen it estimates from the restaurant's price range per person.
- Restaurant data: one list (restaurants array) at the top of script.js holds every restaurant. The
  recommendation, reservation, bill and pop up features all read from it.

## 3. KNOWN ISSUES AND LIMITATIONS

- No restaurant is vegan, so choosing Vegan on the recommendation form finds nothing.
- The registration and reservation forms are front-end only so nothing is saved
- Credit card and voucher checks are format checks only; nothing is processed or charged, and no
  restaurant is really booked.
- The recommendation rules are simple fixed scores, so results only change when the answers change.
  If scores tie, the restaurant that is listed earlier on will be shown first.
- The recommended restaurants are kept in sessionStorage. If the browser blocks it, the Reserve
  buttons still pass the restaurant in the page address but the saved list is not kept.
- jQuery is a third-party library kept as a separate file (js/jquery.min.js).
- The restaurants are real places in Selangor and Kuala Lumpur. Prices, price ranges and deposits are
  estimates from the sources in the References section. The deposits are part of this project only and not mentioned anywhere in the sources found.
- The bill calculator is an estimate only. The service charge (10%) and service tax (6%) rates are
  assumptions, and real restaurants may charge differently or omit these fees entirely
- The pop up window and slideshow need JavaScript. Without it, the restaurant details are still on the
  restaurants page, and the slides show as a normal list.

## 4. REFERENCES

Restaurant pictures, logos, dish pictures, descriptions, locations and prices come from the sources below,
listed by restaurant; the note after each link says what it was used for.

### Nasi Berlauk Cikgu Mi
  - https://web.facebook.com/Nasiberlaukcikgumi/?_rdc=1&_rdr# --- used for obtaining a description translated from Malay, restaurant images, food images and logo.
  - https://www.foodpanda.my/restaurant/mwik/kedai-nasi-berlauk-cikgu-mi-glomac-business-centre-mwik --- used for price estimates.

### Desi Swaad Kitchen
  - https://www.instagram.com/desiswaadkitchen/?hl=en --- used for logo.
  - https://dineout.grab.com/my/en/restaurants/desi-swaad-kitchen-usj-9--1-C6MVAK6TPEKJFE --- used for restaurant image.
  - https://web.facebook.com/groups/subangfood/posts/509640711797951/?_rdc=1&_rdr# --- used for description as no official sources are available; derived from comments.
  - https://www.foodpanda.my/restaurant/mge6/desi-swaad-kitchen --- used for dish images and prices.

### Zen House Japanese Vegetarian Restaurant
  - https://www.zenhouse.com.my/ingredient/ --- Menu Item and images
  - https://www.foodpanda.my/restaurant/t5sv/zen-house-japanese-vegetarian-restaurant-sunway-pyramid --- Estimate of price (branch should have the same price).
  - https://www.sunwayvelocitymall.com/directory/zen-house-japanese-vegetarian --- Branch image, description and location.
  - https://www.sunwaypyramid.com/directory/zen-house-japanese-vegetarian-restaurant --- Branch image, description and location.

### The Bear Hug Restaurant & Cafe
  - https://web.facebook.com/thebearhugcafe/?_rdc=1&_rdr# --- used for restaurant logo and restaurant image.
  - https://www.foodpanda.my/restaurant/fvep/the-bear-hug-restaurant-and-cafe-subang --- used for obtaining food images and for the price estimate.
  - https://www.eatdrinkkl.com/posts/snapshot/the-bear-hug-subang-jaya --- used for restaurant description.

### Restoran Kar Hiong
  - https://restorankarhiong.gotoeat.net/ --- Used for general description information and restaurant image.
  - https://www.foodpanda.my/restaurant/n6xj/restoran-kar-hiong-ss18-jia-xiang-fan-dian --- used for logo, food images and price estimates.

### Siam Thaiger Thai Cafe
  - https://www.instagram.com/siamthaiger/ --- used for logo
  - https://web.facebook.com/p/Siam-Thaiger-Thai-Cafe-61578150196911/?_rdc=1&_rdr# --- used for restaurant image
  - https://www.foodpanda.my/restaurant/hdln/siam-thaiger-thai-cafe-ss15 --- used for food images and price estimate

### Libraries
  - jQuery 3.7.1 (https://jquery.com/) --- file js/jquery.min.js. Released under the MIT licence by the
    OpenJS Foundation.

### Own work
  - images/logo.png and images/restaurantTapir.png are original
    illustrations created for this project.
  - The pop up windows, slideshow, forms and all the page code were written for this project using plain
    HTML, CSS and JavaScript (plus jQuery as above). No other third-party code or fonts are used.