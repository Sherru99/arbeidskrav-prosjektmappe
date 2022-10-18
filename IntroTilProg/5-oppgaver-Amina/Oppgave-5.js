var userSecretPassword = prompt ("Create a secret")

var secretPassword = userSecretPassword
var correctAnswer = false;

while (correctAnswer == false) {
    var userPassword = prompt ("Hva er det hemmelige passordet");
    if (userPassword === secretPassword) {
        alert ("Gratulerer broren min");
        correctAnswer = true;
    } else {
        alert ("lol...")
    }

}

console.log(userPassword)
console.log(secretPassword)