/**
 * Return true or false if an array is a factor chain or not.
 * 
 * @param myArray: array input
 * @returns: boolean
 */
function isArrayFactorChain(myArray){
    
    // traversing through myArray
    for(let i=1; i<myArray.length; i++){

        /* immediately returns false if the index
        is not divisible by the previous */
        if(myArray[i]%myArray[i-1]!=0)
            return false;
    }

    return true;
}

// exports
module.exports = {isArrayFactorChain};