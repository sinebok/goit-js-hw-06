const textInput = document.querySelector("#validation-input");

function onInputBlur(event) {
    const contentInput = event.currentTarget.value.trim();
    textInput.dataset.length = contentInput.length;

    if (textInput.dataset.length === '6') {
        textInput.classList.remove('invalid');
        return textInput.classList.add('valid');
    }

    textInput.classList.remove('valid');
        return textInput.classList.add('invalid');
}

textInput.addEventListener('blur', onInputBlur);