var btn = document.getElementById("btn")
var puppyImg = document.getElementById("puppy-img")

btn.onclick = printPuppy; 

function printPuppy() {
    puppyImg.innerHTML = "";
    for (i = 0; i < 10; i++) {
    
        puppyImg.innerHTML += `<img src="images/puppy.jpg" width = 100px/>`; 
    } 
}