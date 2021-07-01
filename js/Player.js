class Player{
    constructor(){

    }
    getCount(){
     var playerCountRef = database.ref('playerCount');
     playerCountRef.on("value",function(data){
         playerCount= data.val();
     })
    }
    updateCount(count){
       database.ref('/').update({
         playerCount:count  
       })
    }
    update(name){
        var playerIndex = 'player'+playerCount; // create the playerIndex using player count
        database.ref(playerIndex).set({
            name:name
        })

    }
}