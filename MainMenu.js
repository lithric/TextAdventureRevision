var audio = new Audio('GameMusic.mp3');
audio.play();

function Move(anim) {
    ChangeAnimStart(anim);
}

function Start() {
    ChangeAnimStart("FadeOut","2s","ease-out");
    setTimeout(()=>{window.location = "Loading.html"},3000);
}