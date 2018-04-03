function kup (e) {
  if(e.keyCode == 39) rPressed = false;
  else if(e.keyCode == 37) lPressed = false;

}

function kdown (e) {
  if(e.keyCode == 39) rPressed = true;
  if(e.keyCode == 37) lPressed = true;
}
