//TODO: Translate Variables.

import Raqueta from './Raqueta.js';
import Pelota from './Pelota.js';
import {dibujarBloques, setLvl} from './niveles.js';

export let canvas = document.getElementById("canvas");
export let context = canvas.getContext("2d");

document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

let GAMEOVER = false;
let NIVEL = 1;
let VIDAS = 3;

let pelota = new Pelota(canvas.width/2,canvas.height-50, 10, 5, 8, true, VIDAS);
let raqueta = new Raqueta(canvas.width/2 - 40, canvas.height-32, 80, 14);

function kup (e) {
  //right
  if (e.keyCode == 39) {
    raqueta.rkey = false;
  }
  //left
  if (e.keyCode == 37) {
    raqueta.lkey = false;
  }
}

function kdown (e) {
  //right
  if (e.keyCode == 39) {
    raqueta.rkey = true;
  }
  //left
  if (e.keyCode == 37) {
    raqueta.lkey = true;
  }
  //spacebar
  if (e.keyCode == 32 && GAMEOVER){
    GAMEOVER = false;
    pelota.gameover = VIDAS;
    setLvl(NIVEL);
  } else if (e.keyCode == 32 && !GAMEOVER) {
    pelota.caida = false;
  }
}

function main() {
  if (!GAMEOVER) {
    context.clearRect(0,0,canvas.width,canvas.height);
    dibujarBloques();
    raqueta.mover();
    raqueta.dibujar();
    pelota.dibujar();
    pelota.mover(raqueta);
    pelota.golpeAngulo(raqueta);
    pelota.colicionBloque();
    GAMEOVER = pelota.detectarCaida(); 
  } else {
    //TODO: Add a Gameover screen.
    context.clearRect(0,0,canvas.width,canvas.height);
    raqueta.x = canvas.width/2;
  }
  requestAnimationFrame(main);
} 

setLvl(NIVEL);
main();