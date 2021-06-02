var daar, zaar;
function preload() {
  dash = loadImage("img/dash.png");
  seen = loadImage("img/seen.png");
  stear = loadImage("img/stearing.png");
}

function setup() {
  createCanvas(1200, 800);

  man = createSprite(600, -160);
  man.scale = 3;
  man.addImage(seen);
  // man.zoomY = 10;
  edge = createEdgeSprites();

  boad = createSprite(600, 330);
  boad.scale = 0.7;
  boad.addImage(dash);

  wheel = createSprite(300, 310);
  wheel.scale = 0.5;
  wheel.addImage(stear);
}

function draw() {
  background("black");
  drawSprites();
  if (keyDown("w")) {
    man.velocityY = man.velocityY + 1;
    // man.velocityY = man.velocityY - 2;
    // man.velocityX = man.velocityX + 2;
    // man.velocityX = man.velocityX - 2;
  }
}
