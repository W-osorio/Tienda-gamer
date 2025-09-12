

const btn_form = document.getElementById('btn-form');



btn_form.addEventListener('click', (e) => {

    const inputs = document.querySelectorAll('.input-form');
    const input_nombre = document.querySelector('.input-nombre').value.trim();
    const input_celular = document.querySelector('.input-celular').value.trim();
    const input_num_calle = document.querySelector('.input-num-calle').value.trim();
    const input_num_tarjeta = document.querySelector('.input-num-tarjeta').value.trim();
    const input_cvv = document.querySelector('.input-cvv').value.trim();
    const form = document.getElementById('form');

    let vacio = Array.from(inputs).some(input => 
        input.value.trim() == "" || 
        input.value.trim() == null);

    const alfabetico = /^[a-zA-Z\s]+$/;

    if(vacio) {
        alert("* Parece que dejaste algunos campos vacíos. Completa todos para continuar.")
        return
    }else if(input_celular.length <= 8) {
        alert("* La contraseña debe tener minimo 8 caracteres.")
        return
    }else if(input_num_calle <= 0) {
        alert("* El numero de calle debe ser al menos 1")
        return
    }else if(input_num_tarjeta.length != 16) {
        alert("El numero de tarjeta debe ser de al menos 16 caracteres");
        return
    }else if(input_cvv.length != 3) {
        alert("El numero de cvv debe tener 3 caracteres");
        return
    }else if (!alfabetico.test(input_nombre)) {
        alert("* El nombre solo puede contener letras y espacios.");
        return; // corta la ejecución aquí
    }

    const obj = Object.fromEntries(new FormData(form));

    let data = {
        ciudad: obj.ciudad,
        comuna: obj.comuna,
        calle: obj.calle,
        num_calle: obj.num_calle,
        email: obj.email,
        celular: obj.celular,
        nom_tarjeta: obj.nom_tarjeta,
        num_tarjeta: obj.num_tarjeta,
        exp: obj.exp,
        cvv: obj.cvv
    }

    alert(
        "*** DATOS ENVIADOS ***\n" +
        "Ciudad: " + data.ciudad + "\n" +
        "Comuna: " + data.comuna + "\n" +
        "Calle: " + data.calle + "\n" +
        "Número de calle: " + data.num_calle + "\n" +
        "Email: " + data.email + "\n" +
        "Celular: " + data.celular + "\n" +
        "Nombre en tarjeta: " + data.nom_tarjeta + "\n" +
        "Número de tarjeta: " + data.num_tarjeta + "\n" +
        "Expiración: " + data.exp + "\n" +
        "CVV: " + data.cvv
    );

    localStorage.clear();
})