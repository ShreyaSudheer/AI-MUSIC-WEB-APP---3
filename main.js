song = "";

leftWristX = 0;
leftWristY = 0;

scoreleftWrist = 0;


rightWristX = 0;
rightWristY = 0;


function preload()
{
    song = loadSound('music.mp3');
}
function setup()
{
    canvas = createCanvas(600, 500);  
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet is Initialized");
}
function draw()
{
    image(video, 0, 0, 600, 500);
    fill('##FF0000');
    stroke('#FF0000')
}
function song_name()
{
    song.play();
    song.rate(1);
    song.setVolume(1);
}
function gotPoses(results)
{
    if(results.length > 0)
    {


        console.log(results);
        leftWristX = results[0].leftWrist.pose.x;
        leftWristY = results[0].leftWrist.pose.y;
        console.log("leftWristX = " + leftWristX + "leftWristY" + leftWristY);

        rightWristX = results[0].rightWrist.pose.x;
        rightWristY = results[0].rightWrist.pose.y;
        console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);

    }
}