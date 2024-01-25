/**
 * Shows all participants in the match
 * 
 * ASSUMPTION: All player names in match are unique (no duplicate names)
 * 
 * @param matches: an array of objects
 * @returns an array
 */
function participants(matches){
    
    // initialize set to ensure no plyers listed more than once
    const allPlayers = new Set();

    // all names in matches for index i's winner and loser goes to set
    for(let i=0; i<matches.length; i++){
        allPlayers.add(matches[i].winner);
        allPlayers.add(matches[i].loser);
    }

    // return a converted Array from a Set
    return Array.from(allPlayers)

}

// exports
module.exports = {participants};