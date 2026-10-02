# Uke40-del1-Json-EXP-

# JSON fillen 
### I disse project lærer hvordan bruker vi **Json**  fillen inni project

## Hva er Json filen?
Json filen er fil som bruker liksom  **storage** for text eller informasjon som vi kan bruker det texter inni forskjellig arbeider

## EXP. for hvordan man bruker Json fiiler til nettsiden eller console

1. Disse er hvordan man lage text inni Javascript også viser fram i console
```javascript
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
```

2. Hvordan man bruker Json fillen **(filennavn.json)** inne Javascript også viser det text på skjermen

- Struktur av Json fillen(XXX.json)
```Json
{
  "artister": [
    {
      "navn": "Aurora",
      "sjanger": "Pop",
      "album": ["All My Demons Greeting Me as a Friend"],
      "debut": 2015
    },
    {
      "navn": "Sigrid",
      "sjanger": "Pop",
      "album": ["Sucker Punch", "How to Let Go"],
      "debut": 2017
    },
    {
      "navn": "qwerty",
      "sjanger": "Popcorn",
      "album": ["ohnananaa"],
      "debut": 2067
    }
  ]
}
```

- Javascript 
```Javascript
fetch("musikk.json")
.then(response => response.json())
.then(data => {
const liste = document.getElementById("artister");
liste.innerHTML = data.artister[1].navn;// data.artister[0].navn; here!
});
```

- HTML hvor man organizerer nettsiden
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>json test</title>
    <script src="exp.js"></script>
</head>
<body>
    <ul id="artister"></ul> //vi lage ID har!
    <ul id="joke"></ul>
</body>
</html>
```
