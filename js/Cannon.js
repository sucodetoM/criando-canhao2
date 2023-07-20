// Adicione as propriedades na função constructor() e adicione o ângulo

class Cannon {
  constructor(x, y, width, height, angle) {
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height
 this.angle = angle;
  }

  // Adicione a função arc() e rect() para criar o canhão
  display() {
   
    //9- Adicione o console.log para verificar o ângulo.

    console.log(this.angle);

//   8 / 10 -  Mude o ângulo de cannon para cima quando a tecla de seta para a esquerda for
// pressionada e para baixo quando a tecla de seta para direita for pressionada.

//10.Adicione a condição para restringir o movimento.
    if (keyIsDown( RIGHT_ARROW ) && this.angle < 0.35 ) {
      this.angle += 0.02;
    }

    if (keyIsDown( LEFT_ARROW ) && this.angle > -1.45 ) {
      this.angle -= 0.02;
    }
fill("#676e6a");
    // Adicione as funções push, pop e translate dentro da função display().
    push();
    translate(this.x, this.y);
    rotate(this.angle);
      // Adicione a função arc() e rect() para criar o canhão
    rect(-10, -20, this.width, this.height);     
    pop();
    arc(this.x - 30, this.y +90, 140, 200, PI, TWO_PI);     
    noFill();
  }
}
