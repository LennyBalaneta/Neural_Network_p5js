var brain;

function setup() {
  //brain = new NeuralNetwork(3, 3, 1);
  let a = new Matrix(2, 2);
  a.randomize();
  a.print();
  function doubleIt(x) {
    return x * 2;
  }
  a.map(doubleIt);
  a.print();
}

function draw() {
  ellipse(0, 0, 50, 50)
}