const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// ================== VALIDACIÓN DE FORMULARIO ==================
function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;

  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres");
    return false;
  }

  if (!correo.includes("@")) {
    alert("Correo inválido");
    return false;
  }

  alert("Mensaje enviado correctamente 🌌");
  return true;
}

// ================== ANIMACIÓN DE ESTRELLAS ==================
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