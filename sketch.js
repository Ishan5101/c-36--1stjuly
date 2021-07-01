var hypnoticBall, database;
var position;
var gameState
var playerCount
var form
var game
var player

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

 game=new Game();
 game.getState();
 game.start();
}

function draw(){
  background("white");
  
  
  
}



function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
