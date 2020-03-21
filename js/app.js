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
const sectionItems = document.getElementsByTagName("section");
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

// Add class 'active' to section when near top of viewport
function makeActive() {
    for (let item of sectionItems) {
        let rect = item.getBoundingClientRect();
        if (rect.top <= 100) {
            item.classList.toggle("your-active-class");
        }    
    }    
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// document.body.addEventListener("load", buildNav);

//loop over list and append each item as child
window.onload = function buildNav() {
    for (let sectionItem of sectionItems) {
        let node = document.createElement("li");
        node.classList.toggle("menu__link");
        node.innerHTML = `<a href="#${sectionItem.dataset.id}">
        ${sectionItem.dataset.nav}</a>`;
        document.getElementById("navbar__list").appendChild(node);
    }
};

// Scroll to section on link click

// Set sections as active
window.onscroll = makeActive;