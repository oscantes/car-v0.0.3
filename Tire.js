class Tire {

  constructor(tempx,tempy) {

    this.x=tempx;
    this.y=tempy;
  }

  show() {
    fill(100,100,100);
    // rectMode(CENTER);

    rect(this.x,this.y,50,50);
        translate(random(50),random(50));
  }

  move() {
    // rotate(PI/3.0);
  }
}
