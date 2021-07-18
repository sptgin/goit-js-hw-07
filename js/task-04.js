const buttonCounter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const conuter = document.querySelector('#counter');
const decrementButton = conuter.firstElementChild;
const incrementButton = conuter.lastElementChild;
const valueLabel = document.querySelector('#value');

decrementButton.addEventListener('click', function () {
  buttonCounter.decrement();
  valueLabel.textContent = buttonCounter.value;
});
incrementButton.addEventListener('click', function () {
  buttonCounter.increment();
  valueLabel.textContent = buttonCounter.value;
});
