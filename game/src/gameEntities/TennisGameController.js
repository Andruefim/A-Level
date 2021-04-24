import config from '../config';
import { Player } from './Player';
import { Ball } from './Ball';
import { Rectangle } from '../canvas/Ractangle';
import { Circle } from '../canvas/Circle';
import { Store } from '../store/Store';

export class TennisGameController {
    constructor({canvasEl, spawnCoords, shapes, currentPlayerInfo, initialSpeed}) {
        this.canvasEl = canvasEl;
        this.ctx = this.canvasEl.getContext('2d');
        this.spawnCoords = spawnCoords;
        this.shapes = shapes;
        this.currentPlayerInfo = currentPlayerInfo;
        this.initialSpeed = initialSpeed;
        this.renderer = [];
        this.isGameOn = false;
    }

    init() {
        this._spawnPlayers();
    }

    _spawnPlayers() {
        const firstPlayer = new Player({
            element: new Rectangle({initCoords: this.spawnCoords.firstPlayer, shape: {ctx: this.ctx, ...this.shapes.firstPlayer}}),
            renderer: this.renderer,
            playerType: config.players.FIRST_PLAYER,
            speed: this.initialSpeed.playerSpeed,
        });
        const secondPlayer = new Player({
            element: new Rectangle({initCoords: this.spawnCoords.secondPlayer, shape: {ctx: this.ctx, ...this.shapes.secondPlayer}}),
            renderer: this.renderer,
            playerType: config.players.SECOND_PLAYER,
            speed: this.initialSpeed.playerSpeed,
        });
        const ball = new Ball({
            element: new Circle({initCoords: this.spawnCoords.ball, shape: {ctx: this.ctx, ...this.shapes.ball}}),
            renderer: this.renderer,
            speed: this.initialSpeed.ballSpeed,
            firstPlayer,
            secondPlayer,
        });
        firstPlayer.spawn();
        secondPlayer.spawn();
        ball.spawn();

        const store = new Store();
        store.syncWithDB(['isGameOn'], (state) => {
            const isGameOn = state.isGameOn.value;
            if (isGameOn && !this.isGameOn) {
                this.isGameOn = isGameOn;
                if (this.currentPlayerInfo.playerType === config.players.FIRST_PLAYER) {
                    firstPlayer.listenInputs();
                    secondPlayer.listenServerUpdates();
                    ball.run();
                } else {
                    firstPlayer.listenServerUpdates();
                    secondPlayer.listenInputs();
                    ball.listenServerUpdates();
                }
            }
        });
    }

    render() {
        this.ctx.clearRect(0, 0, 1000, 700);
        this.renderer.forEach(el => el.render());
    }
}