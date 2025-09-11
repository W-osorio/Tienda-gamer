
const root = document.querySelector('.root');
const btn_pagar = document.getElementById('btn-pagar');

let visible = true;

btn_pagar.addEventListener('click', () => {

    if (visible) {
        root.style.transform = 'translate(-50%, -50%) scaleY(1)';
        visible = false;
    } else {
        root.style.transform = 'translate(-50%, -50%) scaleY(0)';
        visible = true;
    }

});

