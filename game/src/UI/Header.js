import { Component } from './Component';


export class Header extends Component {
    constructor({
        firstPlayerName,
        secondPlayerName,
        firstPlayerScore,
        secondPlayerScore,
        ...props
    }) {
        super(props);

        this.firstPlayerName = firstPlayerName;
        this.secondPlayerName = secondPlayerName;
        this.firstPlayerScore = firstPlayerScore;
        this.secondPlayerScore = secondPlayerScore;
    }

    render() {
        return this.prerender(`
            <div class="header">
                <div class="player_1">
                    <div class="first_player_name">
                        <p>${this.firstPlayerName || ''}</p>
                    </div>
                    <div class="first_victory_count">
                        <p>${this.firstPlayerScore || 0}</p>
                    </div>
                    </div>
                    <div class="score">
                    <p>Score</p>
                </div>
                <div class="player_2">
                    <div class="second_victory_count">
                        <p>${this.secondPlayerScore || 0}</p>
                    </div>
                    <div class="second_player_name">
                        <p>${this.secondPlayerName || 'Awaiting player...'}</p>
                    </div>
                </div>
            </div>
        `);
    }
}