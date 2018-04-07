let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let gameover_pic = new Image();
gameover_pic.src = 'res/Game_over.png';

let GameOver = false;
let vidas = 3;

let nivel = nivel_1;
let num = 9;
let num_pelotas = 1;

function refrescar(){
  if (GameOver == false) {
    context.clearRect(0,0,canvas.width,canvas.height);
    dibujarBloques();
    raque_1.mover();
    raque_1.dibujar();
    pelo_1.dibujar();
    pelo_1.mover();
    pelo_1.golpeAngulo();
    pelo_1.colicionBloque();
    requestAnimationFrame(refrescar);
  } else{
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(gameover_pic, 180, 250);
  }
}

let pelo_1 = new Pelota(canvas.width/2, canvas.height-50, 10, 5, -8 );
let raque_1 = new Raqueta(canvas.width/2, canvas.height-25,80, 14);

refrescar();
