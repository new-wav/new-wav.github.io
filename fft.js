let yoff = 0.0;

function setup() {
  var cnv = createCanvas(windowWidth, 200);
  cnv.position(0, 0);
  cnv.style('z-index','2');
}

function draw() {
  background(220);
  
  var color1 = color(252, 134, 29);
  var color2 = color(44, 218, 255);
  
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "X");

  // We are going to draw a polygon out of the wave points
  beginShape();
  fill('#000000');
  noStroke();
  // let xoff = 0; // Option #1: 2D Noise
  let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 70, 140);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.1;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  
  if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c2, c1, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}

//--------------------------------------------------------------

// var song;
// var fft;
// var button;

// var w;

// function toggleSong(){
//   if(song.isPlaying()){
//     song.pause();
//   }else{
//     song.play();
//   }
// }

// function preload(){
//   song = loadSound('sumienie.mp3');
// }

// function setup(){
//   createCanvas(windowWidth, 500);
//   colorMode(HSB);
//   angleMode(DEGREES);
//   // button = createButton('toggle');
//   // button.mousePressed(toggleSong);
//   song.play();
//   fft = new p5.FFT(0.9,256);
//   w = width/64;
  
// }

// function draw(){
//   background(255);
//   var spectrum = fft.analyze();
//   for(var i=0; i < spectrum.length; i++){
//     var amp = spectrum[i]/2;
//     var y = map(amp, 0, 256, height, 0);
//     fill(i, 255, 255);
//     rect(i*w, y, w, height-y, 6, 6, 0, 0);
//     rect(i*w, 0, w, height-y, 0, 0, 6, 6);
//   }

//   // console.log(spectrum,length);
//   noStroke();
//   noFill();
// }