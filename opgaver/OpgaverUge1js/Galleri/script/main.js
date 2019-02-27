function showImg(thumb) {
    document.querySelector("#imgcontainer img").src = thumb.src.replace("Thumb", "Big");
};

function hideThumb() {
    // En var med thumb-menuen og thumb-menuens aktuelle left-pos:
    var imgmenu = document.getElementById("imgmenucontainer");
    var imgmenuposition = imgmenu.offsetLeft;

    // Hvis thumb-menuen er større end -170px så...
    if (imgmenuposition > -170) {
        imgmenu.style.left = imgmenuposition - 5 + "px";
        // run it every 20 ms
        setTimeout(hideThumb, 20);
     }else{ 
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "inline";
    }
}

 function showThumb() {
     // En var med thumb-menuen og thumb-menuens aktuelle left-pos:
     var imgmenu = document.getElementById("imgmenucontainer");
     var imgmenuposition = imgmenu.offsetLeft;

     // Hvis thumb-menuen er større end -170px så...
     if (imgmenuposition < 0) {
         imgmenu.style.left = imgmenuposition + 5 + "px";
        // run it every 20ms
         setTimeout(showThumb, 20);
     } else {
         document.getElementById("left").style.display = "inline";
         document.getElementById("right").style.display = "none";
       

        }
 }
