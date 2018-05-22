let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

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
      if (rPressed && this.x+this.xtam/2 < canvas.width-10) {
        this.x += 10;
      }
      if (lPressed && this.x-this.xtam/2 >= 10) {
        this.x -= 10;
      }
  }
}

class Pelota {
  constructor(x, y, tam, accel_x, accel_y,caida) {
    this.caida = caida;
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.accel_x = accel_x;
    this.accel_y = accel_y;
    this.accel_x_recto = Math.abs(this.accel_x)-2;
    this.accel_y_recto = Math.abs(this.accel_y)+2;
    this.accel_x_agudo = Math.abs(this.accel_x);
    this.accel_y_agudo = Math.abs(this.accel_y);
    this.radio = this.tam/2;
  }

  dibujar() {
    context.fillStyle = "white";
    context.fillRect(this.x-this.tam/2, this.y-this.tam/2, this.tam, this.tam);
  }

  mover() {
    if (bolas > 0 ) {
      if (this.x+this.radio >= canvas.width || this.x-this.radio <= 0) {
        this.accel_x = -this.accel_x;
      }
      if (this.y-this.radio <= 0) {
        this.accel_y = -this.accel_y;
      }
      this.x += this.accel_x;
      this.y += this.accel_y;

    } else if (this.caida) {
      this.y = raque_1.y-raque_1.ytam-this.radio;
      this.x = raque_1.x;
      this.accel_x = Math.abs(this.accel_x);
      this.accel_y = -this.accel_y;
    }
  }

  detectarCaida() {
    if (this.y-this.radio > canvas.height+200 && this.y <= canvas.height+500  ) {
      bolas -= 1;
      golpes = 0;
      if (bolas == 0) {
        this.caida = true;
        vidas -= 1
        if (vidas <= 0) {
          GameOver = true;
        }
      }
    }
  }

  colicionBloque() { //note: debug this!
    if (this.y-20 < 50+(19*num)) {
      for (let i=0; i<num; i++) {
        for (let j=0; j<13; j++) {
          if (nivel[i][j] > 0) {
            //// (2+(46*j), 50+(19*i), 44, 17)
          if (this.y-this.radio <= (50+(19*i))+17 && this.y-this.radio >= 50+(19*i)) {
            if (this.x+this.radio/2 >= (2+(46*j)) && this.x-this.radio/2 <= (2+(46*j))+44 ) {
              this.y = ((50+(19*i))+16)+1+this.radio;
              this.accel_y = -this.accel_y;
              nivel[i][j] -= 1;
            }
          }//arriba

          if (this.y+this.radio <= (50+(19*i))+17 && this.y+this.radio >= 50+(19*i)) {
            if (this.x+this.radio/2 >= (2+(46*j)) && this.x-this.radio/2 <= (2+(46*j))+44 ) {
              this.y = (50+(19*i))-1-this.radio;
              this.accel_y = -this.accel_y;
              nivel[i][j] -= 1;
            }
          }//abajo

          if (this.x+this.radio >= 2+(46*j) && this.x+this.radio <= (2+(46*j))+44 ) {
            if (this.y+this.radio/2>= 50+(19*i) && this.y-this.radio/2 <= 50+(19*i)+17 ) {
              this.accel_x = -this.accel_x;
              this.x =  (2+(46*j))-1-this.radio;
              nivel[i][j] -= 1;
            }
          }//izq

          if (this.x-this.radio >= 2+(46*j) && this.x-this.radio <= (2+(46*j))+44 ) {
            if (this.y+this.radio/2>= 50+(19*i) && this.y-this.radio/2<= 50+(19*i)+17 ) {
              this.accel_x = -this.accel_x;
              this.x =  (2+(46*j))+43+this.radio;
              nivel[i][j] -= 1;
            }
          }//der

          }
        }
      }
    }
  }

  golpeAngulo() {
    if (this.y+this.radio >= raque_1.y-raque_1.ytam/2 && this.y+this.radio <= raque_1.y+raque_1.ytam/2) {
       if (this.x <= raque_1.x && this.x+this.radio >= raque_1.x-raque_1.xtam/2) {
         if (this.x > raque_1.x-raque_1.xtam/4) {
          //2
          this.accel_y = -this.accel_y_recto;
          this.accel_x = -this.accel_x_recto;
          this.y = raque_1.y-raque_1.ytam;
          golpes += 1;
        }else{
          //1
          this.accel_y = -this.accel_y_agudo;
          this.accel_x = -this.accel_x_agudo;
          this.y = raque_1.y-raque_1.ytam;
          golpes += 1;
        }
      }else if (this.x >= raque_1.x && this.x-this.radio <= raque_1.x+raque_1.xtam/2) {
        if (this.x < raque_1.x+raque_1.xtam/4) {
          //3
          this.accel_y = -this.accel_y_recto;
          this.accel_x = +this.accel_x_recto;
          this.y = raque_1.y-raque_1.ytam;
          golpes += 1;
        }else{
          //4
          this.accel_y = -this.accel_y_agudo;
          this.accel_x = +this.accel_x_agudo;
          this.y = raque_1.y-raque_1.ytam;
          golpes += 1;
        }
      }
    }
  }
}

function refrescar(){
  if (GameOver == false) {
    context.clearRect(0,0,canvas.width,canvas.height);
    dibujarBloques();
    raque_1.mover();
    raque_1.dibujar();
    pelo_1.dibujar();
    pelo_1.mover();
    pelo_1.golpeAngulo();
    pelo_1.colicionBloque();
    pelo_1.detectarCaida();
  } else {
    context.clearRect(0,0,canvas.width,canvas.height);
    raque_1.x = canvas.width/2;
    vidas = 3;
    setNivel(1);
  }
  requestAnimationFrame(refrescar);
}

let pelo_1 = new Pelota(canvas.width/2,canvas.height-50, 10, 5, -8, true);
let raque_1 = new Raqueta(canvas.width/2, canvas.height-25,80, 14);

let GameOver = false;
let vidas = 3;
let bolas = 0;
let golpes = 0;

setNivel(1);
refrescar();
