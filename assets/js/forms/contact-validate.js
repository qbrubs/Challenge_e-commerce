const contactName = document.querySelector('#contact__name');
const contactMessage = document.querySelector('#contact__message');
const errorName = document.querySelector('[data-error="name"]');
const errorMessage = document.querySelector('[data-error="message"]');
const footerBtn = document.querySelector('.footer__form-button');

contactName.addEventListener('blur', () => {
    if(!contactName.validity.valid) {
        errorName.style.display = 'inline-block';
    } else {
        errorName.style.display = 'none';
    }
})

contactMessage.addEventListener('blur', () => {
    if(!contactMessage.validity.valid) {
        errorMessage.style.display = 'inline-block';
    } else {
        errorMessage.style.display = 'none';
    }
})

document.addEventListener('input', () => {
    if(contactName.validity.valid && contactMessage.validity.valid) {
        footerBtn.removeAttribute('disabled');
    } else {
        footerBtn.setAttribute('disabled', 'disabled');
    }
})