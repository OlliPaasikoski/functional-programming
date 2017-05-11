
var _ = require('lodash');

let dragon = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!';

dragon = _.curry(dragon);

let fluffykinsDragon = dragon('fluffykins');
let tinyDragon = fluffykinsDragon('tiny');

console.log(tinyDragon('lightning'));

let dragons = [
    { name: 'fluffykins', element: 'lightning' },
    { name: 'noomi', element: 'lightning' },
    { name: 'rascal', element: 'ice' },
    { name: 'harry', element: 'fire' },
    { name: 'randolph', element: 'ice' },
];

let hasElement = 
    _.curry((element, obj) => obj.element === element);

let lightningDragons = 
    dragons.filter(hasElement("lightning"));

console.log(lightningDragons);

