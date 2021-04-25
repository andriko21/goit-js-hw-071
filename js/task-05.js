const refs = {
 input: document.querySelector('#name-input'),
 span: document.querySelector('#name-output'),
};

const { input, span } = refs;

input.addEventListener('input', () => ChangeTextContentOFSpan(input.value))

const ChangeTextContentOFSpan = (newTextContent) => {
   if (newTextContent === "") {
      span.textContent = "незнакомец"
   }
   span.textContent = newTextContent;
}