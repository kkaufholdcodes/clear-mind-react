// Make the slider icon element draggable:
var button = document.getElementById("mySliderIcon");

document.getElementById("mySliderIcon").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos2 = e.clientY;
    console.log(pos2);
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
    console.log(pos1, pos2);
    if (pos2 < 90) {
      button.style.top = "90px";
    } else if (pos2 >= yConstraint) {
      button.style.top = yConstraint + "px";
    } else {
      //button.style.top = (button.offsetTop - pos1) + "px";
      button.style.top = pos2 + "px";
    } 
    console.log(yConstraint);
  }
  //set default maximum along y-axis
  let yConstraint = 191;

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

//handle submit ---> allow user to set slider configurations
document.getElementById('submit-button')
  .addEventListener('click', (e) => {
    e.preventDefault();

    //define a function to apply slider configs
    function applySliderConfigs(buttonColor, trackHeight, trackIntervals, defaultButtonPosition) {
      //set slider icon color
      document.getElementById("mySliderIcon").style.backgroundColor = buttonColor;
    
      //set slider track size
      document.getElementById("slider-track").style.height = trackHeight + "px";
      document.getElementById("labels-container").style.height = trackHeight + "px";
      yConstraint = document.getElementById("track-height-input").value;
     
      
      //CLEAR EXISTING DIVS
      //pass in values to create slider scale
      document.getElementById("labels-container").innerHTML = '';
      for (i=0;i<trackIntervals.length;i++) {
        var labelDiv = document.createElement("DIV");
        labelDiv.innerHTML = trackIntervals[i] + "&mdash;";
        document.getElementById("labels-container").appendChild(labelDiv);
      }
      //set default slider position
      document.getElementById("mySliderIcon").style.top = document.getElementById("mySliderIcon").style.top + defaultButtonPosition + "px";
    }

    //get user input for configs
    const buttonColor = document.getElementById("color-input").value;

    const trackIntervals = [];
    for (i=0; i<document.getElementById("track-intervals-input").value.length; i++) {
      trackIntervals.push(document.getElementById("track-intervals-input").value[i]);
    }

    const trackHeight = document.getElementById("track-height-input").value;

    const defaultButtonPosition = document.getElementById("default-position-input").value;

    console.log(buttonColor, trackHeight, trackIntervals, defaultButtonPosition);

    //apply configs
    applySliderConfigs(buttonColor, trackHeight, trackIntervals, defaultButtonPosition);
  });

//current bugs:


//3.   slider button does not slide throughout entire track height

//5. not able to pass multididgit labels to intervals-writer
//   can we work on passing in an actual array?
