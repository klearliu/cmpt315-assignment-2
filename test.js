
// Array Function Development (Part 2)
const {findNaNIndex} = require('./findNaNIndex');
const {isArrayFactorChain} = require('./isArrayFactorChain');
const {countNumberOfArrays} = require('./countNumberOfArrays');

// Object Function Development (Part 3)
const {participants} = require('./participants');
const {winnersObject} = require('./winnersObject');
const {biggestLoser} = require('./biggestLoser');

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

// Part 2.1
console.log(findNaNIndex([2, NaN, 8, 16, 32])) // => [1]
console.log(findNaNIndex([2, 4, NaN, 16, 32, NaN])) // => [2,5]
console.log(findNaNIndex([2, 4, 16, 32])) // => []

// Part 2.2
console.log(isArrayFactorChain([2, 4, 8, 16, 32]));
console.log(isArrayFactorChain([2, 4, 8, 16, 32, 68]));

// Part 2.3
console.log(countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]));
console.log(countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));

// Part 3.1
console.log(participants(matches));

// Part 3.2
console.log(winnersObject(matches));

// Part 3.3
console.log(biggestLoser(matches));