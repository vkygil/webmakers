window.onscroll = function () { scrollFunction() };
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".sidebar > div");
let current = "";

function scrollFunction() {

    //cambio en navbar
    if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && window.screen.width > 768) {
        document.querySelector(".navbar").classList.remove("expanded")
    } else {
        document.querySelector(".navbar").classList.add("expanded")
    }

    current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 180) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("selected");
        if (li.classList.contains("nav-" + current)) {
            li.classList.add("selected");
        }
    });
}


//to remove

// window.setTimeout(function () {
//     window.scrollTo(0, 1725);
// }, 700)