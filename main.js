var Name = ['apple',"baseball",'door','clock','monkey','tree','ice_cream','fish'];
var numb = Math.round(Math.random()*8);
var mame = Name[numb]
console.log(mame)
var time = 0;
var score = 0;
document.getElementById("drawing").innerHTML = "Sketch to be drawn is " + mame;
timer()
function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");  
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function clearCanvas(){
    background("white");
}
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}
function draw(){
    stroke(0);
    strokeWeight(12);
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
        console.log(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function timer(){
    
        while (time <= 1000){
            time =time+1;
            document.getElementById("Timer").innerHTML = "Timer :"+time;
            console.log(time)}
}
function classifyCanvas(){
    classifier.classify(canvas,gotresult);
}
function gotresult(error,results){
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById("update").innerHTML = 'Your sketch: '+ results[0].label;
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    console.log(utterThis)
    synth.speak(utterThis);
    check();
    console.log(results[0].label);
    function check(){
        if (results[0].label==mame){
            score = score+20;
            console.log(score);
            background("white");  
            document.getElementById("Score").innerHTML = "Score :" + score;
            numb  = Math.round(Math.random()*7);
            mame = Name[numb];   
            document.getElementById("drawing").innerHTML = "Sketch to be drawn is " + mame;
        }
    }
}



