

lucide.createIcons();


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.style.background = "rgba(0,0,0,0.92)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,.06)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.8)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,.04)";

    }

});



const cards = document.querySelectorAll(".solution-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";
        card.style.boxShadow = "0 10px 40px rgba(255,255,255,.06)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";

    });

});



const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = ".3s";

    });

});



document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    document.querySelector(".orbit-1").style.transform =
        `translate(${x}px, ${y}px)`;

    document.querySelector(".orbit-2").style.transform =
        `translate(${x * 1.5}px, ${y * 1.5}px)`;

    document.querySelector(".orbit-3").style.transform =
        `translate(${x * 2}px, ${y * 2}px)`;

});



const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.1
});

document.querySelectorAll(".solution-card,.success-card,.innovation-left")
.forEach(el => {

    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "1s";

    observer.observe(el);

});
