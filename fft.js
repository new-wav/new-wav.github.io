var song;
var fft;
var button;

var w;

function toggleSong(){
  if(song.isPlaying()){
    song.pause();
  }else{
    song.play();
  }
}

function preload(){
  song = loadSound('sumienie.mp3');
}

function setup(){
  createCanvas(windowWidth, 500);
  colorMode(HSB);
  angleMode(DEGREES);
  // button = createButton('toggle');
  // button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9,256);
  w = width/64;
  
}

function draw(){
  background(255);
  var spectrum = fft.analyze();
  for(var i=0; i < spectrum.length; i++){
    var amp = spectrum[i]/2;
    var y = map(amp, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i*w, y, w, height-y, 6, 6, 0, 0);
    rect(i*w, 0, w, height-y, 0, 0, 6, 6);
  }

  // console.log(spectrum,length);
  noStroke();
  noFill();
}