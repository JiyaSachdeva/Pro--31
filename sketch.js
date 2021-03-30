var walkingaa,walking;
var thunder1,thunder2,thunder3,thunder4,thunder;

function preload(){
    walkingaa = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");
    thunder3 = loadImage("thunder3.png");
    thunder4 = loadImage("thunder4.png");
}

function setup(){
   createCanvas(500,600);
    walking = createSprite(200,550,20,20);
    walking.addAnimation("walkingaa");

    
}

function draw(){
    background(0);
    thunderstome();

    var maxdrops = 100;
    var drops = [];
    for (var i=0; i < maxdrops; i++){
        drops.push(new Drop (random(0,400),random(0,400)))

    }
   
    drawSprites();
}   

function thunderstome(){
    if (frameCount%80===0){
        thunder = createSprite(200,100,20,20);
        thunder.x = Math.round(random(200,350));
        thunder.lifetime=5;
        var rand = Math.random(round(1,4));
        switch(rand){
            case 1:thunder.addImage ("thunder1");
            break;
            case 2: thunder.addImage("thunder2");
            break;
            case 3: thunder.addImage("thunder3");
            break;
            case 4: thunder.addImage("thunder4");
            break;
            default : break 
        }

    }
}