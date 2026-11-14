"use strict";
// Restaurant data used by every page, either used directly or via text in the HTML pages.
// Each restaurant has these fields:
// id: short name used in links
// locations: one address per branch
// name: full restaurantname
// cuisine: cuisine served
// food: food tags
// avg: average price per person (RM)
// deposit: reservation deposit (RM)
// diets: dietary options (empty if none)
// purposes: dining purposes it suits
// categories: Halal or Muslim Friendly (empty if neither)
// img and alt: card picture and alt text
// logo: small logo on the card picture
// desc: description in the pop-up
// images: pop-up pictures (the first is the main photo)
// dishes: signature dishes (n = name, p = price in RM)
// min and max: price range per person (RM)
var restaurants = [
    {
        id: "cikgu-mi",
        locations: ["NO 206, BLOK A, Glomac Business Centre, 10, Jalan SS 6/1, Ss 6, 47301 Petaling Jaya, Selangor"],
        name: "Nasi Berlauk Cikgu Mi",
        cuisine: "Malaysian Cuisine",
        food: ["Asian", "Malaysian", "Malay"],
        avg: 17.0,
        deposit: 5.0,
        diets: [],
        purposes: ["Family"],
        categories: ["Muslim-Friendly", "Halal"],
        img: "images/cikguMi/cikguMiRestaurant.jpg",
        alt: "Nasi Berlauk Cikgu Mi Restaurant",
        logo: "images/cikguMi/cikguMiLogo.jpg",
        desc:
            "Nasi Berlauk Cikgu Mi is a beloved local restaurant specializing in authentic, " +
            "100% Halal Kelantanese cuisine that truly embodies the rich culinary heritage and cultural flavors of Kelantan. " +
            "Each meal is guaranteed to be delicious and comforting, freshly prepared with passion using time-honored recipes. " +
            "It is the perfect dining destination for the whole family to enjoy together.",
        images: [
            { src: "images/cikguMi/cikguMiRestaurant.jpg", alt: "Nasi Berlauk Cikgu Mi Restaurant" },
            { src: "images/cikguMi/nasiIkanTongkol.jpg", alt: "Nasi Ikan Tongkol Dish" },
            { src: "images/cikguMi/nasiKeliGoreng.jpg", alt: "Nasi Keli Goreng Dish" },
            { src: "images/cikguMi/nasiAyamGoreng.jpg", alt: "Nasi Ayam Goreng Dish" },
        ],
        dishes: [
            { n: "Nasi Ikan Tongkol", p: 13.9 },
            { n: "Nasi Keli Goreng", p: 13.9 },
            { n: "Nasi Ayam Goreng", p: 12.4 },
        ],
        min: 13.0,
        max: 21.0,
    },
    {
        id: "desi-swaad",
        locations: ["N15, Jalan USJ 9/5m, Subang Business Centre, 47620 Subang Jaya, Selangor"],
        name: "Desi Swaad Kitchen",
        cuisine: "Northern Indian Cuisine",
        food: ["Asian", "Northern Indian", "Indian"],
        avg: 31.5,
        deposit: 10.0,
        diets: [],
        purposes: ["Family", "Tourists"],
        categories: ["Muslim-Friendly"],
        img: "images/desiSwaad/desiSwaadRestaurant.jpg",
        alt: "Desi Swaad Kitchen Restaurant",
        logo: "images/desiSwaad/desiSwaadLogo.jpg",
        desc:
            "Desi Swaad Kitchen is a restaurant that specializes in authentic Northern Indian cuisine " +
            "that captures the rich spices and traditional flavors of the region. " +
            "Each meal is freshly prepared with aromatic ingredients and guaranteed to be as delicious as it is reasonably priced. " +
            "It is the perfect dining destination for the whole family to enjoy together.",
        images: [
            { src: "images/desiSwaad/desiSwaadRestaurant.jpg", alt: "Desi Swaad Kitchen Restaurant" },
            { src: "images/desiSwaad/paneerPakora.jpg", alt: "Paneer Pakora Dish" },
            { src: "images/desiSwaad/muttonDumBiryani.jpg", alt: "Mutton Dum Biryani Dish" },
            { src: "images/desiSwaad/chickenTandooriBiryani.jpg", alt: "Chicken Tandoori Biryani Dish" },
        ],
        dishes: [
            { n: "Paneer Pakora", p: 16.9 },
            { n: "Mutton Dum Biryani", p: 26.9 },
            { n: "Chicken Tandoori Biryani", p: 25.0 },
        ],
        min: 13.0,
        max: 50.0,
    },
    {
        id: "zen-house",
        locations: [
            "LG2.99, Sunway Pyramid, Darul Ehsan, Level CP6, Blue Atrium, 3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor",
            "B-03, Sunway Velocity, Lingkaran SV, Sunway Velocity, 55100 Kuala Lumpur, Malaysia",
        ],
        name: "Zen House Japanese Vegetarian Restaurant",
        cuisine: "Japanese Vegetarian",
        food: ["Asian", "Japanese", "Vegetarian"],
        avg: 55.0,
        deposit: 15.0,
        diets: ["Vegetarian"],
        purposes: ["Family", "Couples", "Professionals"],
        categories: ["Muslim-Friendly"],
        img: "images/zenHouse/zenHouseSVelocity.jpg",
        alt: "Zen House's Sunway Velocity Restaurant",
        logo: "images/zenHouse/zenHouseLogo.png",
        desc:
            "Zen House serves the food of modern-day Japanese vegetarian cuisine. By experimenting " +
            "with original ingredients and modern culinary techniques, they prove that vegetarian food can be just as " +
            "flavourful, creative and satisfying as regular food. Boasting a menu that is as varied as it is imaginative, " +
            "this place is ideal for hardcore vegetarians and Japanese cuisine enthusiasts alike. ",
        images: [
            { src: "images/zenHouse/zenHouseSVelocity.jpg", alt: "Zen House's Sunway Velocity Restaurant" },
            { src: "images/zenHouse/zenHouseSPyramid.jpg", alt: "Zen House's Sunway Pyramid Restaurant" },
            {
                src: "images/zenHouse/zenHouseSashimiMoriawase.jpg",
                alt: "Zen House Sashimi Moriawase Dish",
            },
            { src: "images/zenHouse/omakaseMoriawase.jpg", alt: "Omakase Moriawase Dish" },
            { src: "images/zenHouse/unagiKabayaki.jpg", alt: "Unagi Kabayaki Dish" },
        ],
        dishes: [
            { n: "Zen House Sashimi Moriawase", p: 58.9 },
            { n: "Omakase Moriawase", p: 53.9 },
            { n: "Unagi Kabayaki", p: 29.9 },
        ],
        min: 10.0,
        max: 100.0,
    },
    {
        id: "bear-hug",
        locations: ["10, Jalan USJ 11/3j, Usj 11, 47620 Subang Jaya, Selangor"],
        name: "The Bear Hug Restaurant & Cafe",
        cuisine: "Western",
        food: ["Western", "Salads", "Vegetarian"],
        avg: 37.5,
        deposit: 15.0,
        diets: ["Vegetarian"],
        purposes: ["Family", "Couples", "Professionals"],
        categories: ["Muslim-Friendly"],
        img: "images/bearHug/bearHugRestaurant.jpg",
        alt: "Bear Hug Restaurant & Cafe's Restaurant",
        logo: "images/bearHug/bearHugLogo.jpg",
        desc:
            "The Bear Hug Restaurant & Cafe offers an inviting selection of Western comfort dishes set within a warm and cozy " +
            "environment. While they primarily serve Western classics and a range of salads, their diverse menu caters to every palate. " +
            "As such, this restaurant is a prime choice for casual dining with family, friends and colleagues.",
        images: [
            {
                src: "images/bearHug/bearHugRestaurant.jpg",
                alt: "Bear Hug Restaurant & Cafe's Restaurant",
            },
            { src: "images/bearHug/aglioFriedChicken.jpg", alt: "Aglio Olio Fried Chicken Chop Dish" },
            { src: "images/bearHug/grilledSalmon.jpg", alt: "Grilled Salmon Fish Dish" },
            { src: "images/bearHug/eggSalmonPoke.jpg", alt: "Salad Poke Bowl with Egg & Salmon Dish" },
        ],
        dishes: [
            { n: "Aglio Olio Fried Chicken Chop", p: 35.0 },
            { n: "Grilled Salmon Fish", p: 46.0 },
            { n: "Salad Poke Bowl with Egg & Salmon", p: 35.0 },
        ],
        min: 25.0,
        max: 50.0,
    },
    {
        id: "kar-hiong",
        locations: ["29, Jalan SS 18/1b, Ss 18, 47500 Subang Jaya, Selangor"],
        name: "Restoran Kar Hiong",
        cuisine: "Malaysian Chinese",
        food: ["Asian", "Chinese"],
        avg: 32.5,
        deposit: 10.0,
        diets: [],
        purposes: ["Family", "Tourists"],
        categories: [],
        img: "images/karHiong/karHiongRestaurant.jpg",
        alt: "Restoran Kar Hiong's Restaurant",
        logo: "images/karHiong/karHiongLogo.jpg",
        desc:
            "Restoran Kar Hiong (家香饭店) is a restaurant that has quickly become a favorite among the " +
            "local populace for its home-styled and flavorful selection of Chinese cuisine mixed with influences from other culinary cultures (such as Indonesia). "+
            "With an extensive menu that features a variety of dishes, this restaurant is perfect for family meals and casual dining. ",
        images: [
            { src: "images/karHiong/karHiongRestaurant.jpg", alt: "Restoran Kar Hiong's Restaurant" },
            { src: "images/karHiong/saltedEggMantisPrawn.jpg", alt: "Salted Egg Mantis Prawn Dish" },
            { src: "images/karHiong/asamMixedSeafood.jpg", alt: "Asam Mixed Seafood Dish" },
            { src: "images/karHiong/mangoChicken.jpg", alt: "Mango Chicken Dish" },
        ],
        dishes: [
            { n: "Salted Egg Mantis Prawn", p: 28.0 },
            { n: "Asam Mixed Seafood", p: 28.0 },
            { n: "Mango Chicken", p: 23.0 },
        ],
        min: 25.0,
        max: 40.0,
    },
    {
        id: "siam-thaiger",
        locations: ["21G, Jalan SS 15/4c, Ss 15, 47500 Subang Jaya, Selangor"],
        name: "Siam Thaiger Thai Cafe",
        cuisine: "Thai",
        food: ["Asian", "Thai"],
        avg: 60.0,
        deposit: 15.0,
        diets: [],
        purposes: ["Family", "Couples"],
        categories: [],
        img: "images/siamThaiger/siamThaigerRestaurant.jpg",
        alt: "Siam Thaiger Thai Cafe Restaurant",
        logo: "images/siamThaiger/siamThaigerLogo.jpg",
        desc:
            "Siam Thaiger Thai Cafe is a local Thai restaurant that has quickly become a favorite among the locals "+
            "for its authentic and flavorful selection of Thai cuisine. " +
            "This restaurant is perfect for family meals and casual dining; " +
            "connoisseurs of Thai food will find something to love in its diverse menu. ",
        images: [
            { src: "images/siamThaiger/siamThaigerRestaurant.jpg", alt: "Siam Thaiger Thai Cafe Restaurant" },
            { src: "images/siamThaiger/siamThaiger3PorkCombo.jpg", alt: "3 Pork Combo Dish" },
            { src: "images/siamThaiger/siamThaigerFlowerCrabSalad.jpg", alt: "Flower Crab Salad Dish" },
            { src: "images/siamThaiger/siamThaigerSpicySalmonSalad.jpg", alt: "Spicy Salmon Salad Dish" },
        ],
        dishes: [
            { n: "3 Pork Combo", p: 58.5 },
            { n: "Flower Crab Salad", p: 45.5 },
            { n: "Spicy Salmon Salad", p: 45.5 },
        ],
        min: 20.0,
        max: 100.0,
    },
];

