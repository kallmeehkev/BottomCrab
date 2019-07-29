export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = 130;
        this.y = 0;
        this.oceanFloor = new Image();
        this.oceanFloor.src = "./assets/images/ocean-1214747_1920cropped800.jpeg";
        this.net = new Image();
        this.net.src = "./assets/images/net.png";
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
        ctx.drawImage(this.net, 0, 0, 575, 450, this.x, 120, 575, 450);
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

}