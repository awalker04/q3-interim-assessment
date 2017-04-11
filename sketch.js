var numbers = [15, 22, 48, 37];
var words = ["Amaiya", "is", "the","best"];

var a = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(150);
    
    if(mouseX > 300){
        background(255,150,0);
        ellipse(300,200,50,50);
        line(100,300,400,200);
    }
    else{
        background(0);
    }
    
    for(var i = 0; i < 4; i++){
        stroke(255);
        noFill();
        ellipse((i+1)*100,200,numbers[i], numbers[i]);
    }
    
    fill(255,0,150);
    textSize(40);
    text(words[a], 230, 150);

}

function mousePressed(){
    a++;
    if(a==words.length){
        a=0;
    }
}