class Raqueta {
  constructor(x, y, xtam, ytam, rPressed, lPressed, izq, der) {
    this.x = x;
    this.y = y;
    this.xtam = xtam;
    this.ytam = ytam;
    this.rPressed = rPressed;
    this.lPressed = lPressed;
    this.izq = izq;
    this.der = der;
  }

  dibujar() {
    context.fillStyle = "white";
    context.fillRect(this.x-this.xtam/2, this.y-this.ytam/2, this.xtam, this.ytam);
  }

  mover() {
    if (rPressed == true && this.x+this.xtam/2 < canvas.width-5) this.x += 10;
    if (lPressed == true && this.x-this.xtam/2 >= 5) this.x -= 10;
  }
}
