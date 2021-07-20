const boxesControls = document.querySelector('#controls');

const boxesControlsRenderButton = boxesControls.querySelector(
  '#controls, button[data-action="render"]',
);
const boxesControlsDestroyButton = boxesControls.querySelector(
  '#controls, button[data-action="destroy"]',
);
const boxesControlsInput = boxesControls.querySelector('#controls, input');

boxesControlsRenderButton.addEventListener('click', event => {
  createBoxes(boxesControlsInput.valueAsNumber);
});
boxesControlsDestroyButton.addEventListener('click', event => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxesElement = [];
  const boxesElements = document.querySelector('#boxes');
  for (let i = 0; i < amount; i += 1) {
    boxesElement.push(
      `<div style="background-color: #${Math.floor(
        Math.random() * 16777215,
      ).toString(16)}; width: ${30 + i * 10}px; height: ${
        30 + i * 10
      }px"></div>`,
    );
  }
  boxesElements.insertAdjacentHTML('beforeend', boxesElement.join(' '));
}

function destroyBoxes() {
  const boxesElements = document.querySelector('#boxes');
  while (boxesElements.firstChild) {
    boxesElements.removeChild(boxesElements.firstChild);
  }
}
