function Pelota(x,y,tam,xacel,yacel) {
  this.xacel = xacel;
  this.yacel = yacel;
  this.x = x;
  this.y = y;
  this.tam = tam;

  this.dibujar = function() {
    context.fillStyle = "white";
    context.fillRect(x-tam/2, y-tam/2, tam, tam);
  }

  this.mover = function() {
    if (x-5 >= width-5 || x-5 <= 0) xacel = -xacel;
    if (y-5 <= 0) yacel = -yacel;
    if (y-5>=height) y = posy; //GameOver = true;

    x += xacel;
    y += yacel;
  }
}
