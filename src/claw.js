const CONSTANTS = {
    clawRadius: 40,
    clawSpeed: 3.0,
    maxRange: 300,
    startDist: 60,
}

let posX;
let posY;

export default class Claw {
    constructor(dimensions, crabAngle) {
        this.dimensions = dimensions;
        this.center = [this.dimensions.width/2, this.dimensions.height/2];
        this.clawRadius = CONSTANTS.clawRadius;
        this.r = CONSTANTS.startDist;
        this.pos_angle = crabAngle + (22.5 * Math.PI / 180);
        this.clawImage = new Image();
        this.clawImage.src = "./assets/images/5d30155431d42claw3.png";
        this.moveClaw();
    }

    moveClaw() {
        posX = this.r * Math.cos(this.pos_angle);
        posY = this.r * Math.sin(this.pos_angle);
    }

    retractClaw() {
        if (this.r > (CONSTANTS.clawSpeed + CONSTANTS.startDist)) {
            this.r -= (CONSTANTS.clawSpeed); //can tune for slower retraction rate
        }
        this.moveClaw();
    }

    extendClaw() {
        if (this.r < CONSTANTS.maxRange) {
            this.r += CONSTANTS.clawSpeed;
        }
        this.moveClaw();
    }

    resetClaw() {
        this.r = CONSTANTS.startDist;
    }

    drawClaw(ctx) {
        let destDimen = 200;

        ctx.translate(this.center[0], this.center[1]);
        ctx.rotate(this.pos_angle - (0 * Math.PI / 180));
        ctx.fillStyle = "#902529";
        ctx.fillRect(0, 40, this.r-20, 6);
        ctx.rotate(-(this.pos_angle - (0 * Math.PI / 180)));
        ctx.translate(-(this.center[0]), -(this.center[1]));

        ctx.translate(this.center[0] + posX, this.center[1] + posY);
        ctx.rotate(this.pos_angle - (22.5 * Math.PI / 180));
        ctx.drawImage(this.clawImage, 0, 0, 750, 1500, -50, -112, destDimen/2, destDimen)
        ctx.rotate(-(this.pos_angle - (22.5 * Math.PI / 180)));
        ctx.translate(-(this.center[0] + posX), -(this.center[1] + posY));



        //#902529
        // ctx.beginPath();
        // ctx.arc(this.center[0] + posX, this.center[1] + posY, 40, 0, 2 * Math.PI);
        // ctx.stroke();
        // ctx.fillStyle = 'red';
        // ctx.fill();


        // ctx.rotate(-this.pos_angle);
        // ctx.translate(-this.center[0], -this.center[1]);
    }

    animate(ctx) {
        this.drawClaw(ctx);
    }

    bounds() {
        return {
            centerX: this.center[0] + posX,
            centerY: this.center[1] + posY,
            radius: this.clawRadius,
        }
    }

    collidesWith(crab) {
        const _overlap = (bound1, bound2) => {
            let dx = bound1.centerX - bound2.centerX;
            let dy = bound1.centerY - bound2.centerY;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (2*distance < bound1.radius + bound2.radius) {
                // collision detected!
                return true;
            }    
            return false;
        };
        let collision = false;
       
        if (_overlap(this.bounds(), crab.bounds())) { 
            // this.resetClaw();
            collision = true; 
        };
        return collision;
    }
}