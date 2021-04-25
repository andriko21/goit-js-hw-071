const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listOfIngradients = document.querySelector("#ingredients");

const makeElements = (arr) => {
  const itemArr = arr.map((el) => {
    const createLi = document.createElement("li");
    createLi.textContent = el;

    return createLi;
  });
  return itemArr;
};

const addItem = (array, reference, callback) => {
  reference.append(...callback(array));
};

makeElements(ingredients, listOfIngradients, makeElements);
