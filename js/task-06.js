const inputValidation = document.querySelector('#validation-input');
console.log(inputValidation);
inputValidation.addEventListener('input', event => {
  inputValidation.value.length ===
  Number(inputValidation.getAttribute('data-length'))
    ? (inputValidation.classList.add('valid'),
      inputValidation.classList.remove('invalid'))
    : (inputValidation.classList.add('invalid'),
      inputValidation.classList.remove('valid'));
});
