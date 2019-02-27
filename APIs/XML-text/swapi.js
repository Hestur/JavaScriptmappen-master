callAPI();

function callAPI(){
    var r = "https://swapi.co/api/people/1/";
    fetch(r,{
        method: "get"
     }).then(function(response){
         return response.json();
     }).then(function(jsonresponse){
     //   console.log(jsonresponse.birth_year);
        printDataNy(jsonresponse);  
     }).catch(function(error){
         console.log("err" + error);
     });

}
var t ="";

function printData(jsondata){
t = "Name: " + jsondata.name + " eyecolor: " + jsondata.eye_color;
document.getElementById("result").innerHTML = t;
}

function printDataNy(jsondata){
info = `P.name: ${jsondata.name} med hårfarve: ${jsondata.hair_color}`;
document.getElementById("result").innerHTML = info;
}



