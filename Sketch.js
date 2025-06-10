let t = 0;
let burbujas = [];
let paleta = [
  [191, 165, 149], // #BFA595
  [89, 32, 27], // #59201B
  [191, 132, 126], // #BF847E
  [140, 55, 55] // #8C3737
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 300; i++) {
    burbujas.push(new Burbuja());
  }
}

function draw() {
  background(13, 13, 13); // #0D0D0D
  t += 0.01;

  for (let b of burbujas) {
    b.actualizar();
    b.dibujar();
  }
}

class Burbuja {
  constructor() {
    this.r = random(20, 60);
    this.xoff = random(1000);
    this.yoff = random(1000);
    this.col = random(paleta);
    this.x = noise(this.xoff, t) * width;
    this.y = noise(this.yoff, t + 100) * height;
  }

  actualizar() {
    this.x = noise(this.xoff, t) * width;
    this.y = noise(this.yoff, t + 100) * height;
  }

  dibujar() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    let alpha = map(d, 0, 300, 180, 10);
    fill(this.col[0], this.col[1], this.col[2], alpha);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

function mousePressed() {
  agregarBurbuja(mouseX, mouseY);
}

function touchStarted() {
  agregarBurbuja(mouseX, mouseY);
}

function agregarBurbuja(x, y) {
  for (let i = 0; i < 5; i++) {
    let b = new Burbuja();
    b.xoff = random(1000);
    b.yoff = random(1000);
    b.x = x + random(-30, 30);
    b.y = y + random(-30, 30);
    burbujas.push(b);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
