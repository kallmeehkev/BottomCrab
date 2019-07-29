const CONSTANTS = {
    clawRadius: 40,
    clawSpeed: 3.0,
    maxRightRange: 300,
    maxLeftRange: 250,
    startDist: 45,
}

// let posX;
// let posY;

export default class Claw {
    constructor(dimensions, clawAngle, image) {
        this.dimensions = dimensions;
        this.center = [this.dimensions.width/2, this.dimensions.height/2];
        this.clawRadius = CONSTANTS.clawRadius;
        this.r = CONSTANTS.startDist;
        this.pos_angle = clawAngle
        // this.rightClawImage = new Image();
        // this.rightClawImage.src = "./assets/images/5d30155431d42claw3.png";
        // this.leftClawImage = new Image();
        // this.leftClawImage.src = "./assets/images/5d30155431d42leftclaw.png";
        this.image = image;
        this.posX = 0;
        this.posY = 0;
        this.moveClaw();
    }

    moveClaw() {
        this.posX = this.r * Math.cos(this.pos_angle);
        this.posY = this.r * Math.sin(this.pos_angle);
    }

    retractClaw() {
        if (this.r >= (CONSTANTS.clawSpeed + CONSTANTS.startDist)) {
            this.r -= (CONSTANTS.clawSpeed); //can tune for slower retraction rate
        }
        this.moveClaw();
    }

    extendRightClaw() {
        if (this.r < CONSTANTS.maxRightRange) {
            this.r += CONSTANTS.clawSpeed;
        }
        this.moveClaw();
        
    }

    extendLeftClaw() {
        if (this.r < CONSTANTS.maxLeftRange) {
            this.r += CONSTANTS.clawSpeed;
        }
        this.moveClaw();
    }

    resetClaw() {
        this.r = CONSTANTS.startDist;
    }

    drawRightClaw(ctx) {
        let destDimen = 200;
        //arm represented by scaling rectangle

        ctx.translate(this.center[0], this.center[1]);
        ctx.rotate(this.pos_angle);
        ctx.fillStyle = "#902529";
        ctx.fillRect(-15, 40, this.r - 10, 6);
        ctx.rotate(-(this.pos_angle));
        ctx.translate(-(this.center[0]), -(this.center[1]));

        ctx.translate(this.center[0] + this.posX, this.center[1] + this.posY);
        // console.log(`right`)
        // console.log(`X: ${this.center[0] + this.posX + (45 * Math.cos(this.pos_angle + Math.PI / 2))}`);
        // console.log(`Y: ${this.center[1] + this.posY + (45 * Math.sin(this.pos_angle + Math.PI / 2))}`);
        // console.log(`Angle: ${this.pos_angle * (180/Math.PI)}`);
        ctx.rotate(this.pos_angle);
        ctx.drawImage(this.image, 0, 0, 750, 1500, -45, -100, destDimen/2, destDimen)
        ctx.rotate(-(this.pos_angle));
        ctx.translate(-(this.center[0] + this.posX), -(this.center[1] + this.posY));

        //#902529
        // ctx.beginPath();
        // ctx.arc(this.center[0] + this.posX, this.center[1] + this.posY, 40, 0, 2 * Math.PI);
        // ctx.stroke();
        // ctx.fillStyle = 'red';
        // ctx.fill();

        // ctx.rotate(-this.pos_angle);
        // ctx.translate(-this.center[0], -this.center[1]);
    }

    drawLeftClaw(ctx) {
        let destDimen = 200;

        ctx.translate(this.center[0], this.center[1]);
        ctx.rotate(this.pos_angle);
        ctx.fillStyle = "#902529";
        ctx.fillRect(-2, -60, this.r - 10, 6);
        ctx.rotate(-(this.pos_angle));
        ctx.translate(-(this.center[0]), -(this.center[1]));

        ctx.translate(this.center[0] + this.posX, this.center[1] + this.posY);
        // console.log(`left`)
        // console.log(`X: ${this.center[0] + this.posX + (45 * Math.cos(this.pos_angle - Math.PI / 2))}`);
        // console.log(`Y: ${this.center[1] + this.posY + (45 * Math.sin(this.pos_angle - Math.PI / 2))}`);
        // console.log(`Angle: ${this.pos_angle * (180/Math.PI)}`);
        ctx.rotate(this.pos_angle + Math.PI * (1 / 2));
        ctx.drawImage(this.image, 0, 0, 750, 1500, -85.5, -55, destDimen / 2, destDimen)
        ctx.rotate(-(this.pos_angle + Math.PI * (1 / 2)));
        ctx.translate(-(this.center[0] + this.posX), -(this.center[1] + this.posY));
    }

    animateRight(ctx) {
        this.drawRightClaw(ctx);
    }
    animateLeft(ctx) {
        this.drawLeftClaw(ctx);
    }

    rightBounds() {
        let bounds = {
            centerX: this.center[0] + this.posX + (48 * Math.cos(this.pos_angle + Math.PI / 2)),
            centerY: this.center[1] + this.posY + (48 * Math.sin(this.pos_angle + Math.PI / 2)),
            radius: this.clawRadius,
        }
        
        return bounds;
    }

    leftBounds() {
        let bounds = {
            centerX: this.center[0] + this.posX + (48 * Math.cos(this.pos_angle - Math.PI / 2)),
            centerY: this.center[1] + this.posY + (48 * Math.sin(this.pos_angle - Math.PI / 2)),
            radius: this.clawRadius,
        }
        
        return bounds;
    }


    collidesWith(bounds, crab) {
        const _overlap = (bound1, bound2) => {
            let dx = bound1.centerX - bound2.centerX;
            let dy = bound1.centerY - bound2.centerY;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (1.75*distance < bound1.radius + bound2.radius) {
                // collision detected!
                return true;
            }    
            return false;
        };
        let collision = false;
        if (_overlap(bounds, crab.bounds())) { 
            // this.resetClaw();
            collision = true; 
        };
        return collision;
    }
}