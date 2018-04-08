let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let gameover_pic = new Image();
gameover_pic.src = 'res/Game_over.png';

var GameOver = false;
var vidas = 3;
let bolas = 1;
let golpes = 0;

let nivel = nivel_1;
let num = 9;

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

    pelo_2.dibujar();
    pelo_2.mover();
    pelo_2.golpeAngulo();
    pelo_2.colicionBloque();
    pelo_2.detectarCaida();

    pelo_3.dibujar();
    pelo_3.mover();
    pelo_3.golpeAngulo();
    pelo_3.colicionBloque();
    pelo_3.detectarCaida();
  } else{
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(gameover_pic, 0, 0);
    raque_1.x = canvas.width/2;
  }
  requestAnimationFrame(refrescar);
}

let pelo_1 = new Pelota(canvas.width/2, canvas.height-50, 10, 5, -8 );
let pelo_2 = new Pelota(canvas.width/2, canvas.height+700, 16,0,  0 );
let pelo_3 = new Pelota(canvas.width/2, canvas.height+700, 16,0  -0 );
let raque_1 = new Raqueta(canvas.width/2, canvas.height-25,80, 14);

refrescar();
