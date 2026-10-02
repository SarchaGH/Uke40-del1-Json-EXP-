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
Resultat:
```Plain Text(console)
Minecraft
Roblox
Fortnite
Valorant
```

2. Eksempel 2 Bruke JSON-fil
- Struktur på Json filen(XXX.json)
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
**Forklaring**
- fetch() leser JSON-filen.
- esponse.json() gjør JSON-data om til et JavaScript-objekt.
- data.artister[1].navn henter navnet til den andre artisten.
- innerHTML viser teksten på nettsiden.

3. EXP. HTML
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
Her lager vi elementer med egne id-er.
```html
 <ul id="artister"></ul>
    <ul id="joke"></ul>
```

## Hva har jeg lært?

- Hva JSON er
- Hvordan JSON er bygget opp
- Hvordan lese JSON med JavaScript
- Hvordan bruke fetch()
- Hvordan vise data fra **Json** filen på en nettside
