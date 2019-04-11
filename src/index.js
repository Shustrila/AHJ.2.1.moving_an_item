import './css/style.css'
import goblin from './images/goblin.png'

const grid = document.querySelector('[data-list=grid]');
const image = document.createElement('img');

image.className = 'grid__image';
image.setAttribute('data-item', 'goblin');
image.setAttribute('src', goblin);

setInterval(() => {
    grid.children[Math.floor(Math.random() * grid.children.length)].prepend(image);
}, 700);
