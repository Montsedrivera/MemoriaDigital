// Esperar a que todo el DOM (HTML) esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================================================
    // 1. CONTROL DEL PRELOADER / INTRO (Abrir Invitación)
    // ==========================================================================
    const introScreen = document.getElementById("invitationIntro");
    const openBtn = document.getElementById("openInvitation");

    if (introScreen && openBtn) {
        openBtn.addEventListener("click", function () {
            // Aplicamos una transición de opacidad y escala para que se desvanezca elegante
            introScreen.style.transition = "opacity 0.8s ease, transform 0.8s ease, visibility 0.8s";
            introScreen.style.opacity = "0";
            introScreen.style.transform = "scale(1.05)"; // Efecto de zoom sutil al abrir
            introScreen.style.visibility = "hidden";

            // Habilitamos el scroll en el cuerpo de la página una vez que se abre la invitación
            document.body.style.overflowY = "auto";
        });

        // Bloqueamos el scroll de la página principal mientras el preloader esté activo
        document.body.style.overflowY = "hidden";
    }

    // ==========================================================================
    // 2. EFECTO SCROLL EN NAVBAR (Cambio de fondo al bajar)
    // ==========================================================================
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            // Añade una sombra más marcada y fondo completamente sólido al hacer scroll
            navbar.style.boxShadow = "0 10px 30px rgba(44, 41, 39, 0.1)";
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
        } else {
            // Regresa a su estado inicial más traslúcido
            navbar.style.boxShadow = "0 1px 0px rgba(44, 41, 39, 0.05)";
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        }
    });

    // ==========================================================================
    // 3. ENLACES DEL PORTAFOLIO (Prevenir recarga en demos vacías)
    // ==========================================================================
    // Esto evita que al dar clic en los botones "Abrir invitación →" o "Abrir Demo" 
    // que tienen un href="#" la página salte bruscamente hacia arriba.
    const emptyLinks = document.querySelectorAll('a[href="#"]');
    
    emptyLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            console.log("Aquí se abriría el demo de la invitación correspondiente.");
            // Tip extra: Aquí podrías abrir un modal o redirigir a una página externa en el futuro.
        });
    });

});