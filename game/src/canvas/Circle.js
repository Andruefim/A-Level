import { Shape } from './Shape';

export class Circle extends Shape {
    constructor({initCoords, shape}) {
        super(shape);
        this.coords = initCoords;
    }

    render() {
        // this.ctx.beginPath();
        // this.ctx.arc(this.coords.x, this.coords.y, this.width, 0, 2 * Math.PI);
        // this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(this.coords.x, this.coords.y, this.width, 0, 2 * Math.PI);
        this.ctx.fillStyle = "#D96B72";
        this.ctx.fill();
        
    }
}

