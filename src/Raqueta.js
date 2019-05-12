let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

export default 
class Raqueta {
  constructor(x, y, xtam, ytam) {
    this.x = x;
    this.y = y;
    this.xtam = xtam;
    this.ytam = ytam;
    this.lkey = false;
    this.rkey = false;
  }
  dibujar() {
    context.fillStyle = "white";
    context.fillRect(this.x - this.xtam / 2, this.y - this.ytam / 2, this.xtam / 4, this.ytam);
    context.fillStyle = "#bdbdbd";
    context.fillRect(this.x - this.xtam / 4, this.y - this.ytam / 2, this.xtam / 2, this.ytam);
    context.fillStyle = "white";
    context.fillRect(this.x + this.xtam / 4, this.y - this.ytam / 2, this.xtam / 4, this.ytam);
  }
  mover() {
    if (this.rkey && this.x + this.xtam / 2 < canvas.width - 10) {
      this.x += 10;
    }else if (this.lkey && this.x - this.xtam / 2 >= 10) {
      this.x -= 10;
    }
  }
}
