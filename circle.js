function Circle(r, x, y) {
  this.r = r;
  this.x = x;
  this.y = y;
  this.growing = true;

  this.show = function() {
    strokeWeight(2);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.grow = function(rate) {
    if(!this.stop() && this.growing) this.r = this.r + rate;
  }

  this.stop = function() {
    return(
    this.x + this.r >= width ||
    this.y + this.r >= height ||
    this.x - this.r <= 0 ||
    this.y - this.r <=0
    );
  }
}
