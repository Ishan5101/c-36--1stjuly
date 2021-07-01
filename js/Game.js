class Game{
constructor(){
    // leave it empty
}
getState(){ // read the gameState from the database
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
}
update(state){ // update the gameState in the database to a value passed to it inside the parentheses
    database.ref('/').set({
        gameState:state
      })
}
start(){ // start the game and display on the screen depending on the state of the game.
    if (gameState===0){
        player=new Player();
        player.getCount();
        form = new Form();
        form.display()  // objectName.functionName(); // call function of a class using the object of that class  
    }
}
}