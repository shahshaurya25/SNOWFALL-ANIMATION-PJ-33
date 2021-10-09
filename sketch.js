const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, bgImage;
var santa, santaImage;
var counter = 0;
var snowflake = [];
var santaSound;

function preload() {
  santaSound = loadSound("Santa Sound Effect.mp3")
  bgImage = loadImage("snow2.jpg");
  santaImage = loadAnimation("santa/Santa Frame 1.png", "santa/Santa Frame 2.png",
    "santa/Santa Frame 3.png", "santa/Santa Frame 4.png", "santa/Santa Frame 5.png",
    "santa/Santa Frame 6.png", "santa/Santa Frame 7.png", "santa/Santa Frame 8.png",
    "santa/Santa Frame 9.png", "santa/Santa Frame 10.png", "santa/Santa Frame 11.png",
    "santa/Santa Frame 12.png", "santa/Santa Frame 13.png", "santa/Santa Frame 14.png",
    "santa/Santa Frame 15.png", "santa/Santa Frame 16.png");
}

function setup() {
  createCanvas(1289, 621.4);
  engine = Engine.create();
  world = engine.world;

  santa = createSprite(200, 550);
  santa.addAnimation("Walking", santaImage);
}

function draw() {
  background(bgImage);
  frameRate(120);

  if (santa.x <= 200 || santa.x > 1100) {
    santaSound.play();
  }

  if (santa.x > 1100) {
    santa.mirrorX(santa.mirrorX() * -1);
    santa.velocityX = -2;
  }

  if (santa.x <= 200) {
    if (counter > 0) {
      santa.mirrorX(santa.mirrorX() * -1);
    }
    santa.velocityX = 2;
    counter += 1;
  }

  if (frameCount % 8 === 0) {
    snowflake.push(new Snowflake(Math.round(random(20, 1279)), -30, 40));
    snowflake.scale = 2;
  }

  for (var s = 0; s < snowflake.length; s++) {
    snowflake[s].display();
  }

  drawSprites();

  Engine.update(engine);
}