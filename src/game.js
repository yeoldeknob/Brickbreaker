import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';
import { buildLevel, level1 } from '/src/levels.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }
    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        let bricks = buildLevel(this, level1);
        new InputHandler(this.paddle);
        this.gameObjects = [this.ball, this.paddle, ...bricks];
    }
    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));

        this.gameObjects = this.gameObjects.filter(
            object => !object.markedForDeletion
        );
    }
    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}
