var tree1 = document.getElementById("tree-1");
var tree2 = document.getElementById("tree-2");
var tree3 = document.getElementById("tree-3");
var treeClickCounter1 = 0;
var treeClickCounter2 = 0;
var treeClickCounter3 = 0;
var mine = document.getElementById("metal-mine");
var materialInfo = document.getElementById("material-info")
var woodCounter = 0;
var ironCounter = 0;
var buildingCounter = 0;
var strength = 10;
var treeAmount = 10;
var buySword = document.getElementById("sword");
var monster = document.getElementById("monster-div"); 
var output = document.getElementById("output-div");
var monsterCounter = 0;
var monster1HP = 40; 
var monster2HP = 40; 
var monster3HP = 40;

function updateMaterial() {
materialInfo.innerHTML = `Treverk: ${woodCounter} enheter. Metall: ${ironCounter} enheter. Antall bygning: ${buildingCounter}. Styrke: ${strength}`
}



mine.onclick = getIron; 

function getIron() {
    ironCounter += 10;
    console.log(ironCounter);
    updateMaterial();
    spawnMonster(); 

}



tree1.onclick = getWood1;
tree2.onclick = getWood2;
tree3.onclick = getWood3;

function getWood1() {
    treeClickCounter1++;


    woodCounter += 25;


    console.log(woodCounter)

    if (treeClickCounter1 < 10) {
        updateMaterial()
    } else {
        tree1.style.display="none";
        updateMaterial()
    }
    spawnMonster();
}

function getWood2() {
    treeClickCounter2++;

    woodCounter += 25;


    console.log(woodCounter)

    if (treeClickCounter2 < 10) {
        updateMaterial()
    } else {
        tree2.style.display="none";
        updateMaterial()
    }
    spawnMonster();
}

function getWood3() {
    treeClickCounter3++;

    woodCounter += 25;


    console.log(woodCounter)

    if (treeClickCounter3 < 10) {
        updateMaterial()
    } else {
        tree3.style.display="none";
        updateMaterial()
    }
    spawnMonster();
}

function spawnMonster() {
    var spawnRate = Math.floor(Math.random() * 8)
    var randomNumber2 = Math.floor(Math.random() * 4)
    for (i=0; i < randomNumber2; i++) {
    if (spawnRate == 3 && monsterCounter < 3) {
        monsterCounter++;
        monster.innerHTML += `<img onclick=dmgMonster(${i}) id="" src="/images/cute-wolfman.png"/>`
    }
    }
}
