// about section
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// header section 
var navigation=document.getElementsByClassName('section');
function nav(navname){
    for(navs of navigation){
        navs.classList.remove('active-nav');
    }
    event.currentTarget.classList.add('active-nav');
}
var container=document.querySelector('.nav-header');
window.addEventListener("scroll", () => {
    container.classList.toggle('scrolled-nav-header', window.scrollY > 50);
});

// navigation 
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");

    let currentSectionId = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 10; // Adjust offset for your needs
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-nav");
        if (link.getAttribute("href").substring(1) === currentSectionId) {
            link.classList.add("active-nav");
        }
    });
});

// my work 

var swiper = new Swiper(".mySwiper", {
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //mobile view

let menubtn = document.querySelector('#menubtn');
let navbar = document.querySelector('.nav');

menubtn.addEventListener('click', () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

navbar.addEventListener('click', () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
