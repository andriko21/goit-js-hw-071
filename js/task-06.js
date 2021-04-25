const input = document.querySelector('#validation-input');

const addClassForInput = () =>
  input.classList.add(input.value.length === 6 ? 'valid' : 'invalid');

const inputIsBlur = () => {
    input.classList.remove(input.classList.contains('invalid') ? 'invalid' : 'valid')
    return addClassForInput();
}
input.addEventListener('blur', inputIsBlur);


   