/**
 * Return the count for the number of arrays inside a given array.
 * 
 * @param myArray: array input
 * @returns int
 */
function countNumberOfArrays(myArray){
    
    // initialize inital count
    let count = 0;

    // traversing through array
    for(let i=0; i<myArray.length; i++){
        
        // if the array element is an array itself increment count
        if(Array.isArray(myArray[i]))
            count+=1;
    }

    return count;

}

// exports
module.exports = {countNumberOfArrays};