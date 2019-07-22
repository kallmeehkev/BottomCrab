export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = 200;
        this.y = 0;
        this.oceanFloor = new Image();
        this.oceanFloor.src = "../assets/images/ocean-1214747_1920cropped.jpeg";
    }

    drawBackground(ctx) {
        ctx.fillStyle = "#00d1ef"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate(ctx) {
        this.drawBackground(ctx);
    }

    drawOceanFloor(ctx) {
        ctx.drawImage(this.oceanFloor, this.x, this.y, 1067, 800, 0, 0, 1067, 800);
        //background scroll
        if (this.x <= 170) {
            this.flowLeft = false;
        } 
         if (this.x >= 200) {
            this.flowLeft = true;
        }
        if (this.flowLeft) {
            this.x -= 0.2
        } else {
            this.x += 0.2;
        }
    }

    animateOcean(ctx) {
        this.drawOceanFloor(ctx);
    }

}