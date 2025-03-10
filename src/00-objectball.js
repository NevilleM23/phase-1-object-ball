function gameObject(){
    debugger; return {  
        home : {
            teamName : "Brooklyn Nets",
            colors :  ["Black", "white"], 
            players  : {
                  "Alan Anderson" : {   "number": 0,
                                        "shoe": 16,
                                        "points":22,
                                        "rebound": 12,
                                        "assists": 12,
                                        "steals": 3,
                                        "blocks": 1,
                                        "slamDunks": 1, },
                  "Reggie Evans" : {
                                    "number": 30, 
                                    "shoe": 14,
                                    "points": 12, 
                                    "rebound": 12, 
                                    "assists": 12, 
                                    "steals": 12, 
                                    "blocks": 12, 
                                    "slamDunks": 7, },      
                   "Brook Lopez": { 
                                    "number": 11, 
                                    "shoe":  17, 
                                    "points": 19, 
                                    "rebound": 10, 
                                    "assists": 10, 
                                    "steals": 3,
                                    "blocks": 1, 
                                    "slamDunks": 15, },
                    "Mason Plumlee": { 
                                    "number": 1, 
                                    "shoe":  19, 
                                    "points": 26, 
                                    "rebound": 12, 
                                    "assists": 6, 
                                    "steals": 3,
                                    "blocks": 8, 
                                    "slamDunks": 5, },
                    "Jason Terry": { 
                                    "number": 31, 
                                    "shoe":  15, 
                                    "points": 19, 
                                    "rebound": 2, 
                                    "assists": 2, 
                                    "steals": 4,
                                    "blocks": 11, 
                                    "slamDunks": 1, },
                    
                }
                
        }, 
        away : {
            teamName : "Charlotte Hornets",
            colors : ["Turqoise", "Purple"], 
            players : {
            "Jeff Adrien": { 
                                    "number" : 4, 
                                    "shoe": 18 , 
                                    "points": 10, 
                                    "rebound": 1, 
                                    "assists": 1, 
                                    "steals": 2,
                                    "blocks": 7, 
                                    "slamDunks": 2 , },
                "Bismak Biyombo": { 
                                    "number" : 0, 
                                    "shoe":  16, 
                                    "points": 12, 
                                    "rebound": 4, 
                                    "assists": 7, 
                                    "steals": 7 ,
                                    "blocks": 15, 
                                    "slamDunks": 10 , },
            "Desayna Diop": { 
                                    "number" : 2, 
                                    "shoe":  14, 
                                    "points": 24, 
                                    "rebound": 12, 
                                    "assists": 12, 
                                    "steals": 4,
                                    "blocks": 5, 
                                    "slamDunks": 5 , },
                "Ben Gordon": { 
                                    "number" : 8, 
                                    "shoe":  15, 
                                    "points": 33, 
                                    "rebound": 3, 
                                    "assists": 2, 
                                    "steals": 1,
                                    "blocks": 1, 
                                    "slamDunks": 0, },
            "Brendan Haywood": { 
                                    "number" : 33, 
                                    "shoe":  15, 
                                    "points": 6, 
                                    "rebound": 12, 
                                    "assists": 12, 
                                    "steals": 22,
                                    "blocks": 5, 
                                    "slamDunks": 12, }
            }

        }
    }
 
 }
 
function numPointsScored(playerName,){ 
    let game = gameObject();
    if (game.home.players[playerName]){
        return game.home.players[playerName].points}
        debugger
    if (game.away.players[playerName]){
        return game.home.players[playerName].points}
}  

numPointsScored("Alan Anderson")

function shoeSize(playerName,) {
    let game = gameObject()
    if (game.home.players[playerName]){
        return game.home.players[playerName].shoe}
    debugger;
    if (game.away.players[playerName]){
        return game.away.players[playerName].shoe}
    return `Player ${playerName} not found`;
} 



function teamColors(teamName,){
    let game = gameObject()
    if (game.home.teamName == teamName){
        return game.home.colors}
    if (game.away.teamName == teamName){
        return game.away.colors}
        debugger;
} 


function teamName(){
    let game = gameObject()
    const homeTeam = game.home.teamName
    const awayTeam = game.away.teamName
    return [homeTeam, awayTeam]
}  

function playerNumbers(){
    let game = gameObject() 
    let team;
    if (game.home.teamName === teamName) {
        team = game.home;
        debugger;
    } else if (game.away.teamName === teamName) {
        team = game.away;
    }  const jerseyNumbers = Object.values(team.players).map(player => player.number);
       return jerseyNumbers;
       debugger;
} 

function playerStats(playerName){
    let game = gameObject()
    if (game.home.players[playerName]){
        return game.home.players[playerName]}
        debugger;
    if (game.away.players[playerName]){
        return game.home.players[playerName]
        debugger;
    }
}

function bigShoeRebounds(){
    const game = gameObject();

    let playerWithLargestShoe = null;
    let largestShoeSize = 0;
    const allPlayers = { ...game.home.players, ...game.away.players };

    for (const playerName in allPlayers) {
      const player = allPlayers[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = player;
      }
    }
    debugger;
  
    return playerWithLargestShoe.rebounds;
}
  

    