// Helper functions used by several pages

// Returns a restaurant's addresses as HTML: one line, or a list if asList is true
function getLocationHtml(r, asList) {
    var places = r.locations;
    if (places.length == 1) {
        return "<strong>Location:</strong> " + places[0];
    }
    if (asList) {
        var items = "";
        for (var i = 0; i < places.length; i++) {
            items += "<li>" + places[i] + "</li>";
        }
        return "<strong>Locations:</strong><ul class='branches'>" + items + "</ul>";
    }
    return "<strong>Locations:</strong> " + places.join("; ");
}

// Finds a restaurant by id, or returns null
function getRestaurant(id) {
    for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].id == id) {
            return restaurants[i];
        }
    }
    return null;
}

// Gets the restaurant id from the page address
function getUrlRestaurant() {
    var query = window.location.search;
    var id = "";
    if (query.indexOf("r=") >= 0) {
        id = query.split("r=")[1].split("&")[0];
    }
    return id;
}

// Escapes apostrophes and &amp; so text is safe in an alt attribute
function attrText(text) {
    return String(text).replace(/&/g, "&amp;").replace(/'/g, "&#39;");
}

// Formats a number as money (RM) with two decimal places
function money(amount) {
    return "RM " + amount.toFixed(2);
}

// Checks an email has text, @, text, a dot, then text
function isValidEmail(email) {
    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    var result = true;
    if (at < 1 || dot < at + 2 || dot == email.length - 1 || email.indexOf(" ") >= 0) {
        result = false;
    }
    return result;
}

// Email check for every email box. Returns an error message or "" if no errors
function checkEmail(email, label) {
    if (email == "") {
        return "<li>" + label + " cannot be empty.</li>";
    }
    if (!isValidEmail(email)) {
        return "<li>" + label + " must look like name@example.com.</li>";
    }
    return "";
}

// Phone check for every phone box: optional "+" followed by 10 to 15 digits. Returns an error message or "" if no errors
function checkPhone(phone) {
    if (phone == "") {
        return "<li>Phone number cannot be empty.</li>";
    }
    if (!phone.match(/^\+?[0-9]{10,15}$/)) {
        return "<li>Phone number must be 10 to 15 digits, using only 0-9, with an optional + at the start (e.g. +60123456789).</li>";
    }
    return "";
}

// Shows the error list in a pop-up
function showErrors(errMsg) {
    var box = document.createElement("div");
    box.innerHTML =
        "<div id='scrnOverlay'></div>" +
        "<section id='errWin' class='window'>" +
        "<h2>Please fix the following</h2><ul>" +
        errMsg +
        "</ul>" +
        "<a href='#' id='errBtn' class='btn'>Close</a></section>";
    document.body.appendChild(box);
    document.getElementById("errBtn").focus();
    document.getElementById("errBtn").onclick = function () {
        document.body.removeChild(box);
        return false;
    };
}

// Opens or closes the menu on small screens
function toggleMenu() {
    $("#menu").toggleClass("open"); // Adds or removes the open class

    // Tells screen readers if the menu is open
    if ($("#menu").hasClass("open")) {
        $("#menuBtn").attr("aria-expanded", "true");
    } else {
        $("#menuBtn").attr("aria-expanded", "false");
    }
}

// Builds the restaurant details pop-up on restaurants.html

// Makes a thumbnail button for each picture
function makeThumbsHtml(pics) {
    var thumbs = "";
    for (var i = 0; i < pics.length; i++) {
        thumbs +=
            "<button type='button' class='thumb' data-pic='" +
            i +
            "' aria-label='Show picture " +
            (i + 1) +
            " of " +
            pics.length +
            "'>" +
            "<img src='" +
            pics[i].src +
            "' alt='' width='120' height='80'></button>";
    }
    return thumbs;
}

// Makes the signature dishes list (empty if none)
function makeDishesHtml(r) {
    if (r.dishes.length == 0) {
        return "";
    }
    var items = "";
    for (var i = 0; i < r.dishes.length; i++) {
        items += "<li><span>" + r.dishes[i].n + "</span><span>" + money(r.dishes[i].p) + "</span></li>";
    }
    return "<h3>Signature dishes</h3><ul class='dishes'>" + items + "</ul>";
}

// Makes the whole pop-up (overlay and window) as HTML
function makePopupHtml(r) {
    var pics = r.images;
    return (
        "<div id='scrnOverlay'></div>" +
        "<section id='restWin' class='window rest-window' role='dialog' aria-modal='true' aria-labelledby='restTitle'>" +
        // Title bar with the close button
        "<div class='rest-head'>" +
        "<h2 id='restTitle'>" +
        r.name +
        "</h2>" +
        "<button type='button' id='restClose' class='close-x' aria-label='Close restaurant details'>&times;</button>" +
        "</div>" +
        "<div class='rest-scroll'>" +
        // Left side: big picture, arrows and thumbnails
        "<div class='rest-pic'>" +
        "<div class='gallery-main'>" +
        "<img id='galImg' src='" +
        pics[0].src +
        "' alt='" +
        attrText(pics[0].alt) +
        "' width='600' height='400'>" +
        "<button type='button' id='galPrev' class='gal-arrow gal-prev' aria-label='Previous picture'>&#8249;</button>" +
        "<button type='button' id='galNext' class='gal-arrow gal-next' aria-label='Next picture'>&#8250;</button>" +
        "<p id='galCount' class='gal-count' aria-live='polite'>1 / " +
        pics.length +
        "</p>" +
        "</div>" +
        "<div class='thumbs'>" +
        makeThumbsHtml(pics) +
        "</div>" +
        "</div>" +
        // Right side: details
        "<div class='rest-info'>" +
        "<p class='meta'>About " +
        money(r.avg) +
        " per person (" +
        money(r.min) +
        " – " +
        money(r.max) +
        ").</p>" +
        "<div class='location'>" +
        getLocationHtml(r, true) +
        "</div>" +
        "<p class='location tags'><strong>Cuisine:</strong> " +
        r.cuisine +
        "</p>" +
        "<p>" +
        r.desc +
        "</p>" +
        makeDishesHtml(r) +
        "<p class='deposit'><strong>Reservation deposit:</strong> " +
        money(r.deposit) +
        "</p>" +
        "<a class='btn reserve' href='reservation.html?r=" +
        r.id +
        "'>Reserve at " +
        r.name +
        "</a>" +
        "</div></div></section>"
    );
}

// Variables shared by the pop-up functions
var popupPics = []; // Pictures of the restaurant being shown
var popupCurrent = 0; // Number of the picture being shown
var popupOpener = null; // Button that opened the pop-up, so focus can return to it

// Keeps the Tab key inside the pop-up
function keepTabInside(e) {
    var win = document.getElementById("restWin");
    var items = win.querySelectorAll("a[href], button");
    var first = items[0];
    var last = items[items.length - 1];

    if (e.shiftKey && document.activeElement == first) {
        last.focus(); // Shift+Tab on the first item goes to the last
        e.preventDefault();
    } else if (!e.shiftKey && document.activeElement == last) {
        first.focus(); // Tab on the last item goes to the first
        e.preventDefault();
    } else if (!win.contains(document.activeElement)) {
        first.focus(); // If focus leaves the window, bring it back
        e.preventDefault();
    }
}

// Runs when the old picture has faded out; swaps in the new one and fades it in
function swapPicture() {
    var pic = popupPics[popupCurrent];
    $("#galImg").attr("src", pic.src);
    $("#galImg").attr("alt", pic.alt);
    $("#galImg").fadeIn(160);
}

// Shows picture n, wrapping at both ends
function showPic(n) {
    if (n < 0) {
        n = popupPics.length - 1;
    } else if (n >= popupPics.length) {
        n = 0;
    }
    popupCurrent = n;

    // Old picture fades out, new one is swapped in, then fades in
    $("#galImg").stop(true, true);
    $("#galImg").fadeOut(120, swapPicture);

    // Marks the chosen thumbnail and updates the counter
    $(".thumb").attr("aria-current", "false");
    $(".thumb").eq(n).attr("aria-current", "true");
    $("#galCount").text(n + 1 + " / " + popupPics.length);
}

// Arrows and thumbnails change the picture
function prevPic() {
    showPic(popupCurrent - 1);
}

function nextPic() {
    showPic(popupCurrent + 1);
}

// A thumbnail shows its own picture
function clickThumb() {
    var n = parseInt($(this).attr("data-pic"));
    showPic(n);
}

// Escape (Esc) closes, left and right keys change the picture, Tab stays inside
function popupKeys(e) {
    if (e.key == "Escape") {
        closePopup();
    } else if (e.key == "ArrowLeft") {
        prevPic();
    } else if (e.key == "ArrowRight") {
        nextPic();
    } else if (e.key == "Tab") {
        keepTabInside(e);
    }
}

// Runs when the pop-up has faded out: removes it and restores the page
function removePopup() {
    $("#scrnOverlay").remove();
    $("#restWin").remove();
    $("header, main, footer").removeAttr("inert");
    $("header, main, footer").removeAttr("aria-hidden");
    $("body").css("overflow", "");

    if (popupOpener) {
        $(popupOpener).focus(); // Returns focus to where it was
    }
}

// Closes the pop-up
function closePopup() {
    $(document).off("keydown", popupKeys); // Stops listening for keys
    $("#scrnOverlay").fadeOut(150);
    $("#restWin").fadeOut(150, removePopup);
    return false;
}

// Shows a restaurant's details in a pop-up
function showRestaurant(id, opener) {
    var r = getRestaurant(id);
    if (r == null) {
        return;
    }
    popupPics = r.images;
    popupCurrent = 0;
    popupOpener = opener;

    // Adds the pop-up to the page
    $("body").append(makePopupHtml(r));

    // One picture needs no arrows or thumbnails
    if (popupPics.length < 2) {
        $("#galPrev, #galNext, #galCount, .thumbs").hide();
    }

    // Arrows and thumbnails change the picture
    $(".thumb").eq(0).attr("aria-current", "true");
    $("#galPrev").click(prevPic);
    $("#galNext").click(nextPic);
    $(".thumb").click(clickThumb);

    // Window uses most of the screen height so more fits without scrolling
    $("#restWin").css("top", "2%");
    $("#restWin").css("max-height", "96%");

    // Nothing behind the pop-up can be clicked, tabbed to or scrolled
    $("header, main, footer").attr("inert", "");
    $("header, main, footer").attr("aria-hidden", "true");
    $("body").css("overflow", "hidden");

    // Fades in, unless the device prefers reduced motion
    $.fx.off = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $("#scrnOverlay, #restWin").hide();
    $("#scrnOverlay, #restWin").fadeIn(200);
    $("#restClose").focus();

    // Cross, dark background and keys close the pop-up
    $("#restClose, #scrnOverlay").click(closePopup);
    $(document).on("keydown", popupKeys);
}

// Opens the pop-up from a restaurant image or View details button
function openRestaurant() {
    var id = $(this).closest(".card").attr("id"); // Card id matches the restaurant id
    showRestaurant(id, this);
}

// Opens the pop-up from a top restaurant slide (without JavaScript, the button links to the card)
function openSlideRestaurant(e) {
    e.preventDefault(); // Stops the link leaving the page
    showRestaurant($(this).attr("data-id"), this);
}

// Scores restaurants and shows results on recommend.html

// Turns a price into a budget level
function getLevel(price) {
    var level = "high";
    if (price <= 30) {
        level = "low";
    } else if (price <= 60) {
        level = "mid";
    }
    return level;
}

// Builds the Featured food line from signature dish names
function getFeaturedHtml(r) {
    var names = [];
    for (var i = 0; i < r.dishes.length; i++) {
        names.push(r.dishes[i].n);
    }
    if (names.length == 0) {
        return ""; // Nothing to list
    }
    return "<strong>Featured food:</strong> " + names.join(", ");
}

// Returns the wanted food types a restaurant serves (food can be a list or one word)
function getFoodMatches(r, wanted) {
    var served = [].concat(r.food); // Turns a single word into a list
    var found = [];
    for (var i = 0; i < wanted.length; i++) {
        if (served.indexOf(wanted[i]) >= 0) {
            found.push(wanted[i]);
        }
    }
    return found;
}

// Checks if a restaurant serves a diet (vegan also counts as vegetarian)
function servesDiet(r, diet) {
    var result = r.diets.indexOf(diet) >= 0;
    if (diet == "Vegetarian" && r.diets.indexOf("Vegan") >= 0) {
        result = true;
    }
    return result;
}

// Checks if a restaurant has a category (halal also counts as Muslim Friendly)
function servesCategory(r, category) {
    var result = r.categories.indexOf(category) >= 0;
    if (category == "Muslim-Friendly" && r.categories.indexOf("Halal") >= 0) {
        result = true;
    }
    return result;
}

// Highest possible score: budget (3 points) + purpose (3 points) + food (4 points)
var MAX_SCORE = 10;

// Scores a restaurant, or returns -1 if it breaks a diet or category rule
function getScore(r, diet, category, budget, purpose, foods) {
    var score = 0;
    // Rule 1: the diet choice must be served
    if (diet != "None" && !servesDiet(r, diet)) {
        return -1;
    }
    // Rule 2: the halal or religious choice must be served
    if (category != "Any" && !servesCategory(r, category)) {
        return -1;
    }
    // Rule 3: points if the budget matches
    if (getLevel(r.avg) == budget) {
        score += 3;
    }
    // Rule 4: points if the dining purpose matches
    if (r.purposes.indexOf(purpose) >= 0) {
        score += 3;
    }
    // Rule 5: most points if the cuisine matches, so wanted food ranks first
    if (getFoodMatches(r, foods).length > 0) {
        score += 4;
    }
    return score;
}

// Builds the reasons for the top recommendation
function getReasons(r, diet, category, budget, purpose, foods) {
    var reasons = [];
    var served = getFoodMatches(r, foods);
    if (served.length > 0) {
        reasons.push("Serves the " + served.join(" and ") + " cuisine you asked for");
    }
    if (diet != "None") {
        reasons.push("Caters for " + diet);
    }
    if (category != "Any") {
        reasons.push("Is " + category);
    }
    if (getLevel(r.avg) == budget) {
        reasons.push("Fits your budget (about " + money(r.avg) + " per person)");
    }
    if (r.purposes.indexOf(purpose) >= 0) {
        reasons.push("Good for " + purpose.toLowerCase());
    }
    return reasons;
}

// Builds the large card for the best match only
function makeTopPick(r, score, reasons) {
    var list = "";
    for (var i = 0; i < reasons.length; i++) {
        list += "<li>" + reasons[i] + "</li>";
    }
    return (
        "<article class='top-pick'>" +
        // Picture with the logo on top
        "<div class='pic'>" +
        "<img class='card-photo' src='" +
        r.img +
        "' alt='" +
        attrText(r.alt) +
        "' width='600' height='400'>" +
        "<img class='card-logo' src='" +
        r.logo +
        "' alt='Logo of " +
        attrText(r.name) +
        "' height='44'>" +
        "</div>" +
        // Text side: name, details, score, reasons and Reserve button
        "<div class='top-pick-text'>" +
        "<p class='badge'>Best match</p>" +
        "<h3>" +
        r.name +
        "</h3>" +
        "<p class='meta'>About " +
        money(r.avg) +
        " per person.</p>" +
        "<p class='location'>" +
        getLocationHtml(r, false) +
        "</p>" +
        "<p class='location tags'><strong>Cuisine:</strong> " +
        r.cuisine +
        "</p>" +
        "<p class='featured'>" +
        getFeaturedHtml(r) +
        "</p>" +
        "<p class='score'>Match score: " +
        score +
        " out of " +
        MAX_SCORE +
        "</p>" +
        "<ul class='reasons'>" +
        list +
        "</ul>" +
        "<p><strong>Reservation deposit:</strong> " +
        money(r.deposit) +
        "</p>" +
        "<a class='btn' href='reservation.html?r=" +
        r.id +
        "'>Reserve " +
        r.name +
        "</a>" +
        "</div></article>"
    );
}

// Builds the small card for the other matches
function makeCard(r, score) {
    return (
        "<article class='card'>" +
        // Picture with the logo on top
        "<div class='pic'>" +
        "<img class='card-photo' src='" +
        r.img +
        "' alt='" +
        attrText(r.alt) +
        "' width='600' height='400'>" +
        "<img class='card-logo' src='" +
        r.logo +
        "' alt='Logo of " +
        attrText(r.name) +
        "' height='44'>" +
        "</div>" +
        // Text side: name, details, score and Reserve button
        "<div class='card-body'>" +
        "<h3>" +
        r.name +
        "</h3>" +
        "<p class='meta'>About " +
        money(r.avg) +
        " per person.</p>" +
        "<p class='location'>" +
        getLocationHtml(r, false) +
        "</p>" +
        "<p class='location tags'><strong>Cuisine:</strong> " +
        r.cuisine +
        "</p>" +
        "<p class='featured'>" +
        getFeaturedHtml(r) +
        "</p>" +
        "<p class='score'>Match score: " +
        score +
        " out of " +
        MAX_SCORE +
        "</p>" +
        "<a class='btn' href='reservation.html?r=" +
        r.id +
        "'>Reserve this restaurant</a>" +
        "</div></article>"
    );
}

// Saves the recommended restaurants (best first) for the reservation page
function saveRecommended(ids) {
    try {
        sessionStorage.setItem("tablefindRecommended", ids.join(","));
    } catch (e) {
        // If storage is blocked, the Reserve links still carry the restaurant in the address
    }
}

// Reads the saved list back (empty if none)
function loadRecommended() {
    var saved = "";
    try {
        saved = sessionStorage.getItem("tablefindRecommended");
    } catch (e) {
        saved = "";
    }
    if (saved == null || saved == "") {
        return [];
    }
    return saved.split(",");
}

// Reads the form, scores every restaurant and shows the results
// Returns false so the form does not reload the page
function showMatches() {
    // Reads the choices from the form
    var diet = document.getElementById("diet").value;
    var category = document.getElementById("category").value;
    var budget = document.getElementById("budget").value;
    var purpose = document.getElementById("purpose").value;
    var food = document.getElementById("food").value;
    var foods = []; // Empty means any food
    if (food != "Any") {
        foods.push(food);
    }
    var scores = []; // One score per restaurant, same order as the restaurants array
    var matches = []; // Matching restaurants, best first
    var matchScores = []; // Scores of the matches, same order
    var ids = []; // Match ids saved for the reservation page
    var html = "";
    var others = "";
    var i;
    var s;

    // Scores every restaurant
    for (i = 0; i < restaurants.length; i++) {
        scores[i] = getScore(restaurants[i], diet, category, budget, purpose, foods);
    }

    // Collects matches best first, from MAX_SCORE down to 2
    for (s = MAX_SCORE; s >= 2; s--) {
        for (i = 0; i < restaurants.length; i++) {
            if (scores[i] == s) {
                matches.push(restaurants[i]);
                matchScores.push(s);
                ids.push(restaurants[i].id);
            }
        }
    }

    // Shows a message, or the top pick with the others below
    if (matches.length == 0) {
        html = "<p>No restaurants match all of that. Try a different budget, purpose or cuisine.</p>";
        saveRecommended([]);
    } else {
        // First match is the top recommendation
        html =
            "<h2>Your top recommendation</h2>" +
            makeTopPick(matches[0], matchScores[0], getReasons(matches[0], diet, category, budget, purpose, foods));
        // Other matches go below it
        for (i = 1; i < matches.length; i++) {
            others += makeCard(matches[i], matchScores[i]);
        }
        if (others != "") {
            html += "<h2>Other options</h2><div class='grid g3'>" + others + "</div>";
        }
        saveRecommended(ids);
    }
    // Shows the results on the page
    document.getElementById("results").innerHTML = html;
    return false;
}

// Validates the registration form on register.html

// Checks the registration form: true sends the form while false stops it and shows the errors
function validateRegister() {
    // Reads every field
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPwd = document.getElementById("confirmPwd").value;
    // Gender and dietary tick boxes
    var genF = document.getElementById("genF").checked;
    var genM = document.getElementById("genM").checked;
    var genO = document.getElementById("genO").checked;
    var genN = document.getElementById("genN").checked;
    var dietNone = document.getElementById("dietNone").checked;
    var dietHalal = document.getElementById("dietHalal").checked;
    var dietVegetarian = document.getElementById("dietVegetarian").checked;
    var dietVegan = document.getElementById("dietVegan").checked;
    var country = document.getElementById("country").value;

    // Each problem adds a list item
    var errMsg = "";
    var userPattern = /^[A-Za-z0-9_]+$/; // Letters, numbers and underscores only

    // Checks the username
    if (username == "") {
        errMsg += "<li>Username cannot be empty.</li>";
    } else if (username.length < 5 || !username.match(userPattern)) {
        errMsg += "<li>Username must be 5 or more letters, numbers or underscores.</li>";
    }

    // Checks the email
    errMsg += checkEmail(email, "Email address");

    // Checks the phone number
    errMsg += checkPhone(phone);

    // Password: at least 10 characters with upper case, lower case, a digit and a special character
    if (password == "") {
        errMsg += "<li>Password cannot be empty.</li>";
    } else if (
        password.length < 10 ||
        !password.match(/[A-Z]/) ||
        !password.match(/[a-z]/) ||
        !password.match(/[0-9]/) ||
        !password.match(/[^A-Za-z0-9]/)
    ) {
        errMsg +=
            "<li>Password needs 10 or more characters with an uppercase letter, a lowercase letter, a number and a special character.</li>";
    }

    // Confirm password must match
    if (confirmPwd == "") {
        errMsg += "<li>Confirm password cannot be empty.</li>";
    } else if (password != confirmPwd) {
        errMsg += "<li>Passwords do not match.</li>";
    }

    // Choose one gender and at least one dietary preference
    if (!genF && !genM && !genO && !genN) {
        errMsg += "<li>Please choose a gender option.</li>";
    }

    if (!dietNone && !dietHalal && !dietVegetarian && !dietVegan) {
        errMsg += "<li>Please choose at least one dietary preference.</li>";
    }

    // Checks the country or region
    if (country == "") {
        errMsg += "<li>Please select your country or region.</li>";
    }

    // If there are problems, show them and do not send the form
    if (errMsg != "") {
        showErrors(errMsg);
        return false; // Stops the form being sent
    }
    return true; // Sends the form
}

// Locks the other dietary boxes (and clears them) when No restrictions is ticked
function lockDiets() {
    var none = document.getElementById("dietNone").checked;
    var others = ["dietHalal", "dietVegetarian", "dietVegan"];
    for (var i = 0; i < others.length; i++) {
        var box = document.getElementById(others[i]);
        if (none) {
            box.checked = false; // No restrictions cannot be combined with another choice
        }
        box.disabled = none;
    }
}

// Reservation form and deposit on reservation.html

// Shows the deposit of the selected restaurant
function updateDeposit() {
    var r = getRestaurant(document.getElementById("restaurant").value);
    var deposit = document.getElementById("deposit");
    if (r == null) {
        deposit.value = "Choose a restaurant first";
    } else {
        deposit.value = money(r.deposit);
    }
}

// Sets the note above the form: top recommendation, or a link to the recommend page
function updateRecNote() {
    var id = document.getElementById("restaurant").value;
    var saved = loadRecommended();
    var note = document.getElementById("recNote");
    var r = getRestaurant(id);
    // Green starred message is for the top recommendation only
    var isTop = r != null && saved.length > 0 && saved[0] == id;
    note.className = isTop ? "rec-note rec-hit" : "rec-note";
    if (isTop) {
        note.innerHTML =
            "<span><strong>Your top recommendation:</strong> " +
            r.name +
            ". You can change the restaurant below at any time.</span>";
    } else {
        note.innerHTML =
            "<span>Not sure where to book? <a href='recommend.html'>Get a recommendation</a> based on your diet, budget and occasion.</span>";
    }
}

// Picks the restaurant on page load: address first, then top saved recommendation
function chooseStartRestaurant() {
    var wanted = getUrlRestaurant();
    var saved = loadRecommended();
    if (getRestaurant(wanted) != null) {
        document.getElementById("restaurant").value = wanted;
    } else if (saved.length > 0 && getRestaurant(saved[0]) != null) {
        document.getElementById("restaurant").value = saved[0];
    }
}

// Updates the deposit and note when the restaurant changes
function restaurantChanged() {
    updateDeposit();
    updateRecNote();
}

// Earliest date is today
function setMinDate() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    document.getElementById("date").min = today.getFullYear() + "-" + month + "-" + day;
}

// Shows the voucher box or card box, depending on deposit method
function choosePayment() {
    var voucher = document.getElementById("payVoucher").checked;
    var online = document.getElementById("payOnline").checked;
    document.getElementById("voucherBox").hidden = !voucher;
    document.getElementById("voucher").disabled = !voucher;
    document.getElementById("cardBox").hidden = !online;
    document.getElementById("cardtype").disabled = !online;
    document.getElementById("cardnum").disabled = !online;
}

// Handles the same as email address tick boxes
function copyEmail() {
    var billing = document.getElementById("billing");
    if (document.getElementById("same").checked) {
        billing.value = document.getElementById("email").value;
        billing.readOnly = true;
    } else {
        billing.readOnly = false;
    }
}

// Checks the reservation form: true sends the form while false stops it and shows the errors
function validateReservation() {
    // Reads every field
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var restaurant = document.getElementById("restaurant").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var people = parseInt(document.getElementById("people").value);
    var voucherOn = document.getElementById("payVoucher").checked;
    var onlineOn = document.getElementById("payOnline").checked;
    var voucher = document.getElementById("voucher").value;
    var cardtype = document.getElementById("cardtype").value;
    var cardnum = document.getElementById("cardnum").value.split(" ").join("");
    var billing = document.getElementById("billing").value;

    // Each problem adds a list item
    var errMsg = "";
    var cardLength = 16; // Visa and Mastercard numbers have 16 digits

    // Checks contact details
    if (fullname == "") {
        errMsg += "<li>Full name cannot be empty.</li>";
    }

    errMsg += checkEmail(email, "Email address");
    errMsg += checkPhone(phone);

    // Checks booking details
    if (restaurant == "") {
        errMsg += "<li>Please choose a restaurant.</li>";
    }

    // Date and time must not be in the past
    if (date == "" || time == "") {
        errMsg += "<li>Please choose a date and a time.</li>";
    } else if (new Date(date + "T" + time) < new Date()) {
        errMsg += "<li>The date and time cannot be in the past.</li>";
    }

    if (isNaN(people) || people < 1) {
        errMsg += "<li>Number of people must be greater than 0.</li>";
    }

    // Checks the deposit method, then its code or card number
    if (!voucherOn && !onlineOn) {
        errMsg += "<li>Please choose a deposit method.</li>";
    }

    if (voucherOn && !voucher.match(/^[0-9]{12}$/)) {
        errMsg += "<li>Voucher code must be exactly 12 digits.</li>";
    }

    if (onlineOn && (!cardnum.match(/^[0-9]+$/) || cardnum.length != cardLength)) {
        errMsg += "<li>" + cardtype + " card numbers must be " + cardLength + " digits.</li>";
    }

    // Checks the billing email
    errMsg += checkEmail(billing, "Billing email address");

    // If there are problems, show them and do not send the form
    if (errMsg != "") {
        showErrors(errMsg);
        return false; // Stops the form being sent
    }
    return true; // Sends the form
}

