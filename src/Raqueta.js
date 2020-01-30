let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

export default 
class Raqueta {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.lkey = false;
    this.rkey = false;
  }
  dibujar() {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.width/4, this.height);
    context.fillStyle = "#bdbdbd";
    context.fillRect(this.x + this.width/4, this.y, this.width/2, this.height);
    context.fillStyle = "white";
    context.fillRect(this.x + this.width/4 + this.width/2, this.y, this.width/4, this.height);
  }
  mover() {
    if (this.rkey && this.x + this.width < canvas.width - 10) {
      this.x += 10;
    }else if (this.lkey && this.x >= 10) {
      this.x -= 10;
    }
  }
}
