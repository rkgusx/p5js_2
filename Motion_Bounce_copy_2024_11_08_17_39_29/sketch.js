/*
 * @name Bounce with Color Change
 * @arialabel White circle moving on a grey background. When it hits the edge of the background window, it changes direction and color.
 * @frame 720,400
 * @description When the shape hits the edge of the window, it reverses its direction and changes color.
 */

let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let c; // Color of the shape

function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
  c = color(255); // Initial color of the shape (white)
}

function draw() {
  background(102);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Check if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1 and change color
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
    changeColor(); // Change color when hitting the edge horizontally
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
    changeColor(); // Change color when hitting the edge vertically
  }

  // Draw the shape with the updated color
  fill(c);
  ellipse(xpos, ypos, rad, rad);
}

// Function to change the color of the shape
function changeColor() {
  c = color(random(255), random(255), random(255)); // Change the color to a random one
}
