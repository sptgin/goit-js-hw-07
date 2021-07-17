const numberOfItems = document.querySelectorAll('.item');
console.log(`В списке  ${numberOfItems.length} категории`);
const itemsHeaders = numberOfItems.forEach(items => {
  console.log(`Категория: ${items.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${items.querySelectorAll('li').length}`);
});
