function Food() {
  this.x = getRandomPoint(screenWidth, snakeDim);
  this.y = getRandomPoint(screenHeight, snakeDim);
  this.dim = snakeDim;

  this.show = function() {
    fill(255, 0, 0); // red color 
    rect(this.x, this.y, this.dim, this.dim);
  }

  this.update = function() {
    this.x = getRandomPoint(screenWidth, snakeDim);
    this.y = getRandomPoint(screenHeight, snakeDim);
  }

  this.isEaten = function(snakeCoordinates) {
    this.x === snakeCoordinates.x && this.y === snakeCoordinates.y ? eaten = true : eaten = false;
    return eaten;
  }
}