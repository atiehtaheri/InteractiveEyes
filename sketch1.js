var isColored = false;
function setup() {
  createCanvas(1024, 768);
  noStroke();

}

function draw() {
  if (isColored) {
    background(255);
  } else {
  background(14, 12, 8);
  }
  
}

function mousePressed() {
  isColored = !isColored;
}