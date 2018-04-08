document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

let rPressed = false;
let lPressed = false;

function kup (e) {
  if (e.keyCode == 39) rPressed = false;
  if (e.keyCode == 37) lPressed = false;
}

function kdown (e) {
  if (e.keyCode == 39) rPressed = true;
  if (e.keyCode == 37) lPressed = true;
  if (e.keyCode == 32 && GameOver == true){
      GameOver = false;
      vidas = 3;
  }else if (e.keyCode == 32 && GameOver == false && bolas == 0) {
    bolas = 1;
  }
}
