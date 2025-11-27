const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// ================== VALIDACIÓN DE FORMULARIO ==================

function validarFormulario() {
  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let mensaje = document.querySelector("textarea").value.trim();

  // Validar nombre
  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");
    return false;
  }

  // Validar correo (regex simple y efectiva)
  let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    alert("Por favor ingresa un correo válido.");
    return false;
  }

  // Validar mensaje
  if (mensaje.length < 5) {
    alert("El mensaje debe tener al menos 5 caracteres.");
    return false;
  }

  alert("Mensaje enviado correctamente 🌌");
  return true;
}
//Fondo generado de estrellas en todo el sitio, aleatoria posicion cada vez
function generarEstrellas() {
  const cont = document.querySelector(".stars");
  let cantidad = 100;

  for (let i = 0; i < cantidad; i++) {
    let estrella = document.createElement("div");
    estrella.classList.add("estrella");

    estrella.style.position = "absolute";
    estrella.style.width = "2px";
    estrella.style.height = "2px";
    estrella.style.background = "white";
    estrella.style.top = Math.random() * 100 + "%";
    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.opacity = Math.random();

    cont.appendChild(estrella);
  }
}


generarEstrellas();


//Interaccion de pagina galeria.html, al hacer click en una imagen
document.querySelectorAll(".galeria-img").forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `<img src="${img.src}" alt="">`;
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => {
      lightbox.remove();
    });
  });
});

