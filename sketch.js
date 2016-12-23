
	var contador = 1;
  var x = 200;
  var y = 725;


function setup() {
  // We are still calling createCanvas like in the past, but now 
  // we are storing the result as a variable. This way we can 
  // call methods of the element, to set the position for instance.
  canvas = createCanvas(1100, 700);

  // Here we call methods of each element to set the position 
  // and id, try changing these values.
  // Use the inspector to look at the HTML generated from this 
  // code when you load the sketch in your browser.
  
  canvas.position(x, y);

  canvas.class("lemon");
}


function draw() {
	if (contador >= 20) {
    contador == 1;
	}
contador++;
}