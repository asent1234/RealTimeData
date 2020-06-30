var ball, ballposref;
var database;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    ballposref = database.ref('ball/position')
    ballposref.on("value", readposition, showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writepos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writepos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writepos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writepos(0,+1);
    }
    drawSprites();
}
function readposition(data){
    ballpos = data.val();
    ball.x = ballpos.x
    ball.y = ballpos.y
}
function showerror(){
    console.log("error")
}
function writepos(x,y){
    ballposref = database.ref('ball/position')
    ballposref.set({
    x:ballpos.x + x,
    y:ballpos.y + y
    }  )
}