class Pelota {
  constructor(x, y, tam, accel_x, accel_y) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.accel_x = accel_x;
    this.accel_y = accel_y;
    this.radio = this.tam/2;
  }
  dibujar() {
    context.fillStyle = "white";
    context.fillRect(this.x-this.tam/2, this.y-this.tam/2, this.tam, this.tam);
  }
  mover() {
      if (this.x+this.radio >= canvas.width || this.x-this.radio <= 0) {
        this.accel_x = -this.accel_x;
      }
      if (this.y-this.radio <= 0) {
        this.accel_y = -this.accel_y;
      }

      if (this.y+this.radio >= raque_1.y-raque_1.ytam/2 && this.y+this.radio <=raque_1.y-3 ) {
        if (this.x+this.radio >= raque_1.x-raque_1.xtam/2 && this.x-this.radio <= raque_1.x+raque_1.xtam/2) {
          this.accel_y = -this.accel_y;
        }
      }
      if (this.y-this.radio >= canvas.height) {
          this.y = canvas.height/2;
      }

      this.x += this.accel_x;
      this.y += this.accel_y;
  }
}
