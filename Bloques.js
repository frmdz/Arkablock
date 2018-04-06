
function dibujarBloques() {
    for (let i=0; i<num; i++) {
      for (let j=0; j<13; j++) {
        if (nivel[i][j] > 0) {
          if (nivel[i][j] == 2) {
              context.fillStyle = "grey";
            }else {
              context.fillStyle = "white";
            }
          context.fillRect(10+(45*j), 50+(19*i), 42, 16);
        }
      }
    }
  }
