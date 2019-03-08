// print specific data from API  
var r = "https://owapi.net/api/v3/u/Hest-2723/stats";

callAPI();

     window.onload = function(){
     document.getElementById("inpSoeg").addEventListener("dblclick", SearchAPI), setTimeout(1000);
    callAPI();
 };

 // Funktion til at håndtere søgning
function SearchAPI(){

    var SW = document.getElementById("inpSoeg").value;

    r = "https://owapi.net/api/v3/u/" + SW + "/stats";
    callAPI();

}

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



function printDataNy(jsondata){
info = `<div class="box">Player Rank: ${jsondata.eu.stats.competitive.overall_stats.tier} <img src="${jsondata.eu.stats.competitive.overall_stats.tier_image}" alt="picture"> <br> Player level: ${jsondata.eu.stats.competitive.overall_stats.level} <br> Highest dmg in game: ${jsondata.eu.stats.competitive.game_stats.all_damage_done_most_in_game} <br> Player Kills: ${jsondata.eu.stats.competitive.game_stats.eliminations} <br> Player Deaths: ${jsondata.eu.stats.competitive.game_stats.deaths} </div>`;
document.getElementById("result").innerHTML = info;
}