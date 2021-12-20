nosex = 0
nosey = 0
function preload(){
    mustache = loadImage('https://i.postimg.cc/PqM0jFHM/handlebar-mustache-png.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0){
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y - 15;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
        console.log(results)
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    //fill(255,0,0);
   // stroke(255,0,0);
   // circle(nosex, nosey, 20);
   image(mustache, nosex, nosey, 30, 30)
}