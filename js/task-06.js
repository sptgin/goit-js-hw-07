const inputValidation = document.querySelector('#validation-input');
inputValidation.addEventListener('input', event => {
  inputValidation.textLength === 6
    ? console.log('+++' + inputValidation.textLength)
    : console.log(inputValidation.textLength);
  console.log(inputValidation);
});
