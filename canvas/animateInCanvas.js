class HeartBeat {
    canvas;
    ctx;
    constructor() {
        const canvas = document.getElementById('canvas_one');
        const ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.ctx = ctx;
        this.drawHeart();
    }

    drawHeart() {
        const x = 150;
        const y = 150;
        const width = 150 ;
        const height = 150;
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

        ctx.clearRect(125, 200, 50, 50);
    }
}

new HeartBeat();