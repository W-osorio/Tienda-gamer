

export function CalcularPrecio(productoDescontar) {
    const cant_productos = document.querySelector('.cant-producto');
    const sub_total = document.getElementById('sub-total');
    const iva = document.getElementById('iva');
    const total = document.getElementById('total');

    let cant_total_prod = 0;
    let calcSubTotal = 0;
    let calcIva = 0;
    let calcTotal = 0;

    const container_carro = document.getElementById('container-carro');
    const cards = container_carro.querySelectorAll('.card-producto');


    cards.forEach(card => {
        const precio_prod = parseInt(card.querySelector('.precio-producto').textContent);
        const cant_prod = parseInt(card.querySelector('.contador').textContent);
        cant_total_prod = cant_total_prod + cant_prod;

        calcTotal = calcTotal + precio_prod * cant_prod;
        calcIva = calcTotal * 0.19;
        calcSubTotal = calcTotal - calcIva;
    })

    let restTotal = productoDescontar["total"];
    let restIva = productoDescontar["iva"];
    let restSubTotal = productoDescontar["sub_total"];
    let restCantProd = productoDescontar["cant_prod"];

    
    cant_productos.textContent = cant_total_prod - restCantProd;
    sub_total.textContent = `$${calcSubTotal - restSubTotal}`;
    iva.textContent = `$${calcIva - restIva}`;
    total.textContent = `$${calcTotal - restTotal}`;
}



export function ValorProducto(input) {

    let cant_total_prod = 0;
    let calcSubTotal = 0;
    let calcIva = 0;
    let calcTotal = 0;

    const card = input.closest('.card-producto');
    const precio = parseInt(card.querySelector('.precio-producto').textContent)
    const cantidad = parseInt(card.querySelector('.contador').textContent)
    
    calcTotal = (precio * cantidad);
    calcIva = (calcTotal * 0.19);
    calcSubTotal = (calcTotal - calcIva);
    cant_total_prod = cantidad;

    return {
        "total": calcTotal,
        "iva": calcIva,
        "sub_total": calcSubTotal,
        "cant_prod": cant_total_prod
    }
}




