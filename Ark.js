var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var GameOver = false;

function refrescar(){
  if (GameOver == false) {
    context.clearRect(0,0,canvas.width,canvas.height);
    raque_1.mover();
    raque_1.dibujar();
    pelo_1.dibujar();
    pelo_1.mover();
    requestAnimationFrame(refrescar);
  }
}

var pelo_1 = new Pelota(canvas.width/2, canvas.height/2, 10, 6, -6, );
var raque_1 = new Raqueta(canvas.width/2, canvas.height-25, 96, 14, false, false, 37 ,39);

refrescar();
