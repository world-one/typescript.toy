const canvas_height = 300;
const canvas_width = 500;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Ball{
  
  isBoundX = false;
  isBoundY = false;

  constructor(x, y, radius, speed, color){
    this.x = x;
    this.y = y;
    this.vx = speed;
    this.vy = speed;
    this.radius = radius;
    this.color = color;
    
    this.draw();
  }

  checkBound(currentPoint, changePoint) {
    return currentPoint < changePoint;
  }

  moveX() {
    const minX = this.radius;
    const maxX = canvas_width - this.radius;

    if (this.isBoundX) {
      this.x += this.vx;
    } else {
      this.x -= this.vx;
    }

    if (this.x <= minX) {
      this.isBoundX = true;
    }

    if (this.x >= maxX) {
      this.isBoundX = false;
    }

  }

  moveY() {
    const minY = this.radius;
    const maxY = canvas_height - this.radius;

    if (this.isBoundY) {
      this.y += this.vy;
    } else {
      this.y -= this.vy;
    }

    if (this.y <= minY) {
      this.isBoundY = true;
    }

    if (this.y >= maxY) {
      this.isBoundY = false;
    }
  }

  draw(){
    this.moveX();
    this.moveY();
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    ctx.beginPath();
    ctx.fillStyle=this.color;
    // x, y, radius, startAngle, endAngle, anticlockwise
    ctx.arc(this.x, this.y, this.radius, Math.PI*2, false);
    ctx.fill();
    requestAnimationFrame(this.draw.bind(this));
  }
}

new Ball(50, 50, 13, 10, 'red');
