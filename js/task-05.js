const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', event => {
  event.currentTarget.value
    ? (outputName.textContent = event.currentTarget.value)
    : (outputName.textContent = 'Незнакомец');
});
