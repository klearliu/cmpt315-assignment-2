// imports
const {winnersObject} = require('./winnersObject');

/**
 * returns the loser name with the biggest tally of loser points
 * 
 * ASSUMPTION: All player names in match are unique (no duplicate names)
 * ASSUMPTION: "bigestLoser" there will only be one loser
 * 
 * @param matches 
 * @returns 
 */
function biggestLoser(matches){
    
    const objectArray = winnersObject(matches);

    let currentLoser = NaN;
    let loser = Infinity;

    // Iterate through object
    for (const i in objectArray) {
        // Check if the person's array length is smaller than the current smallest
        if (objectArray[i].length < loser) {
            loser = objectArray[i].length;
            currentLoser = i;
        }
    }

    return currentLoser;
 
}
// exports
module.exports = {biggestLoser};