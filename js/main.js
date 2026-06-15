// ============================
// ANIMACIÓN AL HACER SCROLL
// ============================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

document
    .querySelectorAll(
        ".phone-card, .feature-card, .package-card, .testimonial-card"
    )
    .forEach(element => {

        observer.observe(element);

    });


// ============================
// EFECTO FLOTANTE MOCKUPS
// ============================

const cards = document.querySelectorAll(".phone-card");

cards.forEach((card, index) => {

    card.style.animation =
        `float ${4 + index}s ease-in-out infinite`;

});


// ============================
// SCROLL SUAVE BOTONES
// ============================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


// ============================
// AÑO AUTOMÁTICO FOOTER
// ============================

const currentYear =
    new Date().getFullYear();

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        currentYear;

}