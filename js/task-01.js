  
const arrayOfCategories = document.querySelectorAll('.item');

const listCategories = array => {
    console.log(`У списку ${array.length} категорії`);
    array.forEach(el => {
        const elTitle = el.querySelector('h2');
        const textContentOfLi = el.querySelectorAll('li');
        return console.log(`Категорія: ${elTitle.textContent}`),
        console.log(`Кількість елементів: ${textContentOfLi.length}`);
    });
};

listCategories(arrayOfCategories);



