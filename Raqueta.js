class Raqueta {
  constructor(x, y, xtam, ytam) {
    this.x = x;
    this.y = y;
    this.xtam = xtam;
    this.ytam = ytam;
  }

  dibujar() {
    context.fillStyle = "white";
    context.fillRect(this.x-this.xtam/2, this.y-this.ytam/2, this.xtam/4, this.ytam);
    context.fillStyle = "#bdbdbd";
    context.fillRect(this.x-this.xtam/4, this.y-this.ytam/2, this.xtam/2, this.ytam);
    context.fillStyle = "white";
    context.fillRect(this.x+this.xtam/4, this.y-this.ytam/2, this.xtam/4, this.ytam);
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
