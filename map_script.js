/*
  This function allows the user to drag and drop the images from one grid to another in the screen. 
  It also checks if the grid is full or not and cancels the move if it is already full.
*/
function allowDrop(ev) {
  var t = ev.target;

  while (t !== null && !t.classList.contains("grid-item")) {
    t = t.parentNode;
  }
  if (t && t.childNodes.length > 0) {
    return false;
  }

  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  // let animations = document.querySelector(".grid-item").getAnimations();
  //console.log(data);
  //console.log(ev.target);
  //console.log(animations);
}
/* This function is called when the  user double clicks the image and moves it to the top left corner of the screen */
function knocked_out(elm) {
  //alert("The image has been knocked out:" + elm.id);
  var elem = document.getElementById(elm.id);

  elem.style.boxShadow = "1px 1px 30px red";
  document.getElementById(elm.id).src="red_x.png";
  elem.style.opacity = "0.5";
  elem.style.transform = "rotateZ(180deg)";   
}


window.onload = function () {
  var gridContainer = document.querySelector('.grid-container');
  gridContainer.innerWidth = screen.availWidth;

  var numColumns = Math.floor(gridContainer.innerWidth / 100);
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

  var numRows = Math.floor(gridContainer.innerHeight / 100);
  gridContainer.style.gridTemplateRows = `repeat(${numRows}, 100px)`;
}

window.onresize = function () {
  var gridContainer = document.querySelector('.grid-container');
  gridContainer.innerWidth = screen.availWidth;
  var numColumns = Math.floor(gridContainer.innerWidth / 100);
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
}