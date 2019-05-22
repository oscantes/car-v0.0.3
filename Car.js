class Car {
  constructor(tempx) {
    this.size_factor = 100;
    this.scaled_width = (car_image.width/100)*this.size_factor;
    this.scaled_height = (car_image.height/100)*this.size_factor;
    this.x = tempx;
    this.y = canvas.height-this.scaled_height/2;
    this.speed = 0;
    this.acceleration = random(0.05,0.15);
    // this.fk = 0.05; //if needed
  }


  //if car has reached center of the canvas, background will move at the speed of car(or maybe *0.5), speed of car will be zero
  //if speed<certain_speed, speed of car will be < zero and speed of background will decrease to zero


  show() {
    imageMode(CENTER);
    image(car_image, this.x, this.y, this.scaled_width, this.scaled_height);
    if (this.x-this.scaled_width>canvas.width) {  //not perfect
      this.x=0;
    }
    // print(this.speed);
  }

  move() {
    this.x = this.x + this.speed;
    if(keyIsDown(UP_ARROW)) {
      this.speed += this.acceleration;
    }
    if(keyIsDown(DOWN_ARROW)) {
      this.speed -= this.acceleration;
    }
    // this.y = this.y + this.speed; //falling!!

    // this.speed += this.acceleration - this.fk;
  }
}

//
//
// friction() {
//   if (this.speed > 0) {
//     this.down = true;
//     this.fk = 0.1;
//   } else {
//     this.down = false
//     this.fk = -this.fk;
//   }
// }
//
// bounce() {
//   if (this.y > height-(this.r/2) || this.y < 0) {
//     this.speed = -this.speed;
//   }
// }
