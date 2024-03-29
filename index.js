
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

module.exports = {
    findNaNIndex,
    isArrayFactorChain,
    countNumberOfArrays,
    participants,
    winnersObject,
    biggestLoser,
};