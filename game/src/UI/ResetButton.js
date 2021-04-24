import { Component } from './Component';
import config from '../config';

export class ResetButton extends Component {
    constructor(props) {
        super(props);
        this.btnSelector = 'game__reset-button';
    }

    render() {
        setTimeout(this.setupListeners.bind(this), 0);
        return this.prerender(`
            <button class="${this.btnSelector}">
                Reset Game
            </button>
        `);
    }

    setupListeners() {
        document
            .querySelector(`.${this.btnSelector}`)
            .addEventListener('click', this.onClick);
    }

    onClick() {
        const resetStates = [
            `/${config.players.FIRST_PLAYER}_NAME`,
            `/${config.players.SECOND_PLAYER}_NAME`,
            `/${config.players.FIRST_PLAYER}_COORDS`,
            `/${config.players.SECOND_PLAYER}_COORDS`,
            `/BALL_COORDS`,
            `/isGameOn`,
        ];
        resetStates.forEach((key) => firebase.database().ref(key).set(null))
    }
}