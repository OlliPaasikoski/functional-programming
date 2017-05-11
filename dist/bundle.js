(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

let loadImage = require('./helpers/load-image.js');

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
},{"./helpers/load-image.js":2}],2:[function(require,module,exports){

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = function() {
            resolve(image);
        };

        image.onerror = function() {
            let message = 
                'Could not load image at ' + url;
            reject(new Error(message));
        };

        image.src = url;
    });
}

module.exports = loadImage;
},{}]},{},[1]);
