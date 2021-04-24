import { Component } from './Component';
import { Store } from '../store/Store';

export class StartButton extends Component {
    constructor(props) {
        super(props);
        this.btnSelector = 'game__start-button';
    }

    render() {
        setTimeout(this.setupListeners.bind(this), 0);
        return this.prerender(`
            <button class="${this.btnSelector}">
                Start Game
            </button>
        `);
    }

    setupListeners() {
        const btn = document.querySelector(`.${this.btnSelector}`);
        btn.addEventListener('click', this.onClick.bind(this));
        const store = new Store();
        store.syncWithDB(['isGameOn'], (state) => {
            const isGameOn = state.isGameOn.value;
            isGameOn && btn && btn.remove();
        });
    }

    onClick() {
        firebase.database().ref('/isGameOn').set(true);
    }
}