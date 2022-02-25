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

const diff = _.difference([2,3,1], [3,1,4]);
console.log(diff);

const diffBy = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
const diffBy_2 = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
console.log(diffBy, diffBy_2);