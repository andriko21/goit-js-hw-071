const input = document.querySelector('input');
const mainBoxes = document.querySelector('#boxes');
const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]')

input.addEventListener('click', onInput);

function onInput(event){}

function createBoxes(amount){
   const allDiv=[];

    for(let i=0; i<amount; i+=1){
        const createDiv = document.createElement('div');
        createDiv.classList.add('div__item')
        createDiv.style.width = `${i*10+30}px`;
        createDiv.style.height = `${i*10+30}px`;
        createDiv.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

        function getRandom(min, max){
          return Math.ceil(Math.random() * (max - min) + min)
        }
        allDiv.push(createDiv);
    }


    
    
    mainBoxes.append(...allDiv)
}

renderButton.addEventListener('click',onRenderClickButton);

function onRenderClickButton(){
createBoxes(input.value);
}

destroyButton.addEventListener('click',onDestroyClickButton);

function onDestroyClickButton(){
    input.value='';
    mainBoxes.innerHTML='';
} 