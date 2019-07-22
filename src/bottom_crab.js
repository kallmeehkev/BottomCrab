import Claw from './claw';

const CONSTANTS = {
    ROTATION_ANGLE: 2.5,  //in degrees
    CRAB_RAD1: 70,
    CRAB_RAD2: 45,
    outerBound: 325,
};
// const BOTTOM_CRAB = document.getElementById("source")

export default class BottomCrab {
    constructor(dimensions) {
        this.dimensions = dimensions
        this.x = this.dimensions.width/2;
        this.y = this.dimensions.height/2;
        this.position_angle = 0;
        this.BottomCrab = new Image();
        this.BottomCrab.src = "../assets/images/BottomCrab2.png";
        // this.BottomCrab.src = "../assets/images/PeripheralCrab.png"
        // this.BottomCrab.src = "../assets/images/5d30157724707 copy.png"
        this.BottomCrabBody = new Image();
        this.BottomCrabBody.src = "../assets/images/5d30155431d42onearm.png";
        this.claw = new Claw(this.dimensions, this.position_angle);
    }

    drawBottomCrab(ctx) {
        let destDimen = 200;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.position_angle);
        ctx.drawImage(this.BottomCrab, 0, 0, 1500, 1500, -100, -100, destDimen, destDimen)
        ctx.rotate(-this.position_angle);
        ctx.translate(-this.x, -this.y);

        // ctx.beginPath();
        // ctx.ellipse(100, 100, CONSTANTS.CRAB_RAD1, CONSTANTS.CRAB_RAD2, 0, 0, 2 * Math.PI, true); //(x, y, radius1, radius2, position angle, start angle, end angle, counterclockwise boolean)
        // ctx.strokeStyle = "black";
        // ctx.lineWidth = 1;
        // ctx.stroke();
        // ctx.fillStyle = "red";
        // ctx.fill();
    }

    drawBottomCrabBody(ctx) {
        let destDimen = 200;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.position_angle);
        ctx.drawImage(this.BottomCrabBody, 0, 0, 1500, 1500, -100, -100, destDimen, destDimen)
        ctx.rotate(-this.position_angle);
        ctx.translate(-this.x, -this.y);
    }

    drawGrid(ctx) {
        //circles
        ctx.beginPath();
        ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 175, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 250, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, CONSTANTS.outerBound, 0, 2 * Math.PI);
        ctx.stroke();

        //lines
        ctx.beginPath();
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, this.dimensions.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, this.y);
        ctx.lineTo(this.dimensions.width, this.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.dimensions.width, this.dimensions.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.dimensions.width, 0);
        ctx.lineTo(0, this.dimensions.height);
        ctx.stroke();
    }

    animate(ctx) {
        this.drawBottomCrab(ctx)
        // this.drawGrid(ctx);
    }

    animateBody(ctx) {
        this.drawBottomCrabBody(ctx);
        // this.drawGrid(ctx);
    }

    moveBottomCrabCW() {
        this.position_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180)
        this.claw.pos_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
    }

    moveBottomCrabCCW() {
        this.position_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
        this.claw.pos_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
    }
}