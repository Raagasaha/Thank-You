music = "";

function preload() {
    music = loadSound('music.mp3');
}


function back(){
    window.location = "index.html";
}

function draw() {
    music.play();
}


