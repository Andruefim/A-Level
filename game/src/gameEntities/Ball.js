import config from '../config';
import { Store } from '../store/Store';

export class Ball {
    constructor({element, renderer, speed, firstPlayer, secondPlayer}) {
        this.element = element;
        this.renderer = renderer;
        this.speed = speed;
        this.angle = 30;
        this.changeAngleTimeout = false;
        this.firstPlayer = firstPlayer;
        this.secondPlayer = secondPlayer;
    }

    spawn() {
        this.renderer.push(this.element);
    }

    run() {
        setInterval(() => {
            var rads = this.angle * Math.PI / 180;
            var vx = Math.cos(rads)*this.speed/60;
            var vy = Math.sin(rads)*this.speed/60;
            this._calculateCollision();
            this.element.coords = {
                x: this.element.coords.x + vx,
                y: this.element.coords.y - vy,
            };
            this._streamCoords();
        }, 1000 / 60);
    }

    _calculateCollision() {
        if (!this.changeAngleTimeout) {
            const { coords: ballCoords } = this.element;
            // top
            if (ballCoords.y < 100) {
                this.angle = this._randomizeAngle(360 - this.angle);
                this._setChangeAngleTimeout();
                
            } else if (ballCoords.y > config.canvas.height) {
                this.angle = this._randomizeAngle(360 - this.angle);
                this._setChangeAngleTimeout();
            } else {
                if (this.firstPlayer) {
                    const firstPlayerCoords = this.firstPlayer.element.coords;
                    if (
                        ballCoords.x < (firstPlayerCoords.x + this.firstPlayer.element.width) &&
                        ballCoords.y > firstPlayerCoords.y &&
                        ballCoords.y < firstPlayerCoords.y + this.firstPlayer.element.height
                    ) {
                        this.angle = this._randomizeAngle(this.angle - 180);
                        this._setChangeAngleTimeout();
                        return;
                    }
                }

                if (this.secondPlayer) {
                    const secondPlayerCoords = this.secondPlayer.element.coords;
                    if (
                        ballCoords.x > (secondPlayerCoords.x - this.secondPlayer.element.width) &&
                        ballCoords.y > secondPlayerCoords.y &&
                        ballCoords.y < secondPlayerCoords.y + this.secondPlayer.element.height
                    ) {
                        this.angle = this._randomizeAngle(this.angle - 180);
                        this._setChangeAngleTimeout();
                    }
                }
            }
        }
    }

    _randomizeAngle(angle) {
        return angle + Math.random() * 30;
    }

    _setChangeAngleTimeout() {
        this.changeAngleTimeout = true;
        setTimeout(() => {
            this.changeAngleTimeout = false;
        }, 1000);
    }

    _streamCoords() {
        firebase.database().ref(`/BALL_COORDS`).set(this.element.coords);
    }

    listenServerUpdates() {
        console.log(`Ball listens server updates`);
        const store = new Store();
        store.syncWithDB([`BALL_COORDS`], (state) => {
            const coordsValue = state[`BALL_COORDS`].value;
            if (coordsValue) {
                this.element.coords = coordsValue;
            }
        });
    }
}