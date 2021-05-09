var choice = document.getElementById("game_choice");
var prompt = document.getElementById("game_prompt");


document.body.onload = Choose();

function Choose() {
    {
        let inpElm = document.createElement("input");
        inpElm.type = "text";
        inpElm.placeholder = "Bobby";
        inpElm.spellcheck = false;
        choice.appendChild(inpElm);
    }
    {
        let inpElm = document.createElement("button");
        inpElm.type = "button";
        inpElm.innerHTML = "Submit";
        choice.appendChild(inpElm);
    }

    

    prompt.innerHTML = "What is your name?";
}