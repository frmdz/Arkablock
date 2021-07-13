const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

export default 
class Pad {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.lkey = false;
    this.rkey = false;
  }

  draw() {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.width/4, this.height);
    context.fillStyle = "#bdbdbd";
    context.fillRect(this.x + this.width/4, this.y, this.width/2, this.height);
    context.fillStyle = "white";
    context.fillRect(this.x + this.width/4 + this.width/2, this.y, this.width/4, this.height);
  }

  move() {
    if (this.rkey && !this.lkey && this.x + this.width <= canvas.width - 10) {
      this.x += 10;
    }else if (this.lkey && !this.rkey && this.x >= 10) {
      this.x -= 10;
    }
  }
}
