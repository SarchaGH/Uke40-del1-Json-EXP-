// alert("qwerty")

fetch("musikk.json")
.then(response => response.json())
.then(data => {
const liste = document.getElementById("artister");
liste.innerHTML = data.artister[1].navn;// data.artister[0].navn; here!
});


//java//
const spill = [
  "Minecraft", //0//
  "Roblox",
  "Fortnite",
  "Valorant"   //3//
];

console.log(spill[0]);
console.log(spill[1])
console.log(spill[2]);
console.log(spill[3]);

//if we need to use more deep text we have to use[] '

//log muga joke
fetch("joke2.json")
.then(response => response.json())
.then(data => {console.log(data);
});