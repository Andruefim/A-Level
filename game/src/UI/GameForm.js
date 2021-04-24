import {Component } from './Component';

export class GameForm extends Component {
    constructor({currentPlayerInfo, ...props}) {
        super(props);
        this.formSelector = '.menu__form';
        this.rootSelector = '.menu';
        this.currentPlayerInfo = currentPlayerInfo;
    }

    render() {
        setTimeout(this.setupListeners.bind(this), 0);

        return this.prerender(`
            <div class="menu">
                <form class="menu__form">
                    <input name="playerName" placeholder="Enter your name..." class="menu__form__field" type="text">
                    <button class="menu__form__field" type="submit">Play</button>
                </form>
            </div>
        `);
    }

    setupListeners() {
        document
            .querySelector(this.formSelector)
            .addEventListener('submit', this.onFormSubmit.bind(this));
    }

    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const playerName = formData.get("playerName");
        console.log('type: ', this.currentPlayerInfo.playerType);
        firebase.database().ref(`/${this.currentPlayerInfo.playerType}_NAME`).set(playerName);
        console.log({playerName});
        this.unmount();
    }

    unmount() {
        const rootEl = document.querySelector(this.rootSelector);
        rootEl.remove();
    };
}