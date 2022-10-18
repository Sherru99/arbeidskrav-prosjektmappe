var list = document.getElementById("list");
var myBtn = document.getElementById("btn");

myBtn.onclick = bilalGay; 

function bilalGay () {
    list.innerHTML = "";
    
for (i = 100; i < 0; i--) {
   var randomNumber = Math.floor(Math.random() * 100);
    list.innerHTML += `<li>${randomNumber}<li/>`;
    console.log(i)
}
}