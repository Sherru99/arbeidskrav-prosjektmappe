var button = document.getElementById("btn")
var moneyImg = document.getElementById("money-img")


button.onclick = moneyGenerator 

function moneyGenerator() {
    var moneyAmount = prompt("Enter amount of 1000 bills"); 
    moneyImg.innerHTML = "";
    for (i = 0; i < parseInt(moneyAmount); i++) {
        moneyImg.innerHTML += `<img src="/images/puppy.jpg" width = 100px />`
    }
}