
// Array Function Development (Part 2)
const {findNaNIndex} = require('./findNaNIndex');
const {isArrayFactorChain} = require('./isArrayFactorChain');
const {countNumberOfArrays} = require('./countNumberOfArrays');

//Object Function Development (Part 3)

// module.exports = {
//     findNaNIndex,
//     isArrayFactorChain,
//     countNumberOfArrays
// };


// Part 1
// console.log(findNaNIndex([2, NaN, 8, 16, 32])) // => [1]
// console.log(findNaNIndex([2, 4, NaN, 16, 32, NaN])) // => [2,5]
// console.log(findNaNIndex([2, 4, 16, 32])) // => []

// Part 2
// console.log(isArrayFactorChain([2, 4, 8, 16, 32]));
// console.log(isArrayFactorChain([2, 4, 8, 16, 32, 68]));

// Part 3
// console.log(countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]));
// console.log(countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));