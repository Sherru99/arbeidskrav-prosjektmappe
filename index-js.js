//ID and Counter list :D


var treeClickCounter1 = 0;
var treeClickCounter2 = 0;
var treeClickCounter3 = 0;
var ironCounter = 0;
var woodCounter = 0;
var buildingCounter = 0;
var buildingCounter2 = 0;
var monsterCounter = 0;
var potionCounter = 0;

var tree1 = document.getElementById("tree-1");
var tree2 = document.getElementById("tree-2");
var tree3 = document.getElementById("tree-3");
var mine = document.getElementById("metal-mine");
var buyBuildingBtn1 = document.getElementById("buy-building-1-btn")
var buyBuildingBtn2 = document.getElementById("buy-building-2-btn")
var buySwordBtn = document.getElementById("buy-sword-btn")
var buyPotionBtn = document.getElementById("buy-potion-btn")


var strength = 1;
var treeAmount = 10;

var materialInfo = document.getElementById("material-info")
var output = document.getElementById("output-div");
var lifeBar = document.getElementById("life-bar")
var playerHP = 300;

var monsterImg = document.getElementById("monster-div"); 
var monsterArray = [""];
var monsterHPArray = [3, 3, 3];




//Update Info

function updateMaterial() {
    materialInfo.innerHTML = `Treverk: ${woodCounter} enheter. Metall: ${ironCounter} enheter. Antall bygning: ${buildingCounter}. Styrke: ${strength}. Potions: ${potionCounter}`

}

function updateHP() {

}


//Sword functionality

buySwordBtn.onclick = obtainSword; 
swordObtained = false;

function obtainSword() {
    if (ironCounter >= 200) {
        swordObtained = true;
        output.innerHTML = ``
        for (strength = 1; strength <= 3; strength++) {
            console.log("Hei")
        }
        ironCounter-=200;
        output.innerHTML = `Sword Obtained, you now deal 40 DMG! :D`
        updateMaterial()
    }
}


//Building Functionality

buyBuildingBtn1.onclick = buyBuilding; 
buyBuildingBtn2.onclick = buyBuilding2;

function buyBuilding() {
    if (ironCounter >= 10 && woodCounter >= 50) {
        output.innerHTML = ``;
        buildingCounter++; 
        ironCounter-=10; 
        woodCounter-=50;
        updateMaterial();
        console.log(ironCounter, woodCounter)
        output.innerHTML += `<p>Du har kjøpt en liten bygning!<p><br>` 
        if (woodCounter == 0) {
            alert("Gratulerer, landsbyen er ferdig utbygd!")
        }
    } else {
        console.log("Du har ikke nok ressurser!")
    }
}

function buyBuilding2() {
    if (ironCounter >= 30 && woodCounter >= 150) {
        output.innerHTML = ``;
        buildingCounter++; 
         ironCounter-=30; 
        woodCounter-=150;
        updateMaterial();
        output.innerHTML += `<p>Du har kjøpt en stor bygning!<p>`
        if (woodCounter == 0) {
            alert("Gratulerer, landsbyen er ferdig utbygd!")
        }
    } else {
        console.log("Du har ikke nok ressurser!")
    }
}




//Mine functionality

mine.onclick = getIron; 

function getIron() {
    output.innerHTML = ``;
    ironCounter += 10;
    console.log(ironCounter);
    updateMaterial();
    spawnMonster(); 
    output.innerHTML += `Du har fått 10 metall!`;
    
}





//Wood functionality

tree1.onclick = getWood1;
tree2.onclick = getWood2;
tree3.onclick = getWood3;

function getWood1() {
    
    treeClickCounter1++;
    
    
    woodCounter += 25;

    console.log(woodCounter)
    
    if (treeClickCounter1 < 10) {
        output.innerHTML = ``;
        updateMaterial()
        output.innerHTML = `Du har fått 25 trær!`;
    } else {
        tree1.style.display="none";
        updateMaterial()
    }
    spawnMonster();
}

function getWood2() {
    output.innerHTML = ``;
    treeClickCounter2++;
    
    woodCounter += 25;
    
    
    console.log(woodCounter)
    
    if (treeClickCounter2 < 10) {
        output.innerHTML = `Du har fått 25 trær!`;
        updateMaterial()
    } else {
        tree2.style.display="none";
        updateMaterial()
    }
    spawnMonster();
}

function getWood3() {
    output.innerHTML = ``;
    treeClickCounter3++;
    
    woodCounter += 25;
    
    
    console.log(woodCounter)
    
    if (treeClickCounter3 < 10) {
        output.innerHTML = `Du har fått 25 trær!`;
        updateMaterial()
    } else {
        tree3.style.display="none";
        updateMaterial()
    }
    spawnMonster();
}


//potion functionality

buyPotionBtn.onclick = buyPotion; 

function buyPotion() {
    if (ironCounter >= 20) {
        output.innerHTML = ``;
        potionCounter += 1;
        ironCounter -= 20;
        updateMaterial();
        output.innerHTML = `Du har kjøpt en potion, Bruk den klokt!`;

    } else {
        console.log("Not enough money for potions")
    }
}




//Monster Functionality

function spawnMonster() {
    var spawnRate = Math.floor(Math.random() * 8)
    for (i=0; i < monsterArray.length; i++) {
    if (spawnRate == 3 && monsterCounter < 3) {
        output.innerHTML = ``;
        monsterArray.push(`monster${i}`)
        monsterCounter++;
        monsterImg.innerHTML += `<img onclick="dmgMonster(this.id)" id="monster${i}" src="/images/cute-wolfman.png"/>`
        console.log(monsterArray)
        output.innerHTML = `Monstere har spawnet!`;

    }
    }
}


function playerTakeDmg() {
    playerHP -= 25;
}



function dmgMonster(e) {
    console.log(e[7]) 
    var id = e[7];
    if (monsterHPArray[id] > 0 && swordObtained === false) {
        playerTakeDmg()
        output.innerHTML = ``;
        monsterHPArray[id] = monsterHPArray[id] - strength;
        console.log(monsterHPArray);
        lifeBar.innerHTML = `${playerHP}hp`;
        output.innerHTML = `Du har brukt angrep! Det gjorde 10 dmg og du mottok 25 dmg!`;
        gameOver(); 
        
    } else {
        playerTakeDmg()
        var monster = document.getElementById(`monster${[id]}`)
        monster.style.display = "none";
        lifeBar.innerHTML = `${playerHP}hp`;
        gameOver(); 
    }
}


//Game Over

function gameOver() {
    if (playerHP < 1) {
        alert("Game Over!")
    }
}