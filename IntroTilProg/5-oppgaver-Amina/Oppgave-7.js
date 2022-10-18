var randomNumber1 = Math.floor(Math.random() * 11)
var randomNumber2 = Math.floor(Math.random() * 11)

var correctAnswer = randomNumber1 + randomNumber2;
var correctAnswerBool = false;
console.log(correctAnswer)

while (correctAnswerBool == false) {
    var randomEquation = prompt (`${randomNumber1} + ${randomNumber2}`);
    if (randomEquation == correctAnswer) {
        alert ("Gratulerer broren min");
        correctAnswerBool = true;
    } else {
        alert ("lol...")
    }

}

