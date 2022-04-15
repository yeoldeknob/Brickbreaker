import { detectCollision } from '/src/collisionDetection.js';

export default class Ball {
    constructor(game) {
        this.image = document.getElementById('img_ball');
        this.speed = {
            x: 6,
            y: -6,
        };
        this.position = { x: 10, y: 300 };
        this.size = 16;
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
    }
    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size
        );
    }
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        // Does ball hit the left or right side?
        if (
            this.position.x + this.size > this.gameWidth ||
            this.position.x < 0
        ) {
            this.speed.x = -this.speed.x;
        }

        // Does ball hit the top or bottom?
        if (
            this.position.y + this.size > this.gameHeight ||
            this.position.y < 0
        ) {
            this.speed.y = -this.speed.y;
        }

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}
