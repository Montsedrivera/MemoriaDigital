/*=========================================
            MAIN.JS
=========================================*/

/*=========================================
    ELEMENTOS
=========================================*/

const enterButton = document.getElementById("enterButton");
const welcome = document.getElementById("welcome");
const music = document.getElementById("musica");

/*=========================================
    ENTRAR A LA INVITACIÓN
=========================================*/

enterButton.addEventListener("click", () => {

    welcome.style.opacity = "0";
    welcome.style.visibility = "hidden";

    music.play().catch(() => {});

    document.body.style.overflowY = "auto";

});


/*=========================================
    CUENTA REGRESIVA
=========================================*/

const eventDate = new Date("March 13, 2027 17:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    days.innerHTML = String(d).padStart(2, "0");
    hours.innerHTML = String(h).padStart(2, "0");
    minutes.innerHTML = String(m).padStart(2, "0");
    seconds.innerHTML = String(s).padStart(2, "0");

}

countdown();

setInterval(countdown, 1000);


/*=========================================
        SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


/*=========================================
        ANIMACIÓN AL SCROLL
=========================================*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/*=========================================
            RSVP
=========================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = form.querySelector("input[type='text']").value;

        alert(
            "Gracias " +
            nombre +
            ". Tu confirmación ha sido recibida."
        );

        form.reset();

    });

}


/*=========================================
        BOTÓN DE MÚSICA
=========================================*/

const musicButton = document.createElement("button");

musicButton.innerHTML = "🎵";

musicButton.id = "musicButton";

document.body.appendChild(musicButton);

musicButton.style.position = "fixed";
musicButton.style.right = "25px";
musicButton.style.bottom = "25px";
musicButton.style.width = "60px";
musicButton.style.height = "60px";
musicButton.style.borderRadius = "50%";
musicButton.style.zIndex = "999";
musicButton.style.fontSize = "22px";

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicButton.innerHTML = "🎵";

    } else {

        music.pause();
        musicButton.innerHTML = "🔇";

    }

});


/*=========================================
        HEADER AL HACER SCROLL
=========================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    if (window.scrollY > 80) {

        hero.classList.add("scrolled");

    } else {

        hero.classList.remove("scrolled");

    }

});


/*=========================================
        EFECTO PARALLAX
=========================================*/

window.addEventListener("scroll", () => {

    const y = window.pageYOffset;

    const welcomeSection = document.querySelector("#welcome");

    if (welcomeSection) {

        welcomeSection.style.backgroundPositionY = y * 0.4 + "px";

    }

});


/*=========================================
        PRELOADER
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=========================================
        AÑO AUTOMÁTICO FOOTER
=========================================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        "XV Años • Isabella Fernández López • 13 Marzo 2027";

}