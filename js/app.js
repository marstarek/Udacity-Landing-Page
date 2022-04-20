// build the nav
let navUl = document.getElementById('navbar__list');
// get all sections 
let allSections = document.querySelectorAll('section');
let sections = Array.from(allSections);
// loop through allsections to  add li to navUl
(function() {
    sections.forEach(sec => {
        li = document.createElement('li');
        li.innerHTML = `<a href="#${sec.id}" class="menu__link " data-navbar="${sec.id}" >${sec.dataset.nav}</a>`;
        navUl.appendChild(li);
    }); // I will invoke myself
})();
// add clicked class to navbar items 
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

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// applay the active class to the section when the user scrolls

window.onscroll = function() {
    document.querySelectorAll('section').forEach(item => {
        if (item.getBoundingClientRect().top >= -400 && item.getBoundingClientRect().top <= 150) {
            item.classList.add('your-active-class');
        } else {
            item.classList.remove('your-active-class');

        }
    })
}