# Uke40-del1-Json-EXP-

# JSON

## Om prosjektet

I dette prosjektet lærer jeg hvordan man bruker JSON-filer og API-er i nettsider ved hjelp av JavaScript.
Jeg har lært hvordan man leser data fra en lokal JSON-fil og hvordan man henter data fra et eksternt API.

## Hva er Json filen?

**JSON står for JavaScript Object Notation.**
JSON er et format for å lagre og utveksle data. Det brukes ofte mellom nettsider og programmer og det er enkelt å lese og skrive.

**EXP:**
```Json
{
"navn": "Saran",
"alder": 17,
"land": "Thailand"
}
```

1. Lagre data inn Javascript
```javascript
const spill = [
  "Minecraft", //0//
  "Roblox",
  "Fortnite",
  "Valorant" ];//3//
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
