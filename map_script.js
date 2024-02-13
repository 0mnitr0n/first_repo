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
  console.log(data);
  console.log(ev.target);
}

window.onload = function() {
  var gridContainer = document.querySelector('.grid-container');
  gridContainer.innerWidth = window.innerWidth;
  var numColumns = Math.floor(gridContainer.innerWidth / 100);
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
  
  var numRows = Math.floor(gridContainer.innerHeight / 100);
  gridContainer.style.gridTemplateRows = `repeat(${numRows}, 100px)`;
}

window.onresize = function(){
  var gridContainer = document.querySelector('.grid-container');
  gridContainer.innerWidth = window.innerWidth;
  var numColumns = Math.floor(gridContainer.innerWidth / 100);  
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

  /*var numRows = Math.floor(gridContainer.innerHeight / 100);*/
  /*gridContainer.style.gridTemplateRows = `repeat(${numRows}, 100px)`;*/
}