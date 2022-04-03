let car_image;
let cars = [];
let tires = [];
let deneme={
x:200,
y:200
}

function preload() {
  car_image=loadImage("libraries/bravo.png");
}

function setup() {
  createCanvas(1200,600);
}

function draw() {
  fill(0);
  // rect(deneme.x,deneme.y,50,50);

// translate(100,100);
// rect(10, 10, 100, 50);
// rotate(PI / 4);

  background(100,100,150);
  // for (let t of tires) {
  //   t.show();
  //   t.move();
  // }

  for (let c of cars) {
    c.show();
    c.move();
  }

}

function mousePressed() {
  cars.push(new Car(mouseX));
  // tires.push(new Tire(mouseX, mouseY));
}
