"use strict";

function makeLight(incolor) {
    turnOffLights();
    document.getElementById(incolor + "Light").style.backgroundColor = incolor;
}

function turnOffLights() {
   var lightsArr = document.getElementsByClassName("light");
    for (var i = 0; i < lightsArr.length; i++) {   
        lightsArr[i].style.backgroundColor = "";
    }
}