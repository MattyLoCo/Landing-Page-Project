/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables */
const container = document.getElementsByTagName("body");
let items = document.querySelectorAll("section");
// Items variable is node list to loop over for future appending 
// to navbar unordered list.
const list = getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

//loop over list and append each item as child
for (item of items) {    
    const list = getElementById("navbar__list");
    let node = document.createElement("li");
    node.classList.toggle("menu__link");
    node.innerHTML = `<a href="#${item.dataset.id}">
    ${item.dataset.nav}</a>`;    
    list.appendChild(node); 
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
