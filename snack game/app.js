let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let snake = [
    {x: 100, y: 100},
    {x: 90, y: 100},
    {x: 80, y: 100}
];

let food = {
    x: 200,
    y: 200
};

let dx = 10;
let dy = 0;

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
    }
}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 10, 10);
}

function moveSnake() {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

    snake[0].x += dx;
    snake[0].y += dy;
}

function collision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            alert("Game Over!");
            return true;
        }
    }

    if (snake[0].x < 0 || snake[0].x > 390 || snake[0].y < 0 || snake[0].y > 390) {
        alert("Game Over!");
        return true;
    }

    return false;
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.key === "ArrowUp" && dy === 0) {
        dx = 0;
        dy = -10;
    } else if (event.key === "ArrowDown" && dy === 0) {
        dx = 0;
        dy = 10;
    } else if (event.key === "ArrowLeft" && dx === 0) {
        dx = -10;
        dy = 0;
    } else if (event.key === "ArrowRight" && dx === 0) {
        dx = 10;
        dy = 0;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
    moveSnake();

    if (snake[0].x === food.x && snake[0].y === food.y) {
        snake.push({x: snake[snake.length - 1].x - 10, y: snake[snake.length - 1].y});
        food.x = Math.floor(Math.random() * 39) * 10;
        food.y = Math.floor(Math.random() * 39) * 10;
    }

    if (collision()) {
        return;
    }

    setTimeout(gameLoop, 100);
}

gameLoop();
