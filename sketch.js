var circles = [];
var tries = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(51);

  if(circles.length < 1000 && tries < 1000) {
    var x = random(0, width);
    var y = random(0, height);
    var check = 0;

    for(i = circles.length - 1; i >= 0; i--) {
      if(dist(x, y, circles[i].x, circles[i].y) > circles[i].r) check ++;
    }
    if(check == circles.length) circles.push(new Circle(1, x, y));
    else tries++;

  }

  for(i = circles.length - 1; i >= 0; i--) {
    circles[i].show();
    circles[i].grow(0.1);

    if(circles[i].growing) {
      for(j = circles.length - 1; j >= 0; j--){
        if(i != j && dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y) <= circles[i].r + circles[j].r) {
          circles[i].growing = false;
            circles[j].growing = false;
          break;
        }
      }
    }
  }
}
