const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const listElement = ingredients.map(item => {
  const ingredientsListElement = document.createElement('li');
  ingredientsListElement.textContent = item;
  return ingredientsListElement;
});
ingredientsList.append(...listElement);
