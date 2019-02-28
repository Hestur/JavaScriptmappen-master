// print specific data from API
var r = "https://swapi.co/api/planets/3/";

callAPI();

function callAPI(){
    
    fetch(r,{
        method: "get"
     }).then(function(response){
         console.log(response);
         return response.json();
     }).then(function(jsonresponse){
       console.log(jsonresponse);
        printDataNy(jsonresponse);  
     }).catch(function(error){
         console.log("err" + error);
     });

}
var t ="";

function printData(jsondata){
t = "Name: " + jsondata.name;
document.getElementById("result").innerHTML = t;
}

function printDataNy(jsondata){
info = `P.name: ${jsondata.name} Terrain: ${jsondata.terrain}`;
document.getElementById("result").innerHTML = info;
}



