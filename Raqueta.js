function Raqueta (x,y,xtam,ytam){
  this.x = x;
  this.y = y
  this.xtam = xtam;
  this.ytam = ytam;

  this.dibujar = function() {
      context.fillStyle = "white";
      context.fillRect(x-xtam/2,y-ytam/2,xtam,ytam);
  }

  this.mover = function () {
    if (rPressed == true && x+xtam/2 < width-5) x += 4;
    if (lPressed == true && x-xtam/2 >= 5)x -= 4;
  }

}
