const addImg = document.querySelector('#product__add-preview');
const urlImg = document.querySelector('#product-add__image-url');
const deviceImg = document.querySelector('#product-add__img-device');
const errorImg = document.querySelector('[data-error="image"]');

document.addEventListener('input', () => {
    if(deviceImg.validity.valid || urlImg.validity.valid) {
        errorImg.style.display = 'none';
    } else {
        errorImg.style.display = 'block';
    }
})

let uploadImg = '';
deviceImg.addEventListener('change', function() {
    let file = this.files[0];
    if(file){
        let fileReader = new FileReader();
        fileReader.addEventListener('load', function() {
            addImg.setAttribute('src', fileReader.result);
        })
        fileReader.readAsDataURL(file);
    }
})

urlImg.addEventListener('blur', function() {
    if(urlImg.value){
        addImg.setAttribute('src', urlImg.value);
    } else {
        addImg.src = "../img/preview.png";
    }
})

const addType = document.querySelector('#product-add__type');
const errorType = document.querySelector('[data-error="type"]');

addType.addEventListener('blur', () => {
    if(!addType.validity.valid) {
        errorType.style.display = 'block';
    } else {
        errorType.style.display = 'none';
    }
})

const addName = document.querySelector('#product-add__name');
const errorName = document.querySelector('[data-error="name"]');

addName.addEventListener('blur', () => {
    if(!addName.validity.valid) {
        errorName.style.display = 'block';
    } else {
        errorName.style.display = 'none';
    }
})

const addPrice = document.querySelector('#product-add__price');
const errorPrice = document.querySelector('[data-error="price"]');

addPrice.addEventListener('blur', () => {
    if(!addPrice.validity.valid) {
        errorPrice.style.display = 'block';
    } else {
        errorPrice.style.display = 'none';
    }
})

const addDesc = document.querySelector('#product-add__description');
const errorDesc = document.querySelector('[data-error="description"]');

addDesc.addEventListener('blur', () => {
    if(!addDesc.validity.valid) {
        errorDesc.style.display = 'block';
    } else {
        errorDesc.style.display = 'none';
    }
})

const addNewProductBtn = document.querySelector('.product-add__btn');

document.addEventListener('input', () => {
    if((urlImg.validity.valid || deviceImg.validity.valid) && addType.validity.valid &&
    addName.validity.valid && addPrice.validity.valid && addDesc.validity.valid) {
        addNewProductBtn.removeAttribute('disabled');
    } else {
        addNewProductBtn.setAttribute('disabled', 'disabled');
    }
})


