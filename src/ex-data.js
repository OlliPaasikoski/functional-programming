let fs = require('fs');

let output = fs.readFileSync('data.tsv', 'utf8')
    .trim() // just in case
    .split('\n') // returns array
    .map(line => line.split('\t')) // 
    .reduce((customers,line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            item: line[2],
            price: line[3],
            quantity: line[4].replace(/(\r)/gm,"")
        });
        return customers;
    }, {});




console.log('output', JSON.stringify(output, null, 2));


