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
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        ctx.drawImage(this.bucket, 0, 0, 967, 957, (800 - (967 * 0.7)) / 2, (800 - (957 * 0.7))/2, 967*0.7, 957*0.7);
    }

    animateBucket(ctx) {
        this.drawBucket(ctx);
    }

    drawDarkness(ctx, off) {
        if (off) {
            debugger
            ctx.fillStyle = "rgba(0,0,0,0.88)"
        } else {
            ctx.fillStyle = "rgba(0,0,0,0.5)"
        }
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animateDarkness(ctx, off) {
        this.drawDarkness(ctx, off);
    }

}