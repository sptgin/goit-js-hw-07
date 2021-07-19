const inputFontSize = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

inputFontSize.addEventListener('input', Event => {
  textFontSize.style.fontSize = `${inputFontSize.value}px`;
});
