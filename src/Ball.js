const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

export default 
class Ball {
  constructor(x, y, size, accel_x, accel_y, state) {
    this.n_destroyed_blocks = 0;
    this.state = state;
    this.x = x;
    this.y = y;
    this.size = size;
    this.accel_x = accel_x;
    this.accel_y = accel_y;
    this.straight_angle = [-(Math.abs(this.accel_x) - 2), -(Math.abs(this.accel_y) + 2)];
    this.accute_angle = [-Math.abs(this.accel_x), -Math.abs(this.accel_y)];
    this.radio = this.size / 2;
  }

  draw() {
    context.fillStyle = "white";
    context.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }

  move(pad) {
    if (this.state) {
      //Moves the ball and bounces on the borders
      if (this.x + this.radio >= canvas.width || this.x - this.radio <= 0) {
        this.accel_x = -this.accel_x;
      }
      if (this.y - this.radio <= 0) {
        this.accel_y = -this.accel_y;
      }
      this.x += this.accel_x;
      this.y += this.accel_y;
    } else {
      //ball follows the pad
      this.y = pad.y - pad.height/2 - this.radio;
      this.x = pad.x + pad.width/2;
      this.accel_x = Math.abs(this.accel_x);
      this.accel_y = -this.accel_y;
    }
  }

  detect_fall() {
    return (this.y - this.radio > canvas.height + 200)
  }

  collision(element){
    return (this.x - this.radio < element.x + element.width &&
            this.x + this.radio > element.x &&
            this.y - this.radio < element.y + element.height &&
            this.y + this.radio > element.y)
  }

  block_collision(level, n_rows) {
    if (this.y < 70 + (19 * n_rows)){
      level.forEach(ROW => {
        ROW.forEach(element => {
          if(element.state > 0 && this.collision(element)){
            //TODO: refactor this!
            this.y -= this.accel_y;
            this.x -= this.accel_x;

            let l = Math.abs((this.x+this.size) - element.x),
                r =Math.abs((this.x-this.size) - (element.x+element.width)),
                u =Math.abs((this.y+this.size) - element.y),
                d =Math.abs((this.y-this.size) - (element.y+element.height));

            if(Math.min(l, r) < Math.min(u, d)){
              this.accel_x = -this.accel_x;
            }else{
              this.accel_y = -this.accel_y;
            }

            element.state -= 1;
            this.n_destroyed_blocks += 1;

            this.y += this.accel_y;
            this.x += this.accel_x;
          }
       });
     });
    }
  }

  angle_hit(raque_1) { 
    if (this.collision(raque_1)) {        
        //TODO: refactor this.
        [this.accel_y, this.accel_y] = (this.x < raque_1.x - raque_1.width / 4 || this.x > raque_1.x + raque_1.width - raque_1.width/4) ?  this.accute_angle : this.straight_angle;
        this.accel_x = (this.x > raque_1.x + raque_1.width/2) ? Math.abs(this.accel_x) : -Math.abs(this.accel_x);
        this.y = raque_1.y-2;
    }
  }
}
