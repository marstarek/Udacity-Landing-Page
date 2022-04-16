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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */


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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
// select the ul 
let navUl = document.getElementById('navbar__list');
// get all sections 
let allSections = document.querySelectorAll('section');
let sections = Array.from(allSections);
console.log(sections);
// loop through allsections to  add li to navUl
const createNavLi = () => {
    sections.forEach(sec => {
        li = document.createElement('li');
        li.innerHTML = `<a href="#${sec.id}" class="menu__link" data-nav="${sec.id}" >${sec.dataset.nav}</a>`;
        navUl.appendChild(li);
    });
}
createNavLi()
    // Set sections as active