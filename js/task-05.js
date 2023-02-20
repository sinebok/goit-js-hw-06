const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function onInputChange(event) {
    const messege = event.currentTarget.value.trim();
    output.textContent = messege === '' ? 'Anonymous' : messege;
}

textInput.addEventListener("input", onInputChange);
