const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.js-gallery')

const addItemToGallary = function () {
    
    const addItem = document.createElement('li')
    addItem.classList.add('gallary__item')
    addItem.insertAdjacentHTML('afterbegin', `<img src= ${this.url} class = 'gallary__image' alt = '${this.alt}'>`)

    return addItem
}
const addGalarry = (array, reference) => {
    
    reference.classList.add('gallery');
    const arrOfGallary = array.map(el => addItemToGallary.call(el));
    reference.append(...arrOfGallary);
}

addGalarry(images, galleryList)