// should have some way to identify players
// a class player
const possibilities = { 1: [[0,0],[1,1][2,2]],
                          2: [[0,0],[0,1][0,2]],
                          3: [[1,0],[1,1][1,2]],
                          4: [[2,0],[2,1][2,2]],
                          5: [[0,0],[1,0][2,0]],
                          6: [[0,1],[1,1][2,1]],
                          7: [[0,2],[1,2][2,2]],
                          8: [[0,2],[1,1][2,0]]
                      };
class Player {
   
   constructor(name) {
    this.name = name;
    this.symbol = "";
   this.data = []; // data until this point
   }
}
var player1;var player2;
function createPlayer(text) {
  if(text === "player1"){
   alert(text);
    player1 = new Player(text);
  }
}