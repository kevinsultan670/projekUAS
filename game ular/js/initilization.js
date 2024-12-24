function initGame() {
  direction = "right";
  snake = [{ x: 9 * box, y: 10 * box }];
  food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
  };
  score = 0;
  drawGame();
}

function restartGame() {
  initGame();
}
