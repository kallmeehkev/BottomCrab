const CONSTANTS = {
    ROTATION_ANGLE: 45,  //in degrees
    CRAB_RAD1: 70,
    CRAB_RAD2: 45,
};

const BOTTOM_CRAB = new Image();
BOTTOM_CRAB.src = "../assets/images/BottomCrab.png"

export default class BottomCrab {
    constructor(dimensions) {
        this.dimensions = dimensions
        this.x = this.dimensions.width/2;
        this.y = this.dimensions.height/2;
        this.position_angle = 0;
    }

    drawBottomCrab(ctx) {
        ctx.beginPath();
        // ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, true); //(x, y, radius, start angle, end angle, counterclockwise boolean)
        ctx.ellipse(this.x, this.y, CONSTANTS.CRAB_RAD1, CONSTANTS.CRAB_RAD2, this.position_angle, 0, 2 * Math.PI, true); //(x, y, radius1, radius2, position angle, start angle, end angle, counterclockwise boolean)
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.ellipse(60, 75, 50, 30, Math.PI * .25, 0, Math.PI * 1.5);
        // ctx.fill();
    }

    animate(ctx) {
        this.moveBottomCrab();
        this.drawBottomCrab(ctx)
    }

    // rotate() {
    //     this.position_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180)
    // }
    moveBottomCrab() {
        this.position_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180)
    }
}