class Pelota {
  constructor(x, y, tam, accel_x, accel_y) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.accel_x = accel_x;
    this.accel_y = accel_y;
    this.radio = this.tam/2;
  }

  colicionBloque(){
  if (this.y-20 < 50+(19*num)) {
      for (let i=0; i<num; i++) {
        for (let j=0; j<13; j++) {
          if (nivel[i][j] > 0) {
            //10+(45*j)  10+(19*i) 40 14

            if (this.y-this.radio <= (50+(19*i))+16 && this.y-this.radio >= 50+(19*i)) {
              if (this.x+this.radio/2 >= (10+(45*j)) && this.x-this.radio/2 <= (10+(45*j))+42 ) {
                this.y = ((50+(19*i))+16)+1+this.radio;
                this.accel_y = -this.accel_y;
                nivel[i][j] -= 1;;
              }
            }//arriba
            if (this.y+this.radio <= (50+(19*i))+16 && this.y+this.radio >= 50+(19*i)) {
              if (this.x+this.radio/2 >= (10+(45*j)) && this.x-this.radio/2 <= (10+(45*j))+42 ) {
                this.y = (50+(19*i))-1-this.radio;
                this.accel_y = -this.accel_y;
                nivel[i][j] -= 1;
              }
            }//abajo



             if (this.x+this.radio >= 10+(45*j) && this.x+this.radio <= (10+(45*j))+42 ) {
              if (this.y+this.radio/2>= 50+(19*i) && this.y-this.radio/2 <= 50+(19*i)+16 ) {
                this.accel_x = -this.accel_x;
                this.x =  (10+(45*j))-1-this.radio;
                nivel[i][j] -= 1;
              }
            }//izq


             if (this.x-this.radio >= 10+(45*j) && this.x-this.radio <= (10+(45*j))+42 ) {
              if (this.y+this.radio/2>= 50+(19*i) && this.y-this.radio/2<= 50+(19*i)+16 ) {
                this.accel_x = -this.accel_x;
                this.x =  (10+(45*j))+43+this.radio;
                nivel[i][j] -= 1;
              }
            }//der

          }
        }
      }
    }
  }

  golpeAngulo() {
    if (this.y+this.radio >= raque_1.y-raque_1.ytam/2 && this.y+this.radio <=raque_1.y+raque_1.ytam) {
      if (this.x+this.radio >= raque_1.x-raque_1.xtam/2 && this.x-this.radio <= raque_1.x+raque_1.xtam/2) {
        this.accel_y = -this.accel_y;
        this.y = raque_1.y-raque_1.ytam;
      }
    }
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
      if (this.y-this.radio >= canvas.height) {
        this.y = canvas.height/2;
        // vidas -= 1;
        // if (vidas <= 0) GameOver = true;
      }
      this.x += this.accel_x;
      this.y += this.accel_y;
  }
}
