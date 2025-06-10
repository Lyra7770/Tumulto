let t = 0;
let paleta = [
  [191, 165, 149], // #BFA595
  [89, 32, 27], // #59201B
  [191, 132, 126], // #BF847E
  [140, 55, 55], // #8C3737
  [13, 13, 13] // #0D0D0D
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(paleta[4][0], paleta[4][1], paleta[4][2], 50); // fondo con transparencia

  t += 0.01;

  for (let i = 0; i < 250; i++) {
    let x = noise(i * 0.1, t) * width;
    let y = noise(i * 0.2, t + 100) * height;
    let r = noise(i * 0.05, t + 200) * 50 + 15;

    let col = random(paleta);
    fill(col[0], col[1], col[2], 30);
    ellipse(x, y, r, r);
  }

  // Interacción con mouse o touch
  if (mouseIsPressed || touches.length > 0) {
    let cant = 10;
    let x = mouseIsPressed ? mouseX : touches[0].x;
    let y = mouseIsPressed ? mouseY : touches[0].y;

    for (let j = 0; j < cant; j++) {
      let angle = random(TWO_PI);
      let rad = random(10, 60);
      let rx = x + cos(angle) * rad;
      let ry = y + sin(angle) * rad;
      let r = random(8, 20);
      let col = random(paleta.slice(0, 4)); // evita fondo oscuro
      fill(col[0], col[1], col[2], 80);
      ellipse(rx, ry, r, r);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
