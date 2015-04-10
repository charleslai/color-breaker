/*
  color-breaker.js
  Makes stuff unfun
  @author: Charles J Lai
*/

//Constants
var UPDATE_INTERVAL = 1;
var LONG_UPDATE_INTERVAL = 10000;

//Main color clicking function
function clickColors() {
  //First create an event
  var click_ev = document.createEvent("MouseEvents");
  // initialize the event
  click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
  //Get arrays of nodes
  var colorboxes = document.getElementById("box").childNodes;
  for (var i = 0; i < colorboxes.length; i++){
    //trigger the evevnt
    colorboxes[i].dispatchEvent(click_ev);
  }
}

///////////////
//MAIN SCRIPT//
///////////////
//Initial run of the script
clickColors();
//Attempt to remove more information on UPDATE_INTERVAL
setInterval(clickColors, UPDATE_INTERVAL);
