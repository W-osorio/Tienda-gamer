


fetch('../../data/productos.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('productos-container');

        data.forEach(producto => {
            
            const card = document.createElement('div');
            card.classList.add("card");
            console.log(producto.poster)
            card.innerHTML = `

                <img src=${producto.poster} alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="price">$${producto.precio} CLP</p>
                <p class="desc">${producto.desc}</p>
                <button class="Button">Añadir al carrito</button>

            `;
            container.append(card);

        });

    }).catch(error => console.error("Error cargando JSON:", error));




