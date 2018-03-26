var brain;

function setup() {
  //brain = new NeuralNetwork(3, 3, 1);
  let a = new Matrix(2, 3);
  a.randomize();
  let b = a.transpose();
  console.table(a.matrix);
  console.table(b.matrix);
}

function draw() {
  ellipse(0, 0, 50, 50)
}