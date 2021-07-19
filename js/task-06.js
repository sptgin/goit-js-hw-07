const inputValidation = document.querySelector('#validation-input');
inputValidation.addEventListener('focusout', event => {
  inputValidation.textLength == inputValidation.getAttribute('data-length')
    ? (inputValidation.classList.add('valid'),
      inputValidation.classList.remove('invalid'))
    : (inputValidation.classList.add('invalid'),
      inputValidation.classList.remove('valid'));
});
