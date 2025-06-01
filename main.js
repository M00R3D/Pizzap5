// Nombre alumno: Moore Garay Job IDS 8vo semestre graficacion y multimedia - Simulacion 3 pizzas con algoritmos de linea

let divisiones;

function setup() {
  createCanvas(800, 300);
  divisiones = int(prompt("¿Cuantas rebanadas por pizza?"));
  noLoop();
}

function draw() {
  background(255);
  translate(0, height / 2);

  push();
  translate(150, 0);
  dibujarPizzaPendiente(divisiones);
  pop();

  push();
  translate(400, 0);
  dibujarPizzaDDA(divisiones);
  pop();

  push();
  translate(650, 0);
  dibujarPizzaBresenham(divisiones);
  pop();
}

function dibujarPizzaPendiente(n) {
  let r = 100;
  fill(255, 200, 150);
  ellipse(0, 0, r * 2);
  for (let i = 0; i < n; i++) {
    let a = TWO_PI * i / n;
    let x = round(r * cos(a));
    let y = round(r * sin(a));
    lineaPendiente(0, 0, x, y);
  }
}

function lineaPendiente(x0, y0, x1, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  let m = dy / dx;
  let b = y0 - m * x0;
  if (abs(dx) > abs(dy)) {
    let paso = dx > 0 ? 1 : -1;
    for (let x = x0; x != x1; x += paso) {
      let y = round(m * x + b);
      point(x, y);
    }
  } else {
    let paso = dy > 0 ? 1 : -1;
    for (let y = y0; y != y1; y += paso) {
      let x = round((y - b) / m);
      point(x, y);
    }
  }
}

function dibujarPizzaDDA(n) {
  let r = 100;
  fill(255, 200, 150);
  ellipse(0, 0, r * 2);
  for (let i = 0; i < n; i++) {
    let a = TWO_PI * i / n;
    let x = round(r * cos(a));
    let y = round(r * sin(a));
    lineaDDA(0, 0, x, y);
  }
}

function lineaDDA(x0, y0, x1, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  let pasos = max(abs(dx), abs(dy));
  let incX = dx / pasos;
  let incY = dy / pasos;
  let x = x0;
  let y = y0;
  for (let i = 0; i <= pasos; i++) {
    point(round(x), round(y));
    x += incX;
    y += incY;
  }
}

function dibujarPizzaBresenham(n) {
  let r = 100;
  fill(255, 200, 150);
  ellipse(0, 0, r * 2);
  for (let i = 0; i < n; i++) {
    let a = TWO_PI * i / n;
    let x = round(r * cos(a));
    let y = round(r * sin(a));
    lineaBresenham(0, 0, x, y);
  }
}

function lineaBresenham(x0, y0, x1, y1) {
  let dx = abs(x1 - x0);
  let dy = abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    point(x0, y0);
    if (x0 === x1 && y0 === y1) break;
    let e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}
