document.addEventListener("DOMContentLoaded", () => {
  // FORMULARIO LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("loginMsg");

    if (email === "" || password === "") {
        msg.textContent = "❌ Debes llenar todos los campos.";
        return;
    }

    if (password.length < 6) {
        msg.textContent = "❌ La contraseña debe tener al menos 6 caracteres.";
        return;
    }

      // Si todo está bien, ir al catálogo
    msg.textContent = "✅ Login exitoso, redirigiendo...";
    setTimeout(() => {
        window.location.href = "catalogo.html";
    }, 1000);
    });
}

  // FORMULARIO REGISTRO
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const msg = document.getElementById("registerMsg");

    if (name === "" || isNaN(age) || email === "" || password === "") {
        msg.textContent = "❌ Todos los campos son obligatorios.";
        return;
    }

    if (age < 18) {
    msg.textContent = "❌ Debes ser mayor de 18 años.";
    return;
    }

    if (!email.includes("@")) {
    msg.textContent = "❌ Correo inválido.";
    return;
    }

        if (password.length < 6) {
        msg.textContent = "❌ La contraseña debe tener al menos 6 caracteres.";
        return;
        }

      // Mensaje especial para correos DUOC
        if (email.endsWith("@duoc.cl")) {
        msg.textContent = "✅ Registro exitoso. ¡Tienes 20% de descuento de por vida 🎉!";
        } else {
        msg.textContent = "✅ Registro exitoso!";
        }

      // Limpiar formulario
        registerForm.reset();
    });
    }
});
const searchBar = document.getElementById("searchBar");
if (searchBar) {
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? "block" : "none";
    });
});
}


