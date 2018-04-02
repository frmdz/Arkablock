
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

const width=canvas.width;
const height=canvas.height;

var posx = canvas.width/2;
var posy = canvas.height/2;

var xacel = 1.3;
var yacel = -0.7;

function Pelota(x,y,tam) {
  this.x = x;
  this.y = y;
  this.tam = tam;
  this.dibujar = function() {
    context.fillStyle = "white";
    context.fillRect(x-tam/2,y-tam/2,tam,tam);
    x += xacel;
    y += yacel;
    if(y-5<=0) yacel = -yacel;
    if(x-5>=width-5 || x-5<=0) xacel = -xacel;
    if(y-5>=height-5){
      x=posx;
      y=posy;
    }
  }
}

function refrescar(){
  context.clearRect(0,0,width,height);
  pelo.dibujar();

}

var pelo = new Pelota(posx,posy,10);

setInterval(refrescar,10);
