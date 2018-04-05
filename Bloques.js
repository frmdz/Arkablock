class Bloques {
  constructor() {
    this.xtam = 50;
    this.ytam = 14;
    this.fil = 5;
    this.col = 5;
    this.esp = canvas.width%45;
  }

  dibujar() {
    for (let i=0; i<9; i++) {
      for (let j=0; j<13; j++) {
        if (nivel_1[i][j] > 0) {
          context.fillStyle = "white";
          context.fillRect(10+(45*j), 10+(19*i), 40, 14);
        }
      }
    }
  }
}
