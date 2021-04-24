export default {
    canvas: {
        width: 1000,
        height: 700,
    },
    spawnCoords: {
        firstPlayer: {
            x: 10,
            y: 200,
        },
        secondPlayer: {
            x: 900,
            y: 200,
        },
        ball: {
            x: 400,
            y: 220,
        }
    },
    shapes: {
        firstPlayer: {
            width: 20,
            height: 100,
            color: 'red'
        },
        secondPlayer: {
            width: 20,
            height: 100,
            color: 'red'
        },
        ball: {
            width: 20,
            height: 20,
            color: 'green'
        }
    },
    players: {
        FIRST_PLAYER: 'FIRST_PLAYER',
        SECOND_PLAYER: 'SECOND_PLAYER',
    },
    initialSpeed: {
        playerSpeed: 10,
        ballSpeed: 150,
    },
    defaultCurrentPlayerInfo: {
        playerType: 'FIRST_PLAYER',
        playerName: 'Pavel',
    }
};