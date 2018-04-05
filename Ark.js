var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var gameover_pic = new Image();
gameover_pic.src = 'res/Game_over.png';

var GameOver = false;
var vidas = 3;

function refrescar(){
  if (GameOver == false) {
    context.clearRect(0,0,canvas.width,canvas.height);
    bloqs.dibujar();
    raque_1.mover();
    raque_1.dibujar();
    pelo_1.dibujar();
    pelo_1.mover();
    pelo_1.golpeAngulo();
    bloqs.dibujar();
    requestAnimationFrame(refrescar);
  } else{
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(gameover_pic, 180, 250);
  }
}

var pelo_1 = new Pelota(canvas.width/2, canvas.height/2, 10, 6, -6 );
var raque_1 = new Raqueta(canvas.width/2, canvas.height-25, 96, 14, 37 ,39);
var bloqs = new Bloques();

refrescar();
