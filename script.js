var ansCount = 0;
var poohScore = 0;
var tiggerScore = 0;
//document.getElemtByID("idName").innerHTML = "this is what you want to change the text to "

//element.addEventListener("click", fuctionName);
//button.addEventListener("click", updateFlavor)

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var result = document.getElementById("result")
var restart = document.getElementById("restart")

function updateResult() {
    if (tiggerScore > poohScore) {
        console.log("You are a tigger!")
        result.innerHTML = "You're result is... Tigger!"

    }
    else if (poohScore < tiggerScore); {
        console.log("You are a pooh!")
        result.innerHTML = "You're result is... Pooh!"
    }   
}

function pooh(){
    ansCount ++;
    poohScore ++;
    console.log("question count " + ansCount + " poohScore = " + poohScore);
    if (ansCount == 3) {
        console.log("The quiz is done!");
        updateResult();
    }
}

function tigger(){
    ansCount ++;
    tiggerScore ++;

    console.log("question count " + ansCount + " tiggerScore = " + tiggerScore);
    if (ansCount == 3) {
        console.log("The quiz is doen!");
        updateResult();
    }
}

function restartQuiz(){
    ansCount = 0;
    poohScore = 0;
    tiggerScore = 0;
    result.innerHTML = "You're result is... "

}


q1a1.addEventListener("click", pooh);
q1a2.addEventListener("click", tigger);

q2a1.addEventListener("click", pooh);
q2a2.addEventListener("click", tigger);



q3a1.addEventListener("click", pooh);
q3a2.addEventListener("click", tigger);

restart.addEventListener("click", restartQuiz);