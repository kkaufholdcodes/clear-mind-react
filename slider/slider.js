import React from 'react';

// Make the slider icon element draggable:
dragElement(document.getElementById("mySliderIcon"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0;
  //grab the element you are trying to move:
  if (document.getElementById(elmnt.id)) {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos2 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos2 - e.clientY;
    pos2 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function applySliderConfigs(buttonColor, trackHeight, trackIntervals, defaultButtonPosition) {
  //set slider icon color
  document.getElementById("mySliderIcon").style.backgroundColor = buttonColor;

  //set slider track size
  document.getElementById("slider-track").style.height = trackHeight;
 
  //pass in an array of values to create slider scale
  for (i=0;i<trackIntervals.length;i++) {
    var labelDiv = document.createElement("DIV");
    labelDiv.innerHTML = trackIntervals[i] + "&mdash;";
    document.getElementById("labels-container").appendChild(labelDiv);
  }
  //set default slider position
  document.getElementById("mySliderIcon").style.top = document.getElementById("mySliderIcon").style.top + defaultButtonPosition;
}

//applySliderConfigs("coral", "200px", [1,2,3], "159px");

//branch name: slider-component-js-part-2
//other requirements:
//constrain slider along y axis
//change layout to be responsive (up to your interpretation (user passes in value or based on viewport size))
//pass in default slider position (middle, top, bottom)


function getSliderInput(){
  const buttonColor = document.getElementById("color-input").value;
  const trackHeight = document.getElementById("track-height-input").value;
  const trackIntervals = document.getElementById("track-intervals-input").value;
  const defaultButtonPosition = document.getElementById("default-position-input").value;

  console.log(buttonColor, trackHeight, trackIntervals, defaultButtonPosition);
  applySliderConfigs(buttonColor, trackHeight, trackIntervals, defaultButtonPosition);
  
}

