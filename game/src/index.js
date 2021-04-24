import './styles/index.css';
import config from './config';
import { TennisGameController } from './gameEntities/TennisGameController';
import { GameForm } from './UI/GameForm';
import { ResetButton } from './UI/ResetButton';
import { StartButton } from './UI/StartButton';
import { Header } from './UI/Header';
import { Store } from './store/Store';

document.addEventListener('DOMContentLoaded', async function() {
    firebase.app();
    const store = new Store();
    const gameEl = document.querySelector('.game');
    
    const { shapes, spawnCoords, initialSpeed, players } = config;

    const firstPlayerName = await store.getValueByRef(`/${config.players.FIRST_PLAYER}_NAME`);
    const CURRENT_PLAYER_TYPE = !firstPlayerName ? players.FIRST_PLAYER : players.SECOND_PLAYER;
    console.log({CURRENT_PLAYER_TYPE});
    let currentPlayerInfo = {
        playerType: CURRENT_PLAYER_TYPE,
    };
    const tennisGameController = new TennisGameController({
        canvasEl: document.getElementById('canvas'),
        spawnCoords,
        shapes,
        currentPlayerInfo,
        initialSpeed,
    });
    tennisGameController.init();

    gameEl.appendChild(new GameForm({
        currentPlayerInfo,
    }).render());
    gameEl.appendChild(new ResetButton().render());
    gameEl.appendChild(new StartButton().render());
    
    store.syncWithDB(['firstPlayerName', 'secondPlayerName'], (state) => {
        const headerRootEl = document.querySelector('.header');
        headerRootEl && headerRootEl.remove();
        const header = new Header({
            firstPlayerName: state.firstPlayerName.value,
            secondPlayerName: state.secondPlayerName.value,
        });
        gameEl.prepend(header.render());
    });
    
    setInterval(() => {
        tennisGameController.render();
    }, 50);
  });



 // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.firestore().doc('/foo/bar').get().then(() => { });
    // firebase.functions().httpsCallable('yourFunction')().then(() => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    // firebase.analytics(); // call to activate
    // firebase.analytics().logEvent('tutorial_completed');
    // firebase.performance(); // call to activate
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
