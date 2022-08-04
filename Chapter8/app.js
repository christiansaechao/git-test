var view = {
   displayMessage: function(msg){
        var messageArea = document.getElementById("messageArea"); 
        messageArea.innerHTML = msg; 
    },

    displayHit: function(location) {
        var cell = document.getElementById(location); 
        cell.setAttribute("class", "hit"); 
    },
    
    displayMiss: function(location){
        var cell = document.getElementById(location); 
        cell.setAttribute("class", "miss"); 
    }
}

var model = {
    boardSize: 7, 
    numShips: 3, 
    shipLength: 3, 
    shipsSunk: 0,

    ships: [
        { locations: ["10", "20", "30"], hits:["", "", ""] },
        { locations: ["40", "50", "60"], hits:["", "", ""] },
        { locations: ["44", "45", "46"], hits:["", "", ""] }
    ], 

    fire: function(guess){
        for(i=0; i < this.numShips; i++){
            var ship = this.ships[i];

            var index = ship.locations.indexOf(guess); 
            if (index >= 0){
                ship.hits[index] = "hit";
                view.displayHit(guess); 
                view.displayMessage("HIT!"); 

                if(this.isSunk(ship)){
                    view.displayMessage("You sank my battleship!"); 
                }
                return true; 
            }
        }
        view.displayMiss(guess); 
        view.displayMessage("You missed."); 
        return false; 
    },

    isSunk: function(ship){
        for(var i = 0; i < this.shipLength; i++){
            if(ship.hits[i] !== "hit"){
                return false; 
            }
        }
        return true; 
    }
}

var controller = {
    guesses: 0, 

    prcoessGuess: function(guess){
        var location = parseGuess(guess); 
        if (location){
            
        }
    }
}


function parseGuess(guess){
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"]; 
    if(guesss === null || guess.length !== 2){
        alert("Please enter a letter and a number on the board"); 
    }
    else{
        var firstChar = guess.charAt(0); 
        var row = alphabet.indexOf(firstChar); 
        var column = guess.charAt(1); 

        if(isNaN(row) || isNaN(column)){
            alert("Oops, that isn't on the board."); 
        }
        else if (row < 0 || row >= model.boarSize || column < 0 || column >= model.boardSize){
            alert("oops, that's off the board!");
        }
        else{
            return row + column; 
        }
    }
    return null; 
}