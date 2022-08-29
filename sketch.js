var bg,bg_img;
var hoop,  hoop_img;
var player,player_img;
var basketball,basketball_img;
var score;
var restart, restart_img;





function preload(){
    bg_img = loadImage("backround.jpg");
     hoop_img = loadImage("hoop.png");
    player_img = loadImage("boy.png")
    basketball_img = loadImage("basketball.png")
    restart_img = loadImage("reset.png")
}


function setup(){
    createCanvas(1200,700);

    bg = createSprite(550,350);
    bg.addImage(bg_img);
    bg.scale=2.13;

    hoop = createSprite(550,100);
    hoop.addImage(hoop_img);
    
    player = createSprite(475,500);
    player.addImage(player_img);
 
    basketball = createSprite(400,400);
    basketball.addImage(basketball_img);
    basketball.scale = 0.0230

    hoop.debug=true;
    hoop.setCollider("rectangle", 0,170,0,10)
    
    restart = createSprite(50,50);
    restart.addImage(restart_img);
    //restart.visible = false;
    restart.scale = 0.2;

    score = 0;
    stroke("red");
    fill("red");
    textSize(20); 
}


function draw(){
    background(0);

basketball.velocityY =-5
basketball.velocityX =3

if(basketball.collide(hoop)){
    basketball.visible=false;
    score = score+1;

}
if(mousePressedOver(restart)){
    basketball.visible=true  ;
   // score = score+1;
}


    drawSprites();
    text("Score: "+score, 250, 50);
}