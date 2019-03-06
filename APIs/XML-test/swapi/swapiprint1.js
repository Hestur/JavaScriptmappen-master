// print specific data from API
var r = "https://ow-api.com/v1/stats/pc/us/cats-11481/profile";

callAPI();

function callAPI(){
    
    fetch(r,{
        method: "get"
     }).then(function(response){
         console.log(response);
         return response.json();
     }).then(function(jsonresponse){
       console.log(jsonresponse);
        printData(jsonresponse);  
     }).catch(function(error){
         console.log("err" + error);
     });

}
var t ="";

function printData(jsondata){
t = 
"Name: " + jsondata.name + " | " +
"Lvl: " + jsondata.level + " | " +
"Games Won: " + jsondata.gamesWon + " | " +  
"Endorsement lvl: " + jsondata.endorsement 
;
document.getElementById("result").innerHTML = t;
}

function printDataNy(jsondata){
info = `P.name: ${jsondata.name} Terrain: ${jsondata.terrain}`;
document.getElementById("result").innerHTML = info;
}



