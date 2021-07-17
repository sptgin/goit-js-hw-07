const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesList = document.querySelector('#gallery');

const listElement = images.map(imageSrc => {
  return `<li class="gallery__list-item"><img src="${imageSrc.url}" alt="${imageSrc.alt}" width=180 height=120 </li>`;
});

imagesList.insertAdjacentHTML('beforeend', listElement.join(' '));

imagesList.setAttribute(
  'style',
  'list-style:none; display: flex; justify-content: space-around;',
);
