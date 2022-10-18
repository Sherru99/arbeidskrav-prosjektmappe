var list = document.getElementById("list");
var btn = document.getElementById("my-btn");

//btn.onclick = printWord; 


function printWord() {
for (var i = 0; i < 100; i++) {
    list.innerHTML += `<li>${i} Heisan</li>`;
}
}

printWord();