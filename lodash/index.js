const _ = require('lodash');



const numbers = [1, 2, 3, 4, 5, 6];

const chunkNumbers = _.chunk(numbers, 2)

console.log(numbers, chunkNumbers);

let t = 19;

console.log(t >>>= 12)

const slice = _.slice(numbers, 1, 3);
console.log(slice);

const compact = _.compact([0, 1, false, 2, '', 3]);
console.log(compact);