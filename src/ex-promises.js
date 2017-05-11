
// let loadImage = require('./helpers/load-image.js');

import loadImage from './helpers/load-image.js'; // both work with webpack!

let addImage = (src) => {
    let imageElement = 
        document.createElement("img");
    imageElement.src = src;
    document.body.appendChild(imageElement);
};

Promise.all([
    loadImage('img/airplane.png'),
    loadImage('img/baboon.png'),
    loadImage('img/fruits.png')
]).then((images) => {
    images.forEach(img => addImage(img.src));
});