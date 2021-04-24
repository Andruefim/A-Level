import { Shape } from './Shape';

export class Rectangle extends Shape {
    constructor({initCoords, shape}) {
        super(shape);
        this.coords = initCoords;
    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.coords.x, this.coords.y, this.width, this.height); 
    }
}