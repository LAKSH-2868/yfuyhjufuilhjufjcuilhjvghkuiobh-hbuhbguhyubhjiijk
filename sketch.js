/*var PLAY = 1;
var END1 = 0;
var END2 = 2;
var END3 = 3;*/
var gamestate = "play";
var mario,mario2,marioback,marioback2,mask,maskSp,sanitizer,sanitizerSp,dettol,dettolSp,soap,soapSp,virus,virusSp;
var flag,flagSp,hospital,hospitalSp,home,homeSp;
var Smario,marioSp,marioJ,tunnel,t1,t2,t3,t4,t5,t6,tunnelSp;
var maskGroup,virusGroup,dettolGroup,sanitizerGroup,soapGroup;
var backGround;
var InvisibleG,leftE,rightE;
var score = 0;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,brick,brick1,brick2,brick3;
var m1,m2,m3,m4;
var s1,s2,s3,s4;
var so1,so2,so3,so4;
var d1,d2,d3,d4;
var v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12;
var son1,son2,son3,son4,son5,son6,son7,son8,son9;

function preload(){
    backGround = loadImage("IMAGES/MARIO BACKGROUND.jpg");
    marioback2 = loadAnimation("IMAGES/M11.png");
    marioback = loadAnimation("IMAGES/M11.png","IMAGES/M22.png","IMAGES/M33.png","IMAGES/M44.png")
    mario2 = loadAnimation("IMAGES/M1.png");
    mario = loadAnimation("IMAGES/M1.png","IMAGES/M2.png","IMAGES/M3.png","IMAGES/M4.png")
    marioJ = loadAnimation("IMAGES/M5.png");
    virus = loadImage("IMAGES/CORONA.png");
    mask = loadImage("IMAGES/MASK.png");
    sanitizer = loadImage("IMAGES/SANITIZER..png");
    dettol = loadImage("IMAGES/DETTOL.png");
    soap = loadImage("IMAGES/SOAP.png");
    hospital = loadImage("IMAGES/HOSPITAL.jpg");
    flag = loadImage("IMAGES/FLAG.gif");
    home = loadImage("IMAGES/FINISHING HOUSE.png");
    tunnel = loadImage("IMAGES/TUNNEL.png");
    brick = loadImage("IMAGES/BRICK.gif");
    brick1 = loadImage("IMAGES/BRICK1.png");
    brick2 = loadImage("IMAGES/BRICK2.png");
    brick3 = loadImage("IMAGES/BRICK3.png");

    son1 = loadSound("SOUND/CATCHING VIRUS.wav");
    son2 = loadSound("SOUND/COIN.wav");
    son3 = loadSound("SOUND/FLAG.wav");
    son4 = loadSound("SOUND/GAME OVER.wav");
    son5 = loadSound("SOUND/JUMPB.wav");
    son6 = loadSound("SOUND/MARIO DIES.wav");
    son7 = loadSound("SOUND/REACHING HOSPITAL.wav");
    son8 = loadSound("SOUND/WARNING.wav");
    son9 = loadSound("SOUND/FULL SOUND.mp3");


}

function setup(){
    createCanvas(displayWidth,displayHeight);
    marioSp = createSprite(100,800/2);
    marioSp.scale = 2;
    marioSp.addAnimation("marioo",mario2);
    marioSp.addAnimation("mario",mario);
    marioSp.addAnimation("mariooo",marioback);
    marioSp.addAnimation("mariojump",marioJ);
    marioSp.addAnimation("marioooo",marioback2);

    InvisibleG = createSprite(displayWidth*4,displayHeight-100,displayWidth*9,5);
    InvisibleG.visible = false;

    leftE = createSprite(-505,displayHeight/2,5,displayHeight);
    leftE.visible = false; 

    rightE = createSprite(displayWidth*8-650,displayHeight/2,5,displayHeight);
    rightE.visible = false;

    t1 = createSprite(displayWidth/2-40,InvisibleG.y-50);
    t2 = createSprite(displayWidth*1.5,InvisibleG.y-50);
    t3 = createSprite(displayWidth*3,InvisibleG.y-50);
    t4 = createSprite(displayWidth*4.5,InvisibleG.y-50);
    t5 = createSprite(displayWidth*6,InvisibleG.y-50);
    t6 = createSprite(displayWidth*7.5,InvisibleG.y-50);
    
    t1.addImage(tunnel);
    t1.scale = 1.3;
    t2.addImage(tunnel);
    t2.scale = 1.3
    t3.addImage(tunnel);
    t3.scale = 1.3
    t4.addImage(tunnel);
    t4.scale = 1.3
    t5.addImage(tunnel);
    t5.scale = 1.3
    t6.addImage(tunnel);
    t6.scale = 1.3

    b1 = createSprite(displayWidth,displayHeight/2);
    b1.addImage(brick1);

    b2  = createSprite(displayWidth-250,displayHeight/2+100);
    b2.addImage(brick);

    b3  = createSprite(displayWidth*2.5,displayHeight/2+200);
    b3.addImage(brick2);

    b4= createSprite(displayWidth*2.5-250,displayHeight/2+75);
    b4.addImage(brick2);

    b5  = createSprite(displayWidth*2,displayHeight/2-75);
    b5.addImage(brick1);

    b6 = createSprite(displayWidth*3+250,displayHeight/2-75);
    b6.addImage(brick3);

    b7 = createSprite(displayWidth*3+500,displayHeight/2+75);
    b7.addImage(brick2);

    b8 = createSprite(displayWidth*4+50,displayHeight/2-55);
    b8.addImage(brick);

    b9 = createSprite(displayWidth*4+100,displayHeight/2-35);
    b9.addImage(brick);

    b10 = createSprite(displayWidth*4+150,displayHeight/2-15);
    b10.addImage(brick);

    b11 = createSprite(displayWidth*4+200,displayHeight/2+5);
    b11.addImage(brick);

    b12 = createSprite(displayWidth*4+250,displayHeight/2+25);
    b12.addImage(brick);

    b13 = createSprite(displayWidth*4+300,displayHeight/2+45);
    b13.addImage(brick);

    b14 = createSprite(displayWidth*4,displayHeight/2-55);
    b14.addImage(brick);

    b15 = createSprite(displayWidth*4-50,displayHeight/2-35);
    b15.addImage(brick);

    b16 = createSprite(displayWidth*4-100,displayHeight/2-15);
    b16.addImage(brick);

    b17 = createSprite(displayWidth*4-150,displayHeight/2+5);
    b17.addImage(brick);

    b18 = createSprite(displayWidth*4-200,displayHeight/2+25);
    b18.addImage(brick);

    b19 = createSprite(displayWidth*4-250,displayHeight/2+45);
    b19.addImage(brick);

    b20 = createSprite(displayWidth*4+350,displayHeight/2+65);
    b20.addImage(brick);

    b21 = createSprite(displayWidth*5,displayHeight/2+65);
    b21.addImage(brick1);

    b22 = createSprite(displayWidth*5+350+350,displayHeight/2+65);
    b22.addImage(brick2);

    b23 = createSprite(displayWidth*5+350+500,displayHeight/2+30);
    b23.addImage(brick2);

    b24 = createSprite(displayWidth*6+700,displayHeight/2+65);
    b24.addImage(brick3);

    b25 = createSprite(displayWidth*6+1400,displayHeight/2+65);
    b25.addImage(brick2);

    maskSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
    maskSp.scale = 0.1;
    maskSp.addImage(mask);

    m1 = createSprite((random(300,1200)),(random(100,600)));
    m1.scale = 0.1;
    m1.addImage(mask);

    m2 = createSprite((random(1500,2500)),(random(100,600)));
    m2.scale = 0.1;
    m2.addImage(mask);

    m3 = createSprite((random(4000,5500)),(random(100,600)));
    m3.scale = 0.1;
    m3.addImage(mask);

    m4 = createSprite((random(6700,10000)),(random(100,600)));
    m4.scale = 0.1;
    m4.addImage(mask);

    dettolSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
    dettolSp.scale = 0.2;
    dettolSp.addImage(dettol);

    d1 = createSprite((random(300,1200)),(random(100,600)));
    d1.scale = 0.2;
    d1.addImage(dettol);

    d2 = createSprite((random(1500,2500)),(random(100,600)));
    d2.scale = 0.2;
    d2.addImage(dettol);

    d3 = createSprite((random(4000,5500)),(random(100,600)));
    d3.scale = 0.2;
    d3.addImage(dettol);

    d4 = createSprite((random(6700,10000)),(random(100,600)));
    d4.scale = 0.2;
    d4.addImage(dettol);

    sanitizerSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
    sanitizerSp.scale = 0.1;
    sanitizerSp.addImage(sanitizer);

    s1 = createSprite((random(300,1200)),(random(100,600)));
    s1.scale = 0.1;
    s1.addImage(sanitizer);

    s2 = createSprite((random(1500,2500)),(random(100,600)));
    s2.scale = 0.1;
    s2.addImage(sanitizer);

    s3 = createSprite((random(4000,5500)),(random(100,600)));
    s3.scale = 0.1;
    s3.addImage(sanitizer);

    s4 = createSprite((random(6700,10000)),(random(100,600)));
    s4.scale = 0.1;
    s4.addImage(sanitizer);

    soapSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
    soapSp.scale = 0.1;
    soapSp.addImage(soap);

    so1 = createSprite((random(300,1200)),(random(100,600)));
    so1.scale = 0.1;
    so1.addImage(soap);

    so2 = createSprite((random(1500,2500)),(random(100,600)));
    so2.scale = 0.1;
    so2.addImage(soap);

    so3 = createSprite((random(4000,5500)),(random(100,600)));
    so3.scale = 0.1;
    so3.addImage(soap);

    so4 = createSprite((random(6700,10000)),(random(100,600)));
    so4.scale = 0.1;
    so4.addImage(soap);

    v1 = createSprite(displayWidth/2+200,displayHeight-120);
    v1.scale = 0.3;
    v1.addImage(virus);
    v1.velocityX = 5;
    
    v2 = createSprite(displayWidth/2+500,v1.y);
    v2.scale = 0.3;
    v2.addImage(virus);
    v2.velocityX = 5;

    v3 = createSprite(displayWidth/2+800,v1.y);
    v3.scale = 0.3;
    v3.addImage(virus);
    v3.velocityX = 5;

    v4 = createSprite(displayWidth/2+1100,v1.y);
    v4.scale = 0.3;
    v4.addImage(virus);
    v4.velocityX = 5;

    v5 = createSprite(displayWidth/2+2200,v1.y);
    v5.scale = 0.3;
    v5.addImage(virus);
    v5.velocityX = 5;

    v6 = createSprite(displayWidth/2+2500,v1.y);
    v6.scale = 0.3;
    v6.addImage(virus);
    v6.velocityX = 5;

    v7 = createSprite(displayWidth/2+2800,v1.y);
    v7.scale = 0.3;
    v7.addImage(virus);
    v7.velocityX = 5;

    v8 = createSprite(displayWidth/2+3100,v1.y);
    v8.scale = 0.3;
    v8.addImage(virus);
    v8.velocityX = 5;

   
    virusGroup = new Group();
    dettolGroup = new Group();
    maskGroup = new Group();
    soapGroup = new Group();
    sanitizerGroup = new Group();
    }

function draw(){
    background("black");
    image(backGround,-600,0,displayWidth*8+1000,displayHeight);
    
    camera.x = marioSp.x;
    camera.y = displayHeight/2;
    leftE.x = camera.x-1000;
    textSize(50);
    fill("black");
    text("SCORE : "+score,marioSp.x,100);
    
    
    if(gamestate === "play"){
    son9.play();
   
    marioSp.velocityY = marioSp.velocityY+0.5;
    
    if(keyDown ("RIGHT_ARROW")){
        marioSp.changeAnimation("mario",mario);
       marioSp.x = marioSp.x+10;
       
    }
    if(keyDown ("LEFT_ARROW") && marioSp.x>0){
        marioSp.changeAnimation("mariooo",marioback);
        marioSp.x = marioSp.x-10; 

    }
    if(keyWentUp ("RIGHT_ARROW")){
        marioSp.changeAnimation("marioo",mario2);
        marioSp.velocityX = 0;
    }
    if(keyWentUp ("LEFT_ARROW")){
        marioSp.changeAnimation("marioooo",marioback2);
        marioSp.velocityX = 0;
    }
    if(keyWentUp("space")){
        marioSp.changeAnimation("marioo",mario2);
        son5.play();
    }   
    if(marioSp.isTouching(virusGroup)){
        virusGroup.destroyEach();
        virusSp = createSprite((random(displayWidth*8,displayWidth/2)),(random(100,650)),10,10);
        virusSp.scale = 0.2;
        virusSp.addImage(virus);
        score = score - 2;
        son1.play();
    }
    if(marioSp.isTouching(v1)){
        v1.destroy();
        score = score - 2;
        son1.play();
    }
    if(marioSp.isTouching(v2)){
        v2.destroy();
        score = score - 2;
        son1.play();
        }

    if(marioSp.isTouching(v3)){
        v3.destroy();
        score = score - 2;
        son1.play();
    }
    if(marioSp.isTouching(v4)){
        v4.destroy();
        score = score - 2;
        son1.play();
    }
    if(marioSp.isTouching(v5)){
        v5.destroy();
        score = score - 2;
        son1.play();
    }
    if(marioSp.isTouching(v6)){
        v6.destroy();
        score = score - 2;
        son1.play();
        }

    if(marioSp.isTouching(v7)){
        v7.destroy();
        score = score - 2;
        son1.play();
    }
    if(marioSp.isTouching(v8)){
        v8.destroy();
        score = score - 2; 
        son1.play();      
    }

    /*for(v=1;v<=25;v++){
        v = createSprite(random(0,displayWidth*8),random(100,650));
        v.addImage(virus);
        v.scale = 0.3;
        if(marioSp.isTouching(v)){
            v.destroy();
            score = score - 2; 
        }  
    }*/


    if(marioSp.isTouching(maskSp)){
        maskSp.destroy();
        maskSp = createSprite((random(displayWidth*8,displayWidth/2)),(random(100,650)),10,10)
        maskSp.scale = 0.1;
        maskSp.addImage(mask);
        score = score + 2;
        son2.play();
    }

        if(marioSp.isTouching(m1)){
            m1.destroy();
            m1 = createSprite((random(300,1200)),(random(100,600)));
            m1.scale = 0.1;
            m1.addImage(mask);
            score = score + 2;
            son2.play();
        }
        if(marioSp.isTouching(m2)){
            m2.destroy();
            m2 = createSprite((random(1500,2500)),(random(100,600)));
            m2.scale = 0.1;
            m2.addImage(mask);
            score = score + 2;
            son2.play();
            }

        if(marioSp.isTouching(m3)){
            m3.destroy();
            m3 = createSprite((random(4000,5500)),(random(100,600)));
            m3.scale = 0.1;
            m3.addImage(mask);
            score = score + 2;
            son2.play();
        }
        if(marioSp.isTouching(m4)){
            m4.destroy();
            m4 = createSprite((random(6700,10000)),(random(100,600)));
            m4.scale = 0.1;
            m4.addImage(mask);
            score = score + 2;
            son2.play();
        }

    if(marioSp.isTouching(sanitizerSp)){
        sanitizerSp.destroy();
        score = score + 2;
        sanitizerSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
        sanitizerSp.scale = 0.1;
        sanitizerSp.addImage(sanitizer);
        son2.play();
    }

    if(marioSp.isTouching(s1)){
        s1.destroy();
        s1 = createSprite((random(300,1200)),(random(100,600)));
        s1.scale = 0.1;
        s1.addImage(sanitizer);
        score = score + 2;
        son2.play();
    }
    if(marioSp.isTouching(s2)){
        s2.destroy();
        s2 = createSprite((random(1500,2500)),(random(100,600)));
        s2.scale = 0.1;
        s2.addImage(sanitizer);
        score = score + 2;
        son2.play();
        }

    if(marioSp.isTouching(s3)){
        s3.destroy();
        s3 = createSprite((random(4000,5500)),(random(100,600)));
        s3.scale = 0.1;
        s3.addImage(sanitizer);
        score = score + 2;
        son2.play();
    }
    if(marioSp.isTouching(s4)){
        s4.destroy();
        s4 = createSprite((random(6700,10000)),(random(100,600)));
        s4.scale = 0.1;
        s4.addImage(sanitizer);
        score = score + 2;
        son2.play();
    }

    if(marioSp.isTouching(soapSp)){
        soapSp.destroy();
        score = score + 2;
        soapSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
        soapSp.scale = 0.1;
        soapSp.addImage(soap);
        son2.play();
    }

    if(marioSp.isTouching(so1)){
        so1.destroy();
        so1 = createSprite((random(300,1200)),(random(100,600)));
        so1.scale = 0.1;
        so1.addImage(soap);
        score = score + 2;
        son2.play();
    }
    if(marioSp.isTouching(so2)){
        so2.destroy();
        so2 = createSprite((random(1500,2500)),(random(100,600)));
        so2.scale = 0.1;
        so2.addImage(soap);
        score = score + 2;
        son2.play();
        }

    if(marioSp.isTouching(so3)){
        so3.destroy();
        so3 = createSprite((random(4000,5500)),(random(100,600)));
        so3.scale = 0.1;
        so3.addImage(soap);
        score = score + 2;
        son2.play();
    }
    if(marioSp.isTouching(so4)){
        so4.destroy();
        so4 = createSprite((random(6700,10000)),(random(100,600)));
        so4.scale = 0.1;
        so4.addImage(soap);
        score = score + 2;
        son2.play();
    }

    if(marioSp.isTouching(dettolSp)){
        dettolSp.destroy();
        score = score + 2;
        dettolSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
        dettolSp.scale = 0.2;
        dettolSp.addImage(dettol);
        son2.play();
    }
    if(marioSp.isTouching(d1)){
        d1.destroy();
        d1 = createSprite((random(300,1200)),(random(100,600)));
        d1.scale = 0.2;
        d1.addImage(dettol);
        score = score + 2;
        son2.play();
    }
    if(marioSp.isTouching(d2)){
        d2.destroy();
        d2 = createSprite((random(1500,2500)),(random(100,600)));
        d2.scale = 0.2;
        d2.addImage(dettol);
        score = score + 2;
        son2.play();
        }

    if(marioSp.isTouching(d3)){
        d3.destroy();
        d3 = createSprite((random(4000,5500)),(random(100,600)));
        d3.scale = 0.2;
        d3.addImage(dettol);
        score = score + 2;
        son2.play();
    }
    if(marioSp.isTouching(d4)){
        d4.destroy();
        d4 = createSprite((random(6700,10000)),(random(100,600)));
        d4.scale = 0.2;
        d4.addImage(dettol);
        score = score + 2;
        son2.play();
    }
   
    marioSp.collide(InvisibleG);
    marioSp.collide(leftE);
    marioSp.collide(rightE);
    marioSp.collide(t1);
    marioSp.collide(t2);
    marioSp.collide(t3);
    marioSp.collide(t4);
    marioSp.collide(t5);
    marioSp.collide(t6);
    marioSp.collide(b1);
    marioSp.collide(b2);
    marioSp.collide(b3);
    marioSp.collide(b4);
    marioSp.collide(b5);
    marioSp.collide(b6);
    marioSp.collide(b7);
    marioSp.collide(b8);
    marioSp.collide(b9);
    marioSp.collide(b10);
    marioSp.collide(b11);
    marioSp.collide(b12);
    marioSp.collide(b13);
    marioSp.collide(b14);
    marioSp.collide(b15);
    marioSp.collide(b16);
    marioSp.collide(b17);
    marioSp.collide(b18);
    marioSp.collide(b19);
    marioSp.collide(b20);
    marioSp.collide(b21);
    marioSp.collide(b22);
    marioSp.collide(b23);
    marioSp.collide(b24);
    marioSp.collide(b25);
    v1.bounceOff(t1);
    v1.bounceOff(t2);
    v2.bounceOff(t1);
    v2.bounceOff(t2);
    v3.bounceOff(t1);
    v3.bounceOff(t2);
    v4.bounceOff(t1);
    v4.bounceOff(t2); 
    v1.bounce(v2);
    v2.bounce(v3);
    v3.bounce(v4);
    v4.bounce(v1);
    v5.bounceOff(t2);
    v5.bounceOff(t3);
    v6.bounceOff(t2);
    v6.bounceOff(t3);
    v7.bounceOff(t2);
    v7.bounceOff(t3);
    v8.bounceOff(t2);
    v8.bounceOff(t3); 
    v5.bounce(v6);
    v6.bounce(v7);
    v7.bounce(v8);
    v8.bounce(v5);

    if(score >=-20 && score<0 && marioSp.x>=displayWidth*8-1000){
        gamestate === "end1";
    }

    if(marioSp.x >=displayWidth*8-1000 && score>=0){
        gamestate === "end2";
    }

    if(score<0){
        gamestate === "end3";
    }    
    drawSprites();
}
else if(gamestate === "end1"){
    hospitalSp = createSprite(displayWidth*8-500,displayHeight-150);
    hospitalSp.addImage(hospital);
    text("YOU REACHED TO HOSPITAL DUE TO COVID-19",marioSp.x,350);
    son7.play();
}

else if (gamestate === "end2"){
    homeSp = createSprite(displayWidth*8-500,displayHeight-150);
    homeSp.addImage(home);
    flagSp = createSprite(displayWidth*8-250,displayHeight-150);
    flagSp.addImage(flag);
    text("YOU REACHED HOME SAFELY",marioSp.x,350);
    son3.play();
}

else if(gamestate === "end3"){
    marioSp.destroy();
    text("YOU DIED DUE TO COVID-19",marioSp.x,350);
    son6.play();
}


    
    }


function virusF(){
    if(frameCount%15 === 0){
        virusSp = createSprite(displayWidth*8-20,Math.round(random(400-100,600+50)),10,10);
        virusSp.scale = 0.1+0.2
        virusSp.addImage(virus);
        virusSp.velocityX = -20;
        //time = distance/speed(10000/20)
        virusSp.lifetime = 500;
        virusGroup.add(virusSp);
    }
}

function maskF(){
    if(frameCount%50 === 0){
        maskSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
        maskSp.scale = 0.1;
        maskSp.addImage(mask);
        maskGroup.add(maskSp);
    }
}

function sanitizerF(){
    if(frameCount%50 === 0){
        sanitizerSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        sanitizerSp.scale = 0.1;
        sanitizerSp.addImage(sanitizer);
        sanitizerGroup.add(sanitizerSp);
    }
}

function dettolF(){
    if(frameCount%50 === 0){
        dettolSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        dettolSp.scale = 0.2;
        dettolSp.addImage(dettol);
        dettolGroup.add(dettolSp);
    }
}

function soapF(){
    if(frameCount%50 === 0){
        soapSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        soapSp.scale = 0.2;
        soapSp.addImage(soap);
        soapGroup.add(soapSp);
    }
}

function keyPressed(){
    if(keyCode === 32 && marioSp.velocityY === 0){
        marioSp.changeAnimation("mariojump",marioJ);
        marioSp.velocityY = -15;
    }
}

function virusff(){

}