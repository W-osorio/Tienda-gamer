
export function btnAñadirAlCarro() {

    const boton = document.createElement('button');

    boton.className = 'Button';
    boton.dataset.id = null;
    boton.textContent = "Añadir al carrito";

    boton.addEventListener('click', () => {
        console.log(`este boton pertenece al id: ${boton.dataset.id}`)
    })

    return boton;
}

