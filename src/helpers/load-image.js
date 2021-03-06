
function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = () => resolve(image);       

        image.onerror = function() {
            let message = 
                'Could not load image at ' + url;
            reject(new Error(message));
        };

        image.src = url;
    });
}

module.exports = loadImage;