// Make the slider icon element draggable:

var button = document.getElementById("mySliderIcon");

//function dragElement(elmnt) {
  //var pos1 = 0, pos2 = 0;
  //grab the element you are trying to move:
  //if (document.getElementById("mySliderIcon")) {
    //elmnt.onmousedown = dragMouseDown;
  //}
//}

document.getElementById("mySliderIcon").onmousedown = dragMouseDown;

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
    button.style.top = (button.offsetTop - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }



function applySliderConfigs(buttonColor, trackHeight, trackIntervals, defaultButtonPosition) {
  //set slider icon color
  document.getElementById("mySliderIcon").style.backgroundColor = buttonColor;

  //set slider track size
  document.getElementById("slider-track").style.height = trackHeight;
 
  //pass in an array of values to create slider scale
  //CLEAR EXISTING DIVS
  document.getElementById("labels-container").innerHTML = '';
  for (i=0;i<trackIntervals.length;i++) {
    var labelDiv = document.createElement("DIV");
    labelDiv.innerHTML = trackIntervals[i] + "&mdash;";
    document.getElementById("labels-container").appendChild(labelDiv);
  }
  //set default slider position
  document.getElementById("mySliderIcon").style.top = document.getElementById("mySliderIcon").style.top + defaultButtonPosition;
}

function getSliderInput(event){
  const buttonColor = document.getElementById("color-input").value;
  const trackHeight = document.getElementById("track-height-input").value;
  const trackIntervals = document.getElementById("track-intervals-input").value;
  const defaultButtonPosition = document.getElementById("default-position-input").value;

  console.log(buttonColor, trackHeight, trackIntervals, defaultButtonPosition);
  applySliderConfigs(buttonColor, trackHeight, trackIntervals, defaultButtonPosition);
}

document.getElementById('submit-button')
  .addEventListener('click', (e) => {
    e.preventDefault();
    //getSliderInput();
    const buttonColor = document.getElementById("color-input").value;
    const trackHeight = document.getElementById("track-height-input").value;
    const trackIntervals = [];
    for (i=0; i<document.getElementById("track-intervals-input").value.length; i++) {
      trackIntervals.push(document.getElementById("track-intervals-input").value[i]);
      //var labelDiv = document.createElement("DIV");
      //labelDiv.innerHTML = trackIntervals[i] + "&mdash;";
      //document.getElementById("labels-container").appendChild(labelDiv);
    }

    const defaultButtonPosition = document.getElementById("default-position-input").value;

    console.log(buttonColor, trackHeight, trackIntervals, defaultButtonPosition);
    applySliderConfigs(buttonColor, trackHeight, trackIntervals, defaultButtonPosition);
  });

