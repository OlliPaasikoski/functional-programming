

var animals = [ 
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog'},
    { name: 'Harold',     species: 'fish'},
    { name: 'Ursula',     species: 'cat'},
    { name: 'Jimmy',      species: 'fish'}
];

var names = animals.map(animal => animal.name + ' is a ' + animal.species );
var dogs = animals.filter(animal => animal.species === 'dog');
var firstFish = animals.find(animal => animal.species === "fish");

console.dir(names);
console.dir(dogs);
console.log(firstFish);