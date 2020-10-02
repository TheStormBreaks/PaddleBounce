var ball,img,paddle,paddle_img;
function preload() {
  img=loadImage("ball.png")
  paddle_img=loadImage("paddle.png")
  
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(200,200,10,10);
  ball.addImage("ball",img);
  paddle=createSprite(350,200,10,10);
  paddle.addImage(paddle_img);
  ball.velocityX= 9;

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounceOff(paddle,randomVelocity);

  
  
  if(keyDown(UP_ARROW)){
    paddle.y=paddle.y-20
     
  }
  
  if(keyDown(DOWN_ARROW)){
    paddle.y=paddle.y+20
    }
  
    drawSprites();
  
}

function randomVelocity(){
  ball.velocityY=random(+5,-5)

}

