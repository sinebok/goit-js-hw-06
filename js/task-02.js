const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const arrayList = [];
const list = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  arrayList.push(item);
});

ingredientsList.append(...arrayList);

