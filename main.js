function validarRedex(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return emailRegex.test(email);
}

const button = document.querySelector('.submit');
const formulario = document.querySelector('.form');
const input = formulario.elements.email;
let inbputBorder = document.querySelector('.input__email');
const textError = document.querySelector('.text__error');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validarRedex(input.value)) {
        inbputBorder.classList.add('border__error');
        textError.classList.remove('text__error__oculto')
        input.placeholder = 'example@email/com';
        inbputBorder.classList.add('color__placeholder__error');
    } else {
        formulario.submit();
    }
});

