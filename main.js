img = "";
objects = [];
status = "";


function preload() {
    song = loadSound("mixkit-alert-alarm-1005.wav");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Booklets";
}

function modelLoaded() {
    console.log("Model Loadin- i mean lagging");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error, "lag inducing error");
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
}

if (status != "") {
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Baby detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are:" + objects.length;

        fill(r, g, b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke(r, g, b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        song.stop().
        else() {
            document.getElementById("status").innerHTML = "Baby not detected";
            song.play();
        }
    }
}