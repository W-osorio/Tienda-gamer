

const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
    const btn_restar = producto.querySelector('#btn-restar');
    const btn_sumar = producto.querySelector('#btn-sumar');
    const contador = producto.querySelector('#contador');

    btn_restar.addEventListener('click', () => {
        let valor = parseInt(contador.textContent);
        if(valor > 0) {
            contador.textContent = valor - 1;
        }
    })

    btn_sumar.addEventListener('click', () => {
        let valor = parseInt(contador.textContent);
        contador.textContent = valor + 1;
        
    })

});


