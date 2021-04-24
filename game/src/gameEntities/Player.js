import { Store } from '../store/Store';
import config from '../config';

export class Player {
    constructor({element, renderer, playerType, speed}) {
        this.element = element;
        this.renderer = renderer;
        this.playerType = playerType;
        this.speed = speed;
    }

    spawn() {
        this.renderer.push(this.element);
    }

    listenInputs() {
        console.log(`${this.playerType} listens inputs`);
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 40: {
                    if ((this.element.coords.y + this.element.height) < config.canvas.height) {
                        this.element.coords.y += this.speed;
                        this._streamCoords();
                    }
                    break;
                }
                case 38: {
                    if (this.element.coords.y > 60) {
                        this.element.coords.y -= this.speed;
                        this._streamCoords();
                    }
                    
                }
            }
        });
    }

    _streamCoords() {
        firebase.database().ref(`/${this.playerType}_COORDS`).set(this.element.coords);
    }

    listenServerUpdates() {
        console.log(`${this.playerType} listens server updates`);
        const store = new Store();
        store.syncWithDB([`${this.playerType}_COORDS`], (state) => {
            const coordsValue = state[`${this.playerType}_COORDS`].value;
            if (coordsValue) {
                this.element.coords = coordsValue;
            }
        });
    }
}