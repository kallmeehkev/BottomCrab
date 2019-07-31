export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = 130;
        this.y = 0;
        this.oceanFloor = new Image();
        this.oceanFloor.src = "./assets/images/ocean-1214747_1920cropped800.jpeg";
        this.net = new Image();
        this.net.src = "./assets/images/net.png";
        this.bucket = new Image();
        this.bucket.src = "./assets/images/bucket.png";
        this.boat = new Image();
        this.boat.src = "./assets/images/boat1.png";
        this.lidX = 400;
    }

    drawBackground(ctx) {
        ctx.fillStyle = "#00d1ef"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate(ctx) {
        this.drawBackground(ctx);
    }

    drawWonBg(ctx) {
        ctx.fillStyle = "#7dfed5"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animateWon(ctx) {
        this.drawWonBg(ctx);
    }

    drawOceanFloor(ctx) {
        ctx.drawImage(this.oceanFloor, 0, 0, 1067, 800, 0, 0, 1067, 800);
        ctx.drawImage(this.net, 0, 0, 575, 450, this.x, 135, 575, 450);
        //background scroll
        if (this.x <= 90) {
            this.flowLeft = false;
        } 
         if (this.x >= 130) {
            this.flowLeft = true;
        }
        if (this.flowLeft) {
            this.x -= 0.15
        } else {
            this.x += 0.15;
        }
    }

    animateOcean(ctx) {
        this.drawOceanFloor(ctx);
    }

    drawBucket(ctx) {
        ctx.drawImage(this.boat, 0, 0, 400, 400, 0, 0, 800, 800);
        ctx.drawImage(this.bucket, 0, 0, 967, 957, (800 - (967 * 0.7)) / 2, (800 - (957 * 0.7))/2, 967*0.7, 957*0.7);
    }

    animateBucket(ctx) {
        this.drawBucket(ctx);
    }

    drawLid(ctx) {

        // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        //dark circle in bucket.  needs own fillstyle

        ctx.fillStyle = `rgba(0,0,0,${this.lidX / 400 - 0.12})`
        ctx.beginPath();
        ctx.arc(400, 415, 307, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "rgba(210,37,41,1)"
        ctx.beginPath();
        ctx.arc(this.lidX, 415, 307, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        if (this.lidX <= -500) {
            this.lidOff = false;
        }
        if (this.lidX >= 400) {
            this.lidOff = true;
        }
        if (this.lidOff) {
            setTimeout(() => {
                this.lidX -= 2
            }, 1000)
        } else {
            if (this.lidX < 400) this.lidX += 10;
        }
    }

    animateLid(ctx) {
        this.drawLid(ctx);
    }

}