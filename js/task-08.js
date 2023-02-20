const form = document.querySelector(".login-form");

const formSubmitHeandler = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const objectForm = {
        email,
        password
    };

    email === "" || password === "" 
    ? alert("всі поля повинні бути заповнені")
    : console.log(objectForm);

    event.currentTarget.reset();
};

form.addEventListener("submit", formSubmitHeandler);

