class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];
    for(let i=0 ; i<this.rows ; i++) {
      this.data[i] = [];
      for(let j=0 ; j<this.cols ; j++) {
        this.data[i][j] = 0;
      }
    }
  }
  
  randomize() {
    for(let i=0 ; i<this.rows ; i++) {
      for(let j=0 ; j<this.cols ; j++) {
        this.data[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }
  
  static multiply(a, b) {
    //Matrix product
    if(a.cols !== b.rows) {
      console.log("a.cols !== b.rows");
      return undefined;
    }
    let result = new Matrix(a.rows, b.cols);
    for(let i=0 ; i<result.rows ; i++) {
      for(let j=0 ; j<result.cols ; j++) {
        //Dot product of values in col
        let sum = 0;
        for(let k=0 ; k<a.cols ; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }
        result.data[i][j] = sum;
      }
    }
    return result;
  }
  
  
  multiply(n) {
    for(let i=0 ; i<this.rows ; i++) {
      for(let j=0 ; j<this.cols ; j++) {
        this.data[i][j] *= n;
      }
    }
  }
  
  map(fn) {
    for(let i=0 ; i<this.rows ; i++) {
      for(let j=0 ; j<this.cols ; j++) {
        this.data[i][j] = fn(this.data[i][j]);
      }
    }
  }
  
  add(n) {
    if(n instanceof Matrix) {
      for(let i=0 ; i<this.rows ; i++) {
        for(let j=0 ; j<this.cols ; j++) {
          this.data[i][j] += n.data[i][j];
        }
      }
    }else {
      for(let i=0 ; i<this.rows ; i++) {
        for(let j=0 ; j<this.cols ; j++) {
          this.data[i][j] += n;
        }
      }
    }
  }
  
  transpose() {
    let result = new Matrix(this.cols, this.rows);
    for(let i=0 ; i<this.rows ; i++) {
      for(let j=0 ; j<this.cols ; j++) {
        result.data[j][i] = this.data[i][j];
      }
    }
    return result;
  }
  
  print() {
    console.table(this.data);
  }
}