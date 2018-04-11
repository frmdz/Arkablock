let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let gameover_pic = new Image();
gameover_pic.src = 'res/Game_over.png';

let GameOver = false;
let vidas = 3;
let bolas = 0;
let golpes = 0;

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
    pelo_1.detectarCaida();
  } else{
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(gameover_pic, 0, 0);
    raque_1.x = canvas.width/2;
    vidas = 3;
    setNivel(1);

  }
  requestAnimationFrame(refrescar);
}

let pelo_1 = new Pelota(canvas.width/2,canvas.height-50, 10, 5, -8, true);
// let pelo_2 = new Pelota(canvas.width/2, canvas.height+700, 16,0,  0, false);
// let pelo_3 = new Pelota(canvas.width/2, canvas.height+700, 16,0,  0, false);
let raque_1 = new Raqueta(canvas.width/2, canvas.height-25,80, 14);

setNivel(1);
refrescar();
