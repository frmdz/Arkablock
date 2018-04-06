document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

var rPressed = false;
var lPressed = false;

function kup (e) {
  if (e.keyCode == 39) rPressed = false;
  if (e.keyCode == 37) lPressed = false;
}

function kdown (e) {
  if (e.keyCode == 39) rPressed = true;
  if (e.keyCode == 37) lPressed = true;
}
