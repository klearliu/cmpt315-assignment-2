// imports
const {participants} = require('./participants');

/**
 * Returns an object that lists each participants and who they've beaten.
 * This file will require participants.js
 * 
 * ASSUMPTION: All player names in match are unique (no duplicate names)
 * 
 * @param matches: an array of objects
 * @returns an object
 */
function winnersObject(matches){
    
    // initializing array of object
    const retArrayOfObjects = {};

    // getting all players from match
    const players = participants(matches);

    for(let i=0; i<players.length; i++){
        
        const losersArray = [];

        for(let match=0; match<matches.length; match++){
            
            // if the current search matches with the winner, store the loser
            if(players[i] === String(matches[match].winner))
            
                // if name is already in list, do not push to array
                if(!losersArray.includes(matches[match].loser))
                    losersArray.push(matches[match].loser)
        }
        
        // pushing array object to retArrayOfObjects
        retArrayOfObjects[String(players[i])] = losersArray;

    }

    return retArrayOfObjects;
    
}

// exports
module.exports = {winnersObject};