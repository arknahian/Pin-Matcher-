var generatePin = document.getElementById("generate-pin");
generatePin.addEventListener("click", function() {
    var randomPin = Math.random()*10000;
    document.getElementById("input-pin").value = Math.round(randomPin);
    document.getElementById("user-input").value = "";
})

var buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function(event) {
        var userInput = document.getElementById("user-input").value;
        document.getElementById("user-input").value += event.target.innerText;
    })
}

var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(){
    var inputPin = document.getElementById("input-pin").value;
    var userInput = document.getElementById("user-input").value;
    const matchedPopUp = document.getElementById("matched");
    const notMatchedPopUp = document.getElementById("not-matched");
    let tryLeft = document.getElementById("try-left").innerText;
    if (inputPin === userInput) {
        matchedPopUp.style.display = "block";
    }
    else{
        notMatchedPopUp.style.display = "block";
        if (tryLeft > 0) {
            document.getElementById("try-left").innerText = tryLeft - 1;   
        }
    }
})