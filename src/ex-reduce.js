


var myFuntion = function(animal) {
    return animal;
};

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 300 },
    { amount: 150 },
    { amount: 320 }        
];

/*
var totalAmount = orders.reduce(function(sum, order) {
    return sum + order.amount;
}, 0); */

totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);


/*
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}*/

console.log(totalAmount);