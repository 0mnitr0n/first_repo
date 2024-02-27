
function populateMapContainer(className, sizing) {

  let width = (screen.availWidth / sizing) - 1;
  let height = (screen.availHeight / sizing);

  for (let x = 0; x <= height; x++) {
    for (let i = 0; i < width; i++) {
      document.write(
        '<div id="grid_' + x + '.' + i + '" class="' + className + '" ondrop="drop(event)" ondragover="allowDrop(event) "></div>'
      );
    }
  }
}

function changetofifty() {

  // alert("start width: " + screen.availWidth + " start height: " + screen.availHeight);

  var boardPieces = document.querySelectorAll('.board-pieces');

  boardPieces.forEach( function(element) { 
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.borderRadius = "5px";    
  });

  var gridContainer = document.querySelector('.grid-container');
  gridContainer.innerWidth = screen.availWidth;
  gridContainer.style.background.width = "auto";

  var numColumns = Math.floor(gridContainer.innerWidth / 50);
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

  var gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach( function(element) { 
    element.style.width = "50px";
    element.style.height = "50px"; 
    element.style.borderRadius = "2px";   
  });

  // alert("end width: " + screen.availWidth + " end height: " + screen.availHeight);

}
/** this function will change the size back to 100px */
function changetohundred() {

  var boardPieces = document.querySelectorAll('.board-pieces');

  boardPieces.forEach( function(element) { 
    element.style.width = "100px";
    element.style.height = "100px"; 
    element.style.borderRadius = "25px";   
  });

  var gridContainer = document.querySelector('.grid-container');
  gridContainer.innerWidth = screen.availWidth;
  gridContainer.style.background.width = "auto";


  var numColumns = Math.floor(gridContainer.innerWidth / 100);
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

  // grid items are the divs that the images are dropped into
  var gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach( function(element) { 
    element.style.width = "100px";
    element.style.height = "100px";
    element.style.borderRadius = "10px";    
  });

}

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

/* 
This function is called when the  user double clicks the board piece image. It then turns the drop shadow red, spins the image, and replaces the image w
with a big red "X" to indicate the player is dead
 */
function knocked_out(elm) {
  //alert("The image has been knocked out:" + elm.id);
  var elem = document.getElementById(elm.id);

  elem.style.boxShadow = "1px 1px 30px red";
  document.getElementById(elm.id).src = "red_x.png";
  elem.style.opacity = "0.5";
  elem.style.transform = "rotateY(180deg)";
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

