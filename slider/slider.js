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


function applySliderConfigs(color, size, scale, defaultPosition) {
  document.getElementById("mySliderIcon").style.backgroundColor = color;
  //set size
  //set scale
  //set default slider position
}

applySliderConfigs("coral");

//branch name: slider-component-js-part-2
//other requirements:
//constrain slider along y axis
//change layout to be responsive (up to your interpretation (user passes in value or based on viewport size))
//pass in default slider position (middle, top, bottom)

function writeSliderRange(sliderRangeArr) {
  //user passes in values
  //iterate through the values
  for (i=0;i<sliderRangeArr.length;i++) {
    var labelDiv = document.createElement("DIV");
    labelDiv.innerHTML = sliderRangeArr[i] + "&mdash;";
    document.getElementById("labels-container").appendChild(labelDiv);
  }
  //store range in a variable
  //loop through array
  //create a div for each value of the array
  //append those divs to the DOM inside the container
}

writeSliderRange([0, 10, 20, 30, 40, 50]);




