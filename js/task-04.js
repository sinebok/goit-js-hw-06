const span = document.querySelector("#value");
let spanValue = Number(span.textContent);
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener("click", () => {
    spanValue = spanValue - 1;
    span.textContent = spanValue;
  });

  increment.addEventListener("click", () => {
    spanValue = spanValue + 1;
    span.textContent = spanValue;
  });