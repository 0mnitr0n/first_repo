function allowDrop(ev) {
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

  console.log(data);
  console.log(ev.target);
  console.log(animations);
}

window.onload = function() {
  var gridContainer = document.querySelector('.grid-container');
  gridContainer.innerWidth = screen.availWidth;
  var numColumns = Math.floor(gridContainer.innerWidth / 100);
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
  
  var numRows = Math.floor(gridContainer.innerHeight / 100);
   gridContainer.style.gridTemplateRows = `repeat(${numRows}, 100px)`;
}

window.onresize = function(){
  var gridContainer = document.querySelector('.grid-container');
  gridContainer.innerWidth = screen.availWidth;
  var numColumns = Math.floor(gridContainer.innerWidth / 100);  
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

  /*var numRows = Math.floor(gridContainer.innerHeight / 100);*/
  /*gridContainer.style.gridTemplateRows = `repeat(${numRows}, 100px)`;*/
}