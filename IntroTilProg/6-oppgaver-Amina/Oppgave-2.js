var cities = ["Oslo", "Bergen", "Trondheim", "London", "Paris"];
var cityList = document.getElementById("city-list");
var myBtn = document.getElementById("btn");

myBtn.onclick = printCities;



function printCities() {
for (i = 0; i < cities.length; i++) {
    cityList.innerHTML += `<li>${cities[i]}</li>`;
}
}

cities[0] = "1";
cities[1] = "2";
cities[2] = "3";
cities[3] = "4";
cities[4] = "5";

alert (cities[2]);
alert (cities[4]);




