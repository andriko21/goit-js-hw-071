const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listOfIngradients = document.querySelector('#ingredients');

  const createElements = arr =>{
    const itemArray = arr.map(element => {
      const elementLi = document.createElement('li');
      elementLi.textContent = element;
      
      return elementLi;
    });
    return itemArray;
  };

  const addItemsInList = (arr, reference, callback) => { reference.append(...callback(arr))};

  

 

  addItemsInList(ingredients, listOfIngradients, createElements);
