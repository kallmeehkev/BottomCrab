export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
    }

    drawBackground(ctx) {
        ctx.fillStyle = "rgb(0,51,72)"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate(ctx) {
        this.drawBackground(ctx);
    }
}