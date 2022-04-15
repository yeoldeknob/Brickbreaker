import Game from '/src/game.js';

export default class InputHandler {
    constructor(paddle, game) {
        document.addEventListener('keydown', event => {
            switch (event.key) {
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;
                case 'ArrowRight':
                    paddle.moveRight();
                    break;
            }
        });
        document.addEventListener('keyup', event => {
            switch (event.key) {
                case 'ArrowLeft':
                    if (paddle.speed < 0) {
                        paddle.stop();
                    }
                    break;
                case 'ArrowRight':
                    if (paddle.speed > 0) {
                        paddle.stop();
                    }
                    break;
                case ' ':
                    game.togglePause();
                    break;
            }
        });
    }
}
