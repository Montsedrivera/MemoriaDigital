// ==========================================================================
// 1. CONTROL DE LA PANTALLA INICIAL (WELCOME) Y MÚSICA
// ==========================================================================
const welcomeSection = document.getElementById('welcome');
const enterButton = document.getElementById('enterButton');
const musica = document.getElementById('musica');
const botonMusica = document.getElementById('boton-musica');
const iconoMusica = botonMusica.querySelector('i');

// Evento al dar clic en el botón de entrar
enterButton.addEventListener('click', () => {
    // Desplazar la pantalla de bienvenida hacia arriba
    welcomeSection.classList.add('fade-out');

    // Intentar reproducir la música (requiere interacción previa del usuario)
    musica.play().then(() => {
        iconoMusica.className = 'fas fa-pause'; // Cambia el icono a pausa si se reproduce correctamente
    }).catch(error => {
        console.log("La reproducción automática fue bloqueada por el navegador: ", error);
    });

    // Remover del DOM la sección después de terminar la animación para optimizar rendimiento
    setTimeout(() => {
        welcomeSection.style.display = 'none';
    }, 800);
});

// Control manual del botón flotante de música (Play/Pause)
botonMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        iconoMusica.className = 'fas fa-pause';
    } else {
        musica.pause();
        iconoMusica.className = 'fas fa-music';
    }
});


// ==========================================================================
// 2. CUENTA REGRESIVA PERSONALIZADA (BODA: 26 DE JUNIO DE 2027)
// ==========================================================================
// Configuración de la fecha del evento: Año, Mes (0-11, Junio es 5), Día, Hora, Minutos
const fechaBoda = new Date(2027, 5, 26, 16, 0, 0).getTime();

const cuentaRegresiva = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    // Cálculos matemáticos para Días, Horas, Minutos y Segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Inyectar los valores formateados en el HTML (añadiendo cero a la izquierda si es menor a 10)
    document.getElementById('days').innerText = dias < 10 ? '0' + dias : dias;
    document.getElementById('hours').innerText = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutes').innerText = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('seconds').innerText = segundos < 10 ? '0' + segundos : segundos;

    // Si la fecha ya llegó o pasó, detener el intervalo
    if (distancia < 0) {
        clearInterval(cuentaRegresiva);
        document.getElementById('countdown').innerHTML = "<h2>¡Hoy es nuestro gran día!</h2>";
    }
}, 1000);


// ==========================================================================
// 3. CONFIRMACIÓN DE ASISTENCIA (RSVP) INTEGRADA CON WHATSAPP
// ==========================================================================
const rsvpForm = document.getElementById('rsvpForm');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir que la página se recargue

    // Capturar los valores ingresados en el formulario
    const nombreInvitado = document.getElementById('guest-name').value;
    const cantidadAsistentes = document.getElementById('guest-count').value;
    const mensajeOpcional = document.getElementById('guest-message').value;

    // Estructurar el mensaje elegante para WhatsApp
    let textoMensaje = `💍 *Confirmación de Asistencia - Boda de Romeo & Julieta* 💍\n\n`;
    textoMensaje += `Hola, quiero confirmar mi asistencia a su boda.\n\n`;
    textoMensaje += `👤 *Nombre:* ${nombreInvitado}\n`;
    textoMensaje += `👥 *Lugares:* ${cantidadAsistentes} pase(s)\n`;
    
    if (mensajeOpcional.trim() !== "") {
        textoMensaje += `✉️ *Mensaje:* _"${mensajeOpcional}"_\n`;
    }
    
    textoMensaje += `\n¡Nos vemos pronto para celebrar juntos! ✨`;

    // Configura aquí el número telefónico de los novios o el organizador
    // Debe incluir código de país, sin espacios ni símbolos (Ej: 52 para México + 10 dígitos)
    const telefonoNovios = "521234567890"; 

    // Crear la URL oficial para la API de WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefonoNovios}&text=${encodeURIComponent(textoMensaje)}`;

    // Abrir el chat en una pestaña nueva
    window.open(urlWhatsApp, '_blank');
});