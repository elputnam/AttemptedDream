// Daniel Shiffman
// http://codingtra.in
// Islamic Star Patterns
// Video Part 1: https://youtu.be/sJ6pMLp_IaI
// Video Part 2: [coming soon]
// Based on: http://www.cgl.uwaterloo.ca/csk/projects/starpatterns/

// Repo with more tiling patterns and features
// https://github.com/CodingTrain/StarPatterns

var polys = [];

var angle = 75;
var delta = 10;

var deltaSlider;
var angleSlider;

var capturer = new CCapture({
  format:'webm', 
  framerate: 60
});

function setup() {
  createCanvas(1920, 1080);
  //angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(255);
  // deltaSlider = createSlider(0, 25, 10);
  // angleSlider = createSlider(0, 90, 75);

  var inc = 100;
  for (var x = 0; x < width; x += inc) {
    for (var y = 0; y < height; y += inc) {
      var poly = new Polygon(4);
      poly.addVertex(x, y);
      poly.addVertex(x + inc, y);
      poly.addVertex(x + inc, y + inc);
      poly.addVertex(x, y + inc);
      poly.close();
      polys.push(poly);
    }
  }
}

function draw() {
  background(255);
  if (frameCount==1) capturer.start(); // start the animation capture
  // angle = angleSlider.value();
  // delta = deltaSlider.value();
  //console.log(angle, delta);
  for (var i = 0; i < polys.length; i++) {
    polys[i].hankin();
    polys[i].show();
  }
  //noLoop();
  angle += .1;
  delta += .1;

  if (angle >= 90){
    angle = 0;
  }

  if (delta >= 25){
    delta = 0;
  }

  capturer.capture(document.getElementById('defaultCanvas0')); 
  if (frameCount==1200){
    save_record();
  }
}

function save_record() {
  capturer.save();
}