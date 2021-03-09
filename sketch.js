var w;
var h;
var Ircx;
var Ircy;
var Ilcx;
var Ilcy;
var fx;
var fy;
var gx;
var gy;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke();
  w  = windowWidth;
  h = windowHeight;
}

function draw() {
  background(164, 227, 54);
  strokeWeight(1);
  stroke(0);
  ellipse(w/2, h/2, 500, 500);

  Ircx = w/2 + (500/4);
  Ircy = h/2;

  Ilcx = w/2 - (500/4);
  Ilcy = h/2;

  ellipse(Ilcx, Ilcy, 150);
  ellipse(Ircx, Ircy, 150);

  fill(50);
  var fx_temp = map(mouseX, 0, w, (Ilcx - 75 + 37.5), (Ilcx + 75 - 37.5));
  var fy_temp = map(mouseY, 0, h, (Ilcy - 75 + 37.5), (Ilcy + 75 - 37.5));
  if (dist(fx_temp, fy_temp, Ilcx, Ilcy) < 37.5) {
    fx = fx_temp;
    fy = fy_temp;
  }

  var gx_temp = map(mouseX, 0, w, (Ircx - 75 + 37.5), (Ircx + 75 - 37.5));
  var gy_temp = map(mouseY, 0, h, (Ircy - 75 + 37.5), (Ircy + 75 - 37.5));
  if (dist(gx_temp, gy_temp, Ircx, Ircy) < 37.5) {
    gx = gx_temp;
    gy = gy_temp;
  }

  ellipse(fx, fy, 75);
  ellipse(gx, gy, 75);
  fill(255);
  strokeWeight(4);
  stroke(200, 0, 0);
  arc(w/2, h/2 + 75, 250, 250, (PI / 6), (5 * PI / 6));
}