// Estimated bill calculator on bill.html

// Service charge is 10% of the food total
function getService(food) {
    return food * 0.1;
}

// Service tax is 6% of the food total plus the service charge
function getTax(food) {
    return (food + getService(food)) * 0.06;
}

// Grand total is food + service charge + service tax
function getTotal(food) {
    return food + getService(food) + getTax(food);
}

// Draws a quantity box for each signature dish
function drawDishes() {
    var r = getRestaurant(document.getElementById("billRestaurant").value);
    var html = "";
    for (var i = 0; i < r.dishes.length; i++) {
        html +=
            "<div class='dish-row'>" +
            "<label for='q" +
            i +
            "'>" +
            r.dishes[i].n +
            " (" +
            money(r.dishes[i].p) +
            ")</label>" +
            "<input id='q" +
            i +
            "' type='number' min='0' max='50' value='0'></div>";
    }
    document.getElementById("dishList").innerHTML = html;
}

// Works out the bill from the chosen dishes, or from the price range if none
function calcBill() {
    var r = getRestaurant(document.getElementById("billRestaurant").value);
    var people = parseInt(document.getElementById("billPeople").value);
    var out = document.getElementById("billOut");
    var dishTotal = 0;
    var html = "";

    document.getElementById("billReserve").href = "reservation.html?r=" + r.id;

    if (isNaN(people) || people < 1) {
        out.innerHTML = "<p>Enter at least 1 person to see an estimate.</p>";
        return;
    }

    // Adds the chosen dishes
    for (var i = 0; i < r.dishes.length; i++) {
        var qty = parseInt(document.getElementById("q" + i).value);
        if (isNaN(qty) || qty < 0) {
            qty = 0;
        }
        dishTotal += qty * r.dishes[i].p;
    }

    html = "<h2>" + r.name + "</h2><table>";
    if (dishTotal > 0) {
        // Estimate from the chosen dishes
        html += "<tr><td>Selected dishes</td><td>" + money(dishTotal) + "</td></tr>";
        html += "<tr><td>Service charge (10%)</td><td>" + money(getService(dishTotal)) + "</td></tr>";
        html += "<tr><td>Service tax (6%)</td><td>" + money(getTax(dishTotal)) + "</td></tr>";
        html += "<tr class='total'><td>Estimated total</td><td>" + money(getTotal(dishTotal)) + "</td></tr>";
        html += "<tr><td>Per person</td><td>" + money(getTotal(dishTotal) / people) + "</td></tr>";
    } else {
        // Estimate from the price range per person
        var low = r.min * people;
        var high = r.max * people;
        html +=
            "<tr><td>Food for " +
            people +
            " (" +
            money(r.min) +
            " to " +
            money(r.max) +
            " each)</td>" +
            "<td>" +
            money(low) +
            " to " +
            money(high) +
            "</td></tr>";
        html +=
            "<tr><td>Service charge (10%)</td><td>" +
            money(getService(low)) +
            " to " +
            money(getService(high)) +
            "</td></tr>";
        html += "<tr><td>Service tax (6%)</td><td>" + money(getTax(low)) + " to " + money(getTax(high)) + "</td></tr>";
        html +=
            "<tr class='total'><td>Estimated total</td><td>" +
            money(getTotal(low)) +
            " to " +
            money(getTotal(high)) +
            "</td></tr>";
    }
    // Adds a footnote under the table
    html +=
        "</table><p class='meta'>The reservation deposit of " +
        money(r.deposit) +
        " is paid separately. Check with the restaurant whether it is taken off the final bill. " +
        "<br>" +
        "All calculated fees are an estimation, and should not be considered final.</p>";
    out.innerHTML = html;
}

// Redraws the dish boxes and recalculates when the restaurant changes
function billRestaurantChanged() {
    drawDishes();
    calcBill();
}

// Top restaurants rotator on index.html (jQuery)

// State shared by the rotator functions
var rotIndex = 0; // Number of the slide being shown
var rotTimer = null; // Repeating timer (null when paused)
var rotHold = false; // True while the visitor points at or focuses the rotator

// Works out a slide's place: current (middle), next, prev, or far (the rest)
function getSlidePosition(i, current, total) {
    var offset = (i - current + total) % total; // How far the slide is ahead of the current one
    if (offset == 0) {
        return "current";
    } else if (offset == 1) {
        return "next";
    } else if (offset == total - 1) {
        return "prev";
    }
    return "far";
}

// Shows slide n, wrapping at both ends
function showSlide(n) {
    var slides = $(".slide");
    var total = slides.length;
    if (n < 0) {
        n = total - 1;
    } else if (n >= total) {
        n = 0;
    }

    // Every slide gets a place, and its class decides where it is drawn
    for (var i = 0; i < total; i++) {
        var position = getSlidePosition(i, n, total);
        var slide = slides.eq(i);
        slide.attr("class", "slide " + position);

        // Only the middle slide's button can be tabbed to
        if (position == "current") {
            slide.find("a").attr("tabindex", "0");
        } else {
            slide.find("a").attr("tabindex", "-1");
        }
    }

    // Marks the matching dot
    $(".dot").attr("aria-current", "false");
    $(".dot").eq(n).attr("aria-current", "true");
    rotIndex = n;
}

// Goes to the next or previous slide
function nextSlide() {
    showSlide(rotIndex + 1);
}

function prevSlide() {
    showSlide(rotIndex - 1);
}

// Timer calls this: skips the change while the visitor is using the rotator
function autoNext() {
    if (!rotHold) {
        nextSlide();
    }
}

// Changes slide every 5 seconds and restarts the count after a click
function startRotation() {
    clearInterval(rotTimer);
    rotTimer = setInterval(autoNext, 5000);
}

// Arrows, dots and side cards move the slides, then the timer restarts
function clickNext() {
    nextSlide();
    startRotation();
}

function clickPrev() {
    prevSlide();
    startRotation();
}

// A dot jumps to its slide
function clickDot() {
    var n = parseInt($(this).attr("data-slide"));
    showSlide(n);
    startRotation();
}

// Clicking a faded side card brings it to the middle
function clickSlide() {
    if ($(this).hasClass("next")) {
        clickNext();
    } else if ($(this).hasClass("prev")) {
        clickPrev();
    }
}

// Holds the current slide while the mouse or keyboard focus is on the rotator
function holdRotator() {
    rotHold = true;
}

// Lets the timer change slides again
function releaseRotator() {
    rotHold = false;
}

// Makes a dot button for each slide
function makeDots() {
    var slides = $(".slide");
    for (var i = 0; i < slides.length; i++) {
        var title = slides.eq(i).find("h3").text();

        var dot = $("<button type='button' class='dot'></button>");
        dot.attr("data-slide", i);
        dot.attr("aria-label", "Show " + title);
        dot.click(clickDot);

        var item = $("<li></li>");
        item.append(dot);
        $("#rotDots").append(item);
    }
}

