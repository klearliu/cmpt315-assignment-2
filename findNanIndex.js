/**
 * Find all the indexes where NaN is found in a given array of numbers and NaN
 * 
 * @param myArray - Array input
 * @returns {Array} - An array
 */
function findNaNIndex(myArray){
    
    // returns [] if empty array
    if(!(myArray.length))
        return [];

    // initialize empty array
    const retArray = [];

    // traversing through myArray
    for(let indexPos=0; indexPos<myArray.length; indexPos++){
        
        // stores index position into retArray if value is NaN
        if(isNaN(myArray[indexPos]))
            retArray.push(indexPos)
    }

    return retArray;

}

// exports
module.exports = {findNaNIndex};