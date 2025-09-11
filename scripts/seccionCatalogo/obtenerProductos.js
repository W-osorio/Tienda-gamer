
import { btnAñadirAlCarro } from "./botonAñadirProducto.js";

fetch('../../data/productos.json')
.then(res => res.json())
.then(data => {
    const container = document.getElementById('productos-container');

    data.forEach(producto => {
        
        const boton = btnAñadirAlCarro();
        boton.dataset.id = producto.id;
        
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `

            <img src=${producto.poster} alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="price">$${producto.precio} CLP</p>
            <p class="desc">${producto.desc}</p>

        `;
        card.append(boton);
        container.append(card);

    });

}).catch(error => console.error("Error cargando JSON:", error));




