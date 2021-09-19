class HeartBeat {
    canvas;
    ctx;
    constructor() {
        const canvas = document.getElementById('canvas_one');
        const ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.ctx = ctx;
        this.beat();
        let rectX = 1;
        let rectY = 1;
        setInterval(() => {
            rectX = rectY += 1;
            console.log(rectY, rectX)
            this.move(rectX, rectY);
        }, 1000)
        
    }

    move(x, y) {
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(x, y, 10, 10);
    }

    beat() {
        let size = 150;
        setInterval(() => {
            this.clear();
            this.drawHeart(size);
            if (size > 150) {
                size -= 10;    
            } else {
                size += 10;    
            }
        }, 200)
    }

    clear() {
        this.ctx.clearRect(0,0,300, 300);
    }

    drawHeart(size) {
        const x = 150;
        const y = 50;
        const height = size;
        const width = size;
        const ctx = this.ctx;
        
        ctx.beginPath();
        const downCurvePoint = height * 0.36;
        ctx.moveTo(x, y + downCurvePoint);
        // top left curve
        ctx.bezierCurveTo(
            x, y, 
            x - width / 2, y, 
            x - width / 2, y + downCurvePoint,
        );

        // bottom left curve
        ctx.bezierCurveTo(
            x - width / 2, y + (height + downCurvePoint) / 2, 
            x, y + height, 
            x, y + height
        );

        // bottom right curve
        ctx.bezierCurveTo(
            x, y + height, 
            x + width / 2, y + (height + downCurvePoint) / 2, 
            x + width / 2, y + downCurvePoint
        );

        // top right curve
        ctx.bezierCurveTo(
            x + width / 2, y, 
            x, y, 
            x, y + downCurvePoint
        );

        // ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();
        // ctx.restore();  
        
    }
}

new HeartBeat();