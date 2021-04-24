import config from '../config';

export class Store {
    constructor() {
        this.state = {
            firstPlayerName: {
                value: '',
                dbName: `${config.players.FIRST_PLAYER}_NAME`
            },
            secondPlayerName: {
                value: '',
                dbName: `${config.players.SECOND_PLAYER}_NAME`
            },
            [`${config.players.FIRST_PLAYER}_COORDS`]: {
                value: '',
                dbName: `${config.players.FIRST_PLAYER}_COORDS`
            },
            [`${config.players.SECOND_PLAYER}_COORDS`]: {
                value: '',
                dbName: `${config.players.SECOND_PLAYER}_COORDS`
            },
            isGameOn: {
                value: false,
                dbName: 'isGameOn'
            },
            BALL_COORDS: {
                value: null,
                dbName: 'BALL_COORDS'
            }
        };
    }

    syncWithDB(subscribeKeys, callback) {
        subscribeKeys.forEach(subscribeKey =>
            firebase
                .database()
                .ref('/' + this.state[subscribeKey].dbName)
                .on('value', (snapshot) => {
                    this.state[subscribeKey].value = snapshot.val();
                    callback(this.state);
                })    
        );
    }

    getValueByRef(ref) {
        return new Promise(resolve =>
            firebase
                .database()
                .ref(ref)
                .on('value', (snapshot) => {
                    resolve(snapshot.val());
                })
        );
    }
}