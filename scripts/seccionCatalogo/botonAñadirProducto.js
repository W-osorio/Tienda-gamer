

export function btnAñadirAlCarro() {

    const boton = document.createElement('button');

    boton.className = 'Button';
    boton.dataset.id = null;
    boton.textContent = "Añadir al carrito";

    boton.addEventListener('click', () => {
        console.log(`este boton pertenece al id: ${boton.dataset.id}`)

        let idProductos = JSON.parse(localStorage.getItem("idProductos")) || [];
        let valor = boton.dataset.id;
        if(!idProductos.includes(valor)) {
            
            idProductos.push(valor)
            localStorage.setItem("idProductos", JSON.stringify(idProductos));

        }
        
    })

    return boton;
}

