var currentCard = 1;

function ScrollRight() {
    var zero = document.getElementById("card1");
    var one = document.getElementById("card2");
    var two = document.getElementById("card3");

    if(currentCard==1){
        document.getElementById("class1Btn").style.backgroundColor = "rgb(253, 248, 238)";
        document.getElementById("class2Btn").style.backgroundColor = "rgb(253, 248, 238)";
        zero.style.height = "24rem";
        one.style.height = "24rem";

        document.getElementById("class3Btn").style.backgroundColor = "rgb(91, 115, 194)";
        two.style.height = "27rem";
        currentCard += 1;
        console.log("Right on midle");
    }
    else if(currentCard==0){
        document.getElementById("class1Btn").style.backgroundColor = "rgb(253, 248, 238)";
        document.getElementById("class2Btn").style.backgroundColor = "rgb(91, 115, 194)";
        zero.style.height = "24rem";
        one.style.height = "27rem";

        document.getElementById("class3Btn").style.backgroundColor = "rgb(253, 248, 238)";
        two.style.height = "24rem";
        currentCard += 1;
        console.log("Right on left");
    }
}
function ScrollLeft() {
    var zero = document.getElementById("card1");
    var one = document.getElementById("card2");
    var two = document.getElementById("card3");

    if(currentCard==1){
        document.getElementById("class1Btn").style.backgroundColor = "rgb(91, 115, 194)";
        document.getElementById("class2Btn").style.backgroundColor = "rgb(253, 248, 238)";
        zero.style.height = "27rem";
        one.style.height = "24rem";

        document.getElementById("class3Btn").style.backgroundColor = "rgb(253, 248, 238)";
        two.style.height = "24rem";
        currentCard -= 1;
        console.log("Left on midle");
    }
    else if(currentCard == 2){
        document.getElementById("class1Btn").style.backgroundColor = "rgb(253, 248, 238)";
        document.getElementById("class2Btn").style.backgroundColor = "rgb(91, 115, 194)";
        zero.style.height = "24rem";
        one.style.height = "27rem";

        document.getElementById("class3Btn").style.backgroundColor = "rgb(253, 248, 238)";
        two.style.height = "24rem";
        currentCard -= 1;
        console.log("Left on right");
    }
}