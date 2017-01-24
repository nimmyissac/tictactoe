// should have some way to identify players
// a class player
const possibilities = {   1: [1,2,3],
                          2: [4,5,6],
                          3: [7,8,9],
                          4: [1,4,7],
                          5: [2,5,8],
                          6: [3,6,9],
                          7: [1,5,9],
                          8: [3,5,7]
                      };

class Player {
   
   constructor(name) {
    this.name = name;
    this.symbol = "";
    this.data = []; // data until this point
   }
}
var isFirstPlayer ;
var secondPlayerCreated ;var player1;var player2;var symbol ;
function initialize() {
  isFirstPlayer = true;
  secondPlayerCreated = false;
  symbol = prompt("X or O"); 
  if(symbol === "X" || symbol === "O") {
    player1 = new Player("player1");
    player1.symbol = symbol;
  } else {
  while(symbol !== "X" && symbol !== "O"){
    alert("Please select either X or O");
    symbol = prompt("X or O"); 
   }
}
}
initialize();

function divOnClick(val) {
  if(!(secondPlayerCreated)){
    player2 = new Player("player2");
    player2.symbol = symbol=== "X" ? "O" : "X";
    secondPlayerCreated = true;
  }
  if(isFirstPlayer) {
    document.getElementById(val).innerHTML = player1.symbol;
    document.getElementById(val).disabled = true;
    isFirstPlayer= false;
    if(checkWinner(player1, val)){
      var count = 0;console.log(document.getElementsByClassName("tictacBox").length);
      while(count < document.getElementsByClassName("tictacBox").length)
       { document.getElementsByClassName("tictacBox")[count].innerHTML = "";
         document.getElementsByClassName("tictacBox")[count].disabled = false;
         count++;
       }

      player1.data = [];
      initialize();
    };
  } else {
    document.getElementById(val).innerHTML = player2.symbol;
    document.getElementById(val).disabled = true;
    isFirstPlayer= true;
    if(checkWinner(player2, val)){
      var count = 0;
      while(count < document.getElementsByClassName("tictacBox").length)
       {
         document.getElementsByClassName("tictacBox")[count].innerHTML = "";
         document.getElementsByClassName("tictacBox")[count].disabled = false;
         count++;
       }
      player2.data = [];initialize();
    };
  }
  
}

function checkWinner(player, val) {
  player.data.push(Number(val));
  for(var element in possibilities) {
    var count = 0;
    player.data.forEach(function(item) {
      if(possibilities[element].indexOf(item) > -1){
        count++;
      }
    });
    if(count === 3){
     alert( player.name + " Won");
     return true;
    }
  }
}
