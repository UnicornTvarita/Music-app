function setup(){
c1 = createCanvas(500,400)
c1.center()
b1 = createCapture(VIDEO)
b1.hide()
pn = ml5.poseNet(b1,modelLoaded)
pn.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Your model is loaded✌🏻🦄")
}
song =""
lwx = 0
lwy = 0
rwx = 0
rwy = 0
confidenceR = 0 
confidenceL =  0
function gotPoses(results){
    if(results.length > 0 ){
console.log(results)
lwx = results[0].pose.leftWrist.x
lwy = results[0].pose.leftWrist.y
rwx = results[0].pose.rightWrist.x
rwy = results[0].pose.rightWrist.y
confidenceR = results[0].pose.keypoints[10].score
confidenceL = results[0].pose.keypoints[9].score
    }
}
function draw(){
    image (b1,0,0,500,400)
    fill ("blue")
    if(confidenceR > 0.2){circle(rwx,rwy,20)
    if(rwx > 0 && rwx < 100){
        song.rate(0.5)
        document.getElementById("speed").innerHTML = "speed : 0.5 "
    }
if(rwx > 100 &&  rwx < 200){
song.rate(1)
document.getElementById("speed").innerHTML = "speed : 1 "
    }
if(rwx >200 && rwx < 300){
    song.rate(1.5)
document.getElementById("speed").innerHTML = "speed : 1.5 "
}
if(rwx > 300 && rwx < 400){
song.rate(2)
document.getElementById("speed").innerHTML = "speed : 2 "
}
if(rwx > 400 && rwx < 500 ){
    song.rate(2.5)
document.getElementById("speed").innerHTML = "speed : 2.5 "
}
    }



    if(confidenceR > 0.2){circle(lwx,lwy,20)
        if(lwx > 0 && lwx < 100){
            song.setVolume(0.1)
            document.getElementById("vol").innerHTML = "volume : 0.1 "
        }
    if(lwx > 100 &&  lwx < 200){
    song.setVolume(0.3)
    document.getElementById("vol").innerHTML = "volume : 0.3 "
        }
    if(lwx >200 && lwx < 300){
        song.setVolume(0.6)
    document.getElementById("vol").innerHTML = "volume : 0.6 "
    }
    if(lwx > 300 && lwx < 400){
    song.setVolume(0.8)
    document.getElementById("vol").innerHTML = "volume : 0.8 "
    }
    if(lwx > 400 && lwx < 500 ){
        song.setVolume(1)
    document.getElementById("vol").innerHTML = "volume : 1 "
    }
        }
    




}
function preload(){
song=loadSound("music.mp3")
}
function play(){
    song.play()
}
