function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const quantityEl = document.querySelector('#controls>input[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = quantityEl.value;
  const boxesArray = [];

  for (let i = 0; i < amount; i+=1) {
    const boxElement = document.createElement("div");

    boxElement.style.width = 30 + i + "px";
    boxElement.style.height = 30 + i + "px";
    boxElement.style.backgroundColor = getRandomHexColor();

    boxesArray.push(boxElement);

    boxes.append(...boxesArray);
  }
}

btnCreate.addEventListener("click", createBoxes);

const destroyBoxes = (e) => (boxes.innerHTML = "");

btnDestroy.addEventListener("click", destroyBoxes);
