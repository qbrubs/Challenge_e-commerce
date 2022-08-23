const email = document.querySelector('#login-email__input');
const password = document.querySelector('#login-password__input');
const loginBtn = document.querySelector('#login-btn');
const errorMessageEmail = document.querySelector('[data-error="email"]');
const errorMessagePass = document.querySelector('[data-error="password"]');

email.addEventListener('blur', () => {
    if(!email.validity.valid) {
        errorMessageEmail.style.display = "inline-block";
    } else {
        errorMessageEmail.style.display = "none";
    }
});

password.addEventListener('blur', () => {
    if(!password.validity.valid) {
        errorMessagePass.style.display = "inline-block";
    } else {
        errorMessagePass.style.display = "none";
    }
});

document.addEventListener('input', () => {
    if(email.validity.valid && password.validity.valid) {
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.setAttribute('disabled', 'disabled');
    }
});

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "../html/products.html";
})
