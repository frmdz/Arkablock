import {FILAS, NIVEL} from './niveles.js';
import {canvas, context} from './main.js';

export default 
class Pelota {
  constructor(x, y, tam, accel_x, accel_y, caida,vidas) {
    this.caida = caida;
    this.gameover = vidas;
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.accel_x = accel_x;
    this.accel_y = accel_y;
    this.accelrecto = [-(Math.abs(this.accel_x) - 2), -(Math.abs(this.accel_y) + 2)];
    this.accelagudo = [-Math.abs(this.accel_x), -Math.abs(this.accel_y)];
    this.radio = this.tam / 2;
  }
  dibujar() {
    context.fillStyle = "white";
    context.fillRect(this.x - this.tam / 2, this.y - this.tam / 2, this.tam, this.tam);
  }
  mover(raque_1) {
    if (!this.caida) {
      if (this.x + this.radio >= canvas.width || this.x - this.radio <= 0) {
        this.accel_x = -this.accel_x;
      }
      if (this.y - this.radio <= 0) {
        this.accel_y = -this.accel_y;
      }
      this.x += this.accel_x;
      this.y += this.accel_y;
    }else {
      this.y = raque_1.y - raque_1.height/2 - this.radio;
      this.x = raque_1.x + raque_1.width/2;
      this.accel_x = Math.abs(this.accel_x);
      this.accel_y = -this.accel_y;
    }
  }
  detectarCaida() {
    if (this.y - this.radio > canvas.height + 200 && this.y <= canvas.height + 500) {
      this.caida = true;
      this.gameover--;
    }
    return !this.gameover;  
  }

  colicion(element){
    return (this.x - this.radio < element.x + element.width &&
            this.x + this.radio > element.x &&
            this.y - this.radio < element.y + element.height &&
             this.y + this.radio > element.y)
  }

  colicionBloque() {
    if (this.y < 70 + (19 * FILAS)){
      NIVEL.forEach(row => {
        row.forEach(element => {
          if(this.colicion(element) && element.state > 0){
            this.y -= this.accel_y/2;
            this.x -= this.accel_x/2;
            element.state -= 1;

            let l = Math.abs((this.x+this.tam) - element.x),
                r =Math.abs((this.x-this.tam) - (element.x+element.width)),
                u =Math.abs((this.y+this.tam) - element.y),
                d =Math.abs((this.y-this.tam) - (element.y+element.height));
            if(Math.min(l, r) < Math.min(u, d)){
              this.accel_x = -this.accel_x;
            }else{
              this.accel_y = -this.accel_y;
            }
          }
       });
     });
    }
  }

  golpeAngulo(raque_1) { 
    if (this.colicion(raque_1)) {        
        [this.accel_y, this.accel_y] = (this.x < raque_1.x - raque_1.width / 4 || this.x > raque_1.x + raque_1.width - raque_1.width/4) ?  this.accelagudo : this.accelrecto;
        this.accel_x = (this.x > raque_1.x + raque_1.width/2) ? Math.abs(this.accel_x) : -Math.abs(this.accel_x);
        this.y = raque_1.y-2;
    }
  }
}
