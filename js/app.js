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
 * Global Variables */
const sectionItems = document.getElementsByTagName("section");
// sectionItems variable is node list to loop over for future appending 
// to navbar unordered list.

/**
 * End Global Variables
 * Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

//loop over list and append each item as child
function buildNav() {
    for (let sectionItem of sectionItems) {    
        let node = document.createElement("li");
        node.className = "menu__link";
        node.innerHTML = `<a href="#${sectionItem.id}">
        ${sectionItem.dataset.nav}</a>`;           
        document.getElementById("navbar__list").appendChild(node); 
    }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    for (let item of sectionItems) {
        let rect = item.getBoundingClientRect();     
        if (rect.top <= 100) {
            item.className = "your-active-class";
        } else {
            item.className = "";
        }   
    }
}    

// Scroll to anchor ID using scrollTO event
function scrollTo(e) {
    if (e.target && e.target.nodeName === "li") {
        let li = e.target.a;
        let linknav = li.href;
        linknav.scrollIntoView();
    }    
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.onload = function() {buildNav()};

// Scroll to section on link click
document.getElementById("navbar__list").addEventListener("click", scrollTo);

// Set sections as active
window.onscroll = function() {makeActive()};