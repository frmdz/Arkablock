import Pad from './Pad.js';
import Ball from './Ball.js';
import {n_rows, draw_blocks, set_level, level_sum, blocks} from './levels.js';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

let gameover = false;
let change_level = false;
let total_lifes = 10;
let current_level = 1;
let current_lifes = current_level*total_lifes;

const ball = new Ball(canvas.width/2, canvas.height-50, 10, 5, 8, false);
const pad = new Pad(canvas.width/2 - 40, canvas.height-32, 80, 14);

function draw_score(level, lifes) {
  context.font = "20px Arial";
  context.fillText("Level: " + level, 5, 20);
  context.fillText("Lifes: " + lifes, 100, 20);
}

function draw_screen(s, s2) {
  context.font = "60px Arial";
  context.fillText(s, canvas.width/2 - 170, canvas.height/2 - 100);
  context.font = "30px Arial";
  context.fillText(s2, canvas.width/2 - 170, canvas.height/2 - 20);
}

function clear_screen() {
  context.clearRect(0,0,canvas.width,canvas.height);
}

function kup (e) {
  //right
  if (e.keyCode == 39) {
    pad.rkey = false;
  }
  //left
  if (e.keyCode == 37) {
    pad.lkey = false;
  }
}

function kdown (e) {
  //right
  if (e.keyCode == 39) {
    pad.rkey = true;
  }
  //left
  if (e.keyCode == 37) {
    pad.lkey = true;
  }
  //spacebar
  if (e.keyCode == 32 && (gameover || change_level)){
    gameover = false;
    change_level = false;
    lifes = current_level*total_lifes + lifes
    pad.x = canvas.width/2 - pad.width;
    ball.state = false;
    ball.n_destroyed_blocks = 0
    set_level(current_level);
  } else if (e.keyCode == 32 && !gameover) {
    ball.state = true;
  }
}


function main() {
  clear_screen()
  if (gameover) {
    draw_screen("Game Over :(", "Press Space to Restart!")
  } else if (change_level) {
    draw_screen("New Level!", "Press Space to Continue!")
  } else {
    draw_score(current_level, current_lifes);
    draw_blocks();
    pad.draw();
    ball.draw();
    pad.move();
    ball.move(pad);
    ball.angle_hit(pad);
    ball.block_collision(blocks, n_rows);

    if (ball.detect_fall()) {
      current_lifes--;
      ball.state = false;
      gameover = (current_lifes <= 0);
    }

    if (level_sum == ball.n_destroyed_blocks) {
      set_level(++current_level);
      change_level = true;
    }
  }
  requestAnimationFrame(main);
} 

set_level(current_level);
main();