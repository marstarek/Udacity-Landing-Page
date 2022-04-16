/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 
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
let navUl = document.getElementById('navbar__list');
// get all sections 
let allSections = document.querySelectorAll('section');
let sections = Array.from(allSections);
console.log(sections);
// loop through allsections to  add li to navUl
const createNavLi = () => {
    sections.forEach(sec => {
        li = document.createElement('li');
        li.innerHTML = `<a href="#${sec.id}" class="menu__link " data-navbar="${sec.id}" >${sec.dataset.nav}</a>`;
        navUl.appendChild(li);
    });
}
createNavLi()
let navbar = document.querySelectorAll('a');
navbar.forEach((item) => {
    item.addEventListener('click', function(e) {
        navbar.forEach((item) => {
            item.classList.remove('clicked');
        });
        e.target.classList.add('clicked');
    });
});
navUl.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.dataset.navbar) {
        document.getElementById(`${e.target.dataset.navbar}`)
            .scrollIntoView({ behavior: 'smooth' });
    }
})
upBtn = document.getElementById("upBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40) {
        upBtn.style.opacity = 1;
    } else {
        upBtn.style.opacity = 0;
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.onscroll = function() {
        document.querySelectorAll('section').forEach(item => {
            if (item.getBoundingClientRect().top >= -400 && item.getBoundingClientRect().top <= 150) {
                item.classList.add('your-active-class');
            } else {
                item.classList.remove('your-active-class');

            }
        })
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
// select the ul 

// Set sections as active