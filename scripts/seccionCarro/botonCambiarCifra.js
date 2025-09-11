
import { CalcularPrecio } from "./calcularPago.js";
import { DescontarProducto } from "./inputCheckCard.js";

const container = document.getElementById('container-carro');
let algo = {
    "total": 0,
    "iva": 0,
    "sub_total": 0,
    "cant_prod": 0
}
container.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('btn-sumar')) {
        const contador = e.target.closest('.producto').querySelector('.contador');
        contador.textContent = parseInt(contador.textContent) + 1;
        
        CalcularPrecio( algo );
    }

    if (e.target.classList.contains('btn-restar')) {
        const contador = e.target.closest('.producto').querySelector('.contador');
        contador.textContent = Math.max(0, parseInt(contador.textContent) - 1);
        CalcularPrecio( algo );
    }

    if(e.target.classList.contains('input-prod')) {
        const card = e.target.closest('.card-producto');  
        const btn_restar = card.querySelector('.btn-restar');
        const btn_sumar = card.querySelector('.btn-sumar');
        DescontarProducto(btn_restar, btn_sumar)
    }
    
});


