document.body.onload = function() {
    const loadText = document.getElementById("loadText");
    var bank = setInterval(()=>{
        loadText.innerHTML += ".";
        if (loadText.innerHTML.length > 11) {
            loadText.innerHTML = "Loading.";
        }
    },400);
    document.getElementById("start_container").hidden = false;
    ChangeAnimStart("FadeIn","3s","ease-in");
    setTimeout(()=>{
        ChangeAnimStart("FadeOut","3s","ease-out");
        setTimeout(()=>{
            clearInterval(bank);
            window.location = "Game.html";
        },3000);
    },4200);
}