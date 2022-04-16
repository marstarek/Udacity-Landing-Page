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
createNavLi();
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


// scroll top btn 
upBtn = document.getElementById("upBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50) {
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