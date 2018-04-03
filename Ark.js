
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

const width=canvas.width;
const height=canvas.height;

var posx = canvas.width/2;
var posy = canvas.height/2;

var rPressed = false;
var lPressed = false;

var GameOver = false;

function iniciar (){
  setInterval(refrescar,10);
}

function refrescar(){
  if (GameOver == false) {
    context.clearRect(0,0,width,height);
    pelo.dibujar();
    pelo.mover();
    raqu.mover();
    raqu.dibujar();
  }
}

document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

var pelo = new Pelota(posx,posy,10,2.0,-1.0);
var raqu  = new Raqueta(posx,height-25,96,15);


iniciar();
