import { CalcularPrecio, ValorProducto } from "./calcularPago.js";


export function DescontarProducto(boton1, boton2) {

    const card = boton1.closest('.card-producto');
    const contador = card.querySelector('.contador')
    const input = card.querySelector('.input-prod');
    let bg = '#343e49';

    if(input.checked) {
        boton1.disabled = false
        boton2.disabled = false
        bg = '#343e49';
        CalcularPrecio(ValorProducto(input))
    }else if(!input.checked) {
        boton1.disabled = true
        boton2.disabled = true
        bg = 'gray';
        contador.textContent = 0
        CalcularPrecio(ValorProducto(input))
    }
    boton1.style.background = bg;
    boton2.style.background = bg;
}

