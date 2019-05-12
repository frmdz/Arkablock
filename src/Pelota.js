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
    this.accel_x_recto = Math.abs(this.accel_x) - 2;
    this.accel_y_recto = Math.abs(this.accel_y) + 2;
    this.accel_x_agudo = Math.abs(this.accel_x);
    this.accel_y_agudo = Math.abs(this.accel_y);
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
      this.y = raque_1.y - raque_1.ytam - this.radio;
      this.x = raque_1.x;
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
  //TODO: Re-implement this mess.
  colicionBloque() {
    if (this.y - 20 < 50 + (19 * FILAS)) {
      for (let i = 0; i < FILAS; i++) {
        for (let j = 0; j < 13; j++) {
          if (NIVEL[i][j] > 0) {
            //// (2+(46*j), 50+(19*i), 44, 17)
            if (this.y - this.radio <= (50 + (19 * i)) + 17 && this.y - this.radio >= 50 + (19 * i)) {
              if (this.x + this.radio / 2 >= (2 + (46 * j)) && this.x - this.radio / 2 <= (2 + (46 * j)) + 44) {
                this.y = ((50 + (19 * i)) + 16) + 1 + this.radio;
                this.accel_y = -this.accel_y;
                NIVEL[i][j] -= 1;
              }
            } //arriba
            if (this.y + this.radio <= (50 + (19 * i)) + 17 && this.y + this.radio >= 50 + (19 * i)) {
              if (this.x + this.radio / 2 >= (2 + (46 * j)) && this.x - this.radio / 2 <= (2 + (46 * j)) + 44) {
                this.y = (50 + (19 * i)) - 1 - this.radio;
                this.accel_y = -this.accel_y;
                NIVEL[i][j] -= 1;
              }
            } //abajo
            if (this.x + this.radio >= 2 + (46 * j) && this.x + this.radio <= (2 + (46 * j)) + 44) {
              if (this.y + this.radio / 2 >= 50 + (19 * i) && this.y - this.radio / 2 <= 50 + (19 * i) + 17) {
                this.accel_x = -this.accel_x;
                this.x = (2 + (46 * j)) - 1 - this.radio;
                NIVEL[i][j] -= 1;
              }
            } //izq
            if (this.x - this.radio >= 2 + (46 * j) && this.x - this.radio <= (2 + (46 * j)) + 44) {
              if (this.y + this.radio / 2 >= 50 + (19 * i) && this.y - this.radio / 2 <= 50 + (19 * i) + 17) {
                this.accel_x = -this.accel_x;
                this.x = (2 + (46 * j)) + 43 + this.radio;
                NIVEL[i][j] -= 1;
              }
            } //der
          }
        }
      }
    }
  }
  //TODO: Re-implement this mess.
  golpeAngulo(raque_1) {
    if (this.y + this.radio >= raque_1.y - raque_1.ytam / 2 && this.y + this.radio <= raque_1.y + raque_1.ytam / 2) {
      if (this.x <= raque_1.x && this.x + this.radio >= raque_1.x - raque_1.xtam / 2) {
        if (this.x > raque_1.x - raque_1.xtam / 4) {
          //2
          this.accel_y = -this.accel_y_recto;
          this.accel_x = -this.accel_x_recto;
          this.y = raque_1.y - raque_1.ytam;
        }
        else {
          //1
          this.accel_y = -this.accel_y_agudo;
          this.accel_x = -this.accel_x_agudo;
          this.y = raque_1.y - raque_1.ytam;
        }
      }
      else if (this.x >= raque_1.x && this.x - this.radio <= raque_1.x + raque_1.xtam / 2) {
        if (this.x < raque_1.x + raque_1.xtam / 4) {
          //3
          this.accel_y = -this.accel_y_recto;
          this.accel_x = +this.accel_x_recto;
          this.y = raque_1.y - raque_1.ytam;
        }
        else {
          //4
          this.accel_y = -this.accel_y_agudo;
          this.accel_x = +this.accel_x_agudo;
          this.y = raque_1.y - raque_1.ytam;
        }
      }
    }
  }
}