// Sets up the rotator on index.html only
function initRotator() {
    if ($("#rotator").length == 0) {
        return; // Not the home page
    }

    makeDots();

    // Shows the parts that need JavaScript
    $("#rotator").addClass("on"); // CSS now hides every slide except the current one
    $("#rotatorControls").prop("hidden", false);
    $(".rot-arrow").prop("hidden", false);

    // Arrows and side cards change the slide
    $("#rotNext").click(clickNext);
    $("#rotPrev").click(clickPrev);
    $(".slide").click(clickSlide);

    // Holds the current slide while the mouse or keyboard focus is on the rotator
    $("#rotator").on("mouseenter focusin", holdRotator);
    $("#rotator").on("mouseleave focusout", releaseRotator);

    showSlide(0);

    // No automatic rotation if the device asks for less motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        startRotation();
    }
}

// Links page elements to the functions above

// Runs once when the page is ready and gives every page the menu button
// Each page's own form or widget is set up only if its element exists
function init() {
    $("#menuBtn").click(toggleMenu);

    // Sets up the home page
    initRotator();

    // restaurants.html: card picture, title and View details open the pop-up
    $(".img-btn, .view-btn, .title-btn").click(openRestaurant);

    // index.html: View details on a top restaurant slide opens the same pop-up
    $(".slide-text .btn").click(openSlideRestaurant);

    // Sets up the recommend page
    var recForm = document.getElementById("recForm"); // Form is only on recommend.html
    if (recForm != null) {
        recForm.onsubmit = showMatches;
    }

    // Sets up the register page
    var regForm = document.getElementById("regForm");
    if (regForm != null) {
        regForm.onsubmit = validateRegister;
        document.getElementById("dietNone").onclick = lockDiets;
    }

    // reservation.html: picks the starting restaurant, sets the earliest date and wires up the form
    var resForm = document.getElementById("resForm");
    if (resForm != null) {
        chooseStartRestaurant();
        setMinDate();
        restaurantChanged();
        resForm.onsubmit = validateReservation;
        document.getElementById("restaurant").onchange = restaurantChanged;
        document.getElementById("payVoucher").onclick = choosePayment;
        document.getElementById("payOnline").onclick = choosePayment;
        document.getElementById("same").onclick = copyEmail;
        document.getElementById("email").oninput = copyEmail;
    }

    // bill.html: picks the restaurant alphabetically, draws the dishes and recalculates on every change
    var billForm = document.getElementById("billForm");
    if (billForm != null) {
        var billWanted = getUrlRestaurant();
        if (getRestaurant(billWanted) != null) {
            document.getElementById("billRestaurant").value = billWanted;
        }
        drawDishes();
        calcBill();
        document.getElementById("billRestaurant").onchange = billRestaurantChanged;
        billForm.oninput = calcBill;
        billForm.onsubmit = function () {
            return false; // The calculator never sends the form
        };
    }
}

// Runs init when the page is ready
$(document).ready(init);