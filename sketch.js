var ball, img, paddle, paddle_img;
var score = 0; // Initialize the score counter

function preload() {
  img = loadImage("ball.png");
  paddle_img = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 10, 10);
  ball.addImage("ball", img);
  paddle = createSprite(350, 200, 10, 10);
  paddle.addImage(paddle_img);
  ball.velocityX = 9;
}

function draw() {
  background(205, 153, 0);
  edges = createEdgeSprites();

  ball.bounceOff(edges[0]); // Left edge
  ball.bounceOff(edges[2]); // Top edge
  ball.bounceOff(edges[3]); // Right edge
  
  ball.bounceOff(paddle, randomVelocity);

  // Check if the ball touches the bottom edge (under the paddle)
  if (ball.isTouching(edges[1])) { // Bottom edge
    textSize(32);
    fill(255, 0, 0);
    text("Game Lost", 120, 200);
    noLoop(); // Stop the draw loop to end the game
  }

  if (keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 20;
  }

  if (keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20;
  }

  drawSprites();

  // Display the score
  textSize(24);
  fill(0);
  text("Score: " + score, 10, 30);
}

// Modify the randomVelocity function to increase the score
function randomVelocity() {
  ball.velocityY = random(-5, 5);
  score++; // Increment the score by 1 every time the ball bounces off the paddle
}
