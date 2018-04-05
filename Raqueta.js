class Raqueta {
  constructor(x, y, xtam, ytam, izq, der) {
    this.x = x;
    this.y = y;
    this.xtam = xtam;
    this.ytam = ytam;
    this.izq = izq;
    this.der = der;
  }

  dibujar() {
    context.fillStyle = "white";
    context.fillRect(this.x-this.xtam/2, this.y-this.ytam/2, this.xtam, this.ytam);
  }

  mover() {
    if (rPressed == true && this.x+this.xtam/2 < canvas.width-10) {
      this.x += 10;
    }
    if (lPressed == true && this.x-this.xtam/2 >= 10) {
      this.x -= 10;
    }
  }
}
