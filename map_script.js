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
  var numColumns = Math.floor(window.innerWidth / 150);
  /*var numRows = Math.floor(window.innerHeight / 150);*/
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
  /*gridContainer.style.gridTemplateRows = `repeat(${numRows}, 150px)`;*/
}

window.onresize = function(){
  var gridContainer = document.querySelector('.grid-container');
  var numColumns = Math.floor(window.innerWidth / 150);
  /*var numRows = Math.floor(window.innerHeight / 150);*/
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
  /*gridContainer.style.gridTemplateRows = `repeat(${numRows}, 150px)`;*/
}