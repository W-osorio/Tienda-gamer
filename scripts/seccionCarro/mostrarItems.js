
const idProductos = JSON.parse(localStorage.getItem("idProductos"));

fetch('../../data/productos.json')
.then(res => res.json())
.then(data => {
    const container = document.getElementById('container-carro');

    data.forEach(producto => {
        // console.log(idProductos)
        
        for(let i = 0; i < idProductos.length; i++) {

            if(idProductos[i] == producto.id) {

                let nombre_producto = producto.nombre;
                let marca_producto = producto.marca;
                let estado_producto = producto.estado;
                let precio_producto = producto.precio;
                let poster_producto = producto.poster;

                const hr = document.createElement('hr');
                hr.classList.add('linea-separatoria');
                const card = document.createElement('div');
                card.classList.add('card-producto');
                card.innerHTML = `
                
                    <div class="contain-checkbox">
                        <div class="checkbox-wrapper-12">
                            <div class="cbx">
                                <input class="input-prod" checked="" type="checkbox" id="checkbox-producto">
                                <label for="checkbox-producto"></label>
                                <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                                </svg>
                            </div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                <filter id="goo-12">
                                    <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                                    <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
                                    <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div class="contain-content-producto">
                        <div class="content-producto">
                            <div class="contain-image-producto">
                                <img src="${poster_producto}" alt="${nombre_producto}">
                            </div>
                            <div class="desc-producto">
                                <h3>${nombre_producto}</h3>
                                <p class="marca-producto">${marca_producto}</p>
                                <p class="estado-producto">${estado_producto}</p>
                                <p class="precio-producto">${precio_producto}</p>
                            </div>
                        </div>
                        <div class="contador-producto producto">
                            <button class="btn-restar">-</button>
                            <span class="contador">0</span>
                            <button class="btn-sumar">+</button>
                        </div>
                    </div>

                `;
                container.append(card);
                container.append(hr);
            }
        }

    });
})





