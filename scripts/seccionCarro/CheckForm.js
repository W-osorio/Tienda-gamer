
const inputs = document.querySelectorAll('.input-form');
const input_celular = document.querySelector('.input-celular').value.trim();
const input_num_calle = document.querySelector('.input-num-calle').value.trim();
const input_num_tarjeta = document.querySelector('.input-num-tarjeta').value.trim();
const input_cvv = document.querySelector('.input-cvv').value.trim();

let vacio = Array.from(inputs).some(input => 
    input.value.trim() == "" || 
    input.value.trim() == null);


if(vacio) {
    alert("* Parece que dejaste algunos campos vacíos. Completa todos para continuar.")
}else if(input_celular.length < 8) {
    alert("* La contraseña debe tener minimo 8 caracteres.")
}else if(input_num_calle <= 0) {
    alert("* El numero de calle debe ser al menos 1")
}else if(input_num_tarjeta.legth != 16) {
    alert("El numero de tarjeta debe ser de al menos 16 caracteres");
}else if(input_cvv.legth != 3) {
    alert("El numero de cvv debe tener 3 caracteres");
}

