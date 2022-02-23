const subjects = [
  //grammar 0 = 1psing, 1 = 2psing, 2 = 3psing, 3 = 1pplur, 4 = 2pplur, 5 = 3pplur
  {is:"Ég", en:"I", grammar:0},
  {is:"Þú", en:"You", grammar:1},
  {is:"Hann", en:"He", grammar:2},
  {is:"Hún", en:"She", grammar:2},
  {is:"Það", en:"It", grammar:2},
  {is:"Við", en:"We", grammar:3},
  {is:"Þið", en:"You", grammar:4},
  {is:"Þeir", en:"They", grammar:5},
  {is:"Þær", en:"They", grammar:5},
  {is:"Þau", en:"They", grammar:5},
];

const verbs = [
//grammar 0 = nom, 1 = acc, 2 = dat, 3 = gen

{verbis:"hata",
verben:"hate",
forms:[
["hata", "hate"], 
["hatar", "hate"], 
["hatar", "hates"], 
["hötum", "hate"], 
["hatið", "hate"], 
["hata", "hate"]
],
grammar:1
},
{verbis:"elska",
verben:"love",
forms:[
["elska", "love"], 
["elskar", "love"], 
["elskar", "loves"], 
["elskum", "love"], 
["elskið", "love"], 
["elska", "love"]
],
grammar:1
},
{verbis:"leita að",
verben:"look for",
forms:[
["leita að", "look for"], 
["leitar að", "look for"], 
["leitar að", "looks for"], 
["leitum að", "look for"], 
["leitið að", "look for"], 
["leita að", "look for"]
],
grammar:2
},
  {verbis:"drekka",
  verben:"drink",
  forms:[
  ["drekk", "drink"], 
  ["drekkur", "drink"], 
  ["drekkur", "drinks"], 
  ["drekkum", "drink"], 
  ["drekkið", "drink"], 
  ["drekka", "drink"]
],
grammar:1
},
{verbis:"borða",
  verben:"eat",
  forms:[
  ["borða", "eat"], 
  ["borðar", "eat"], 
  ["borðar", "eats"], 
  ["borðum", "eat"], 
  ["borðið", "eat"], 
  ["borða", "eat"],
],
grammar:1
},
{verbis:"henda",
  verben:"throw",
  forms:[
  ["hendi", "throw"], 
  ["hendir", "throw"], 
  ["hendir", "throws"], 
  ["hendum", "throw"], 
  ["hendið", "throw"], 
  ["henda", "throw"],
],
grammar:2
}
];

const objects = [
{objis:"mynd",
objen:"picture",
forms:[
[["mynd", "a picture"], ["mynd", "a picture"], ["mynd", "a picture"], ["myndar", "a picture"]], 
[["myndir", "pictures"], ["myndir", "pictures"], ["myndum", "pictures"], ["mynda", "pictures"]],  
[["myndin", "the picture"], ["myndina", "the picture"], ["myndinni", "the picture"], ["myndarinnar", "the picture"]],  
[["myndirnar", "the pictures"], ["myndirnar", "the pictures"], ["myndunum", "the pictures"], ["myndanna", "the pictures"]], 
],
},
{objis:"epli",
objen:"apple",
forms:[
[["epli", "an apple"], ["epli", "an apple"], ["epli", "an apple"], ["eplis", "an apple"]], 
[["epli", "apples"], ["epli", "apples"], ["eplum", "apples"], ["epla", "apples"]],  
[["eplið", "the apple"], ["eplið", "the apple"], ["eplinu", "the apple"], ["eplisins", "the apple"]],  
[["eplin", "the apples"], ["eplin", "the apples"], ["eplunum", "the apples"], ["eplanna", "the apples"]], 
],
},
{objis:"hús",
objen:"house",
forms:[
[["hús", "a house"], ["hús", "a house"], ["húsi", "a house"], ["húss", "a house"]], 
[["hús", "houses"], ["hús", "houses"], ["húsum", "houses"], ["húsa", "houses"]],  
[["húsið", "the house"], ["húsið", "the house"], ["húsinu", "the house"], ["hússins", "the house"]],  
[["húsin", "the houses"], ["húsin", "the houses"], ["húsunum", "the houses"], ["húsanna", "the houses"]], 
],
},
  {objis:"hestur",
  objen:"horse",
  forms:[
  [["hestur", "a horse"], ["hest", "a horse"], ["hesti", "a horse"], ["hests", "a horse"]], 
  [["hestar", "horses"], ["hesta", "horses"], ["hestum", "horses"], ["hesta", "horses"]],  
  [["hesturinn", "the horse"], ["hestinn", "the horse"], ["hestinum", "the horse"], ["hestsins", "the horse"]],  
  [["hestarnir", "the horses"], ["hestana", "the horses"], ["hestunum", "the horses"], ["hestanna", "the horses"]], 
],
},
{objis:"borð",
  objen:"table",
  forms:[
    [["borð", "a table"], ["borð", "a table"], ["borði", "a table"], ["borðs", "a table"]], 
    [["borð", "tables"], ["borð", "tables"], ["borðum", "tables"], ["borða", "tables"]],  
    [["borðið", "the table"], ["borðið", "the table"], ["borðinu", "the table"], ["borðsins", "the table"]],  
    [["borðin", "the tables"], ["borðin", "the tables"], ["borðunum", "the tables"], ["borðanna", "the tables"]], 
  ],
  },
]

export default function getSentences() {

function getRandomInt(list) {
  return Math.floor(Math.random() * list.length);
}

let randomSubjectInt = getRandomInt(subjects);
let pickedSubject = subjects[randomSubjectInt];
let subjectGrammar = pickedSubject.grammar;

let randomVerbInt = getRandomInt(verbs);
let pickedVerb = verbs[randomVerbInt];
let verbGrammar = pickedVerb.grammar;

let randomObjInt = getRandomInt(objects);
let pickedObj = objects[randomObjInt];
let randomPersDefInt = getRandomInt(pickedObj.forms);

let isSubject = pickedSubject.is;
let enSubject = pickedSubject.en;
let isVerb = pickedVerb.forms[subjectGrammar][0];
let enVerb = pickedVerb.forms[subjectGrammar][1];
let isObject = pickedObj.forms[randomPersDefInt][verbGrammar][0];
let enObject = pickedObj.forms[randomPersDefInt][verbGrammar][1];
let isSubjHeadword = pickedSubject.is;
let isVerbHeadword = pickedVerb.verbis;
let isObjHeadword = pickedObj.objis;
let enSentence = enSubject + " " + enVerb + " " + enObject;

const sentences = [{ fields: [isSubject, isVerb, isObject], english: enSentence, headwords: [isSubjHeadword, isVerbHeadword, isObjHeadword]},
];

return sentences[0];
}


// const verbs = [

//   sja,
//   eiga,
//   borda,
//   maneftir,
//   hjalpa,
//   horfaa,
//   talavid,
//   hitta,
//   henda,
//   sakna
// ];

// const sja = new Verb([
//   "sé",
//   "sérð",
//   "sér",
//   "sjáum",
//   "sjáið",
//   "sjá",
// ], [
//   "see",
//   "see",
//   "sees",
//   "see",
//   "see",
//   "see",
// ], "acc");

// const eiga = new Verb([
//   "á",
//   "átt",
//   "á",
//   "eigum",
//   "eigið",
//   "eiga",
// ], [
//   "own",
//   "own",
//   "owns",
//   "own",
//   "own",
//   "own",
// ], "acc");

// const borda = new Verb([
//   "borða",
//   "borðar",
//   "borðar",
//   "borðum",
//   "borðið",
//   "borða",
// ], [
//   "eat",
//   "eat",
//   "eats",
//   "eat",
//   "eat",
//   "eat",
// ], "acc");

// const maneftir = new Verb([
//   "man eftir",
//   "manst eftir",
//   "man eftir",
//   "munum eftir",
//   "munið eftir",
//   "muna eftir",
// ], [
//   "remember",
//   "remember",
//   "remembers",
//   "remember",
//   "remember",
//   "remember",
// ], "dat");

// const hjalpa = new Verb([
//   "hjálpa",
//   "hjálpar",
//   "hjálpar",
//   "hjálpum",
//   "hjálpið",
//   "hjálpa",
// ], [
//   "help",
//   "help",
//   "helps",
//   "help",
//   "help",
//   "help",
// ], "dat");

// const horfaa = new Verb([
//   "horfi á",
//   "horfir á",
//   "horfir á",
//   "horfum á",
//   "horfið á",
//   "horfa á",
// ], [
//   "watch",
//   "watch",
//   "watches",
//   "watch",
//   "watch",
//   "watch",
// ], "acc");

// const talavid = new Verb([
//   "tala við",
//   "talar við",
//   "talar við",
//   "tölum við",
//   "talið við",
//   "tala við",
// ], [
//   "talk to",
//   "talk to",
//   "talks to",
//   "talk to",
//   "talk to",
//   "talk to",
// ], "acc");

// const hitta = new Verb([
//   "hitti",
//   "hittir",
//   "hittir",
//   "hittum",
//   "hittið",
//   "hitta",
// ], [
//   "meet",
//   "meet",
//   "meets",
//   "meet",
//   "meet",
//   "meet",
// ], "acc");

// const henda = new Verb([
//   "hendi",
//   "hendir",
//   "hendir",
//   "hendum",
//   "hendið",
//   "henda",
// ], [
//   "throw",
//   "throw",
//   "throws",
//   "throw",
//   "throw",
//   "throw",
// ], "dat");

// const sakna = new Verb([
//   "sakna",
//   "saknar",
//   "saknar",
//   "söknum",
//   "saknið",
//   "sakna",
// ], [
//   "miss",
//   "miss",
//   "misses",
//   "miss",
//   "miss",
//   "miss",
// ], "gen");

// class Object {
// objList = [

//     bill,
//     bord,
//     bolti,
//     hestur,
//     ljos,
//     tolva,
//     manneskja,
//     hundur
//   ];

// const bill = [
//   [
//     ["bíll", "bíl", "bíl", "bíls"],
//     ["bílar", "bíla", "bílum", "bíla"],
//     ["bíllinn", "bílinn", "bílnum", "bílsins"],
//     ["bílarnir", "bílana", "bílunum", "bílanna"],
//   ],
//   [
//     ["a car", "a car", "a car", "a car"],
//     ["cars", "cars", "cars", "cars"],
//     ["the car", "the car", "the car", "the car"],
//     ["the cars", "the cars", "the cars", "the cars"],
//   ],
// ];

// const bord = [
//   [
//     ["borð", "borð", "borði", "borðs"],
//     ["borð", "borð", "borðum", "borða"],
//     ["borðið", "borðið", "borðinu", "borðsins"],
//     ["borðin", "borðin", "borðunum", "borðanna"],
//   ],
//   [
//     ["a table", "a table", "a table", "a table"],
//     ["tables", "tables", "tables", "tables"],
//     ["the table", "the table", "the table", "the table"],
//     ["the tables", "the tables", "the tables", "the tables"],
//   ],
// ];

// const bolti = [
//   [
//     ["bolti", "bolta", "bolta", "bolta"],
//     ["boltar", "bolta", "boltum", "bolta"],
//     ["boltinn", "boltann", "boltanum", "boltans"],
//     ["boltarnir", "boltana", "boltunum", "boltanna"],
//   ],
//   [
//     ["a ball", "a ball", "a ball", "a ball"],
//     ["balls", "balls", "balls", "balls"],
//     ["the ball", "the ball", "the ball", "the ball"],
//     ["the balls", "the balls", "the balls", "the balls"],
//   ],
// ];

// const hestur = [
//   [
//     ["hestur", "hest", "hesti", "hests"],
//     ["hestar", "hesta", "hestum", "hesta"],
//     ["hesturinn", "hestinn", "hestinum", "hestsins"],
//     ["hestarnir", "hestana", "hestunum", "hestanna"],
//   ],
//   [
//     ["a horse", "a horse", "a horse", "a horse"],
//     ["horses", "horses", "horses", "horses"],
//     ["the horse", "the horse", "the horse", "the horse"],
//     ["the horses", "the horses", "the horses", "the horses"],
//   ],
// ];

// const ljos = [
//   [
//     ["ljós", "ljós", "ljósi", "ljóss"],
//     ["ljós", "ljós", "ljósum", "ljósa"],
//     ["ljósið", "ljósið", "ljósinu", "ljóssins"],
//     ["ljósin", "ljósin", "ljósunum", "ljósanna"],
//   ],
//   [
//     ["a light", "a light", "a light", "a light"],
//     ["lights", "lights", "lights", "lights"],
//     ["the light", "the light", "the light", "the light"],
//     ["the lights", "the lights", "the lights", "the lights"],
//   ],
// ];

// const tolva = [
//   [
//     ["tölva", "tölvu", "tölvu", "tölvu"],
//     ["tölvur", "tölvur", "tölvum", "tölva"],
//     ["tölvan", "tölvuna", "tölvunni", "tölvunnar"],
//     ["tölvurnar", "tölvurnar", "tölvunum", "tölvanna"],
//   ],
//   [
//     ["a computer", "a computer", "a computer", "a computer"],
//     ["computers", "computers", "computers", "computers"],
//     ["the computer", "the computer", "the computer", "the computer"],
//     ["the computers", "the computers", "the computers", "the computers"],
//   ],
// ];

// const manneskja = [
//   [
//     ["manneskja", "manneskju","manneskju", "manneskju"],
//     ["manneskjur", "manneskjur", "manneskjum", "manneskja"],
//     ["manneskjan", "manneskjuna", "manneskjunni", "manneskjunnar"],
//     ["manneskjurnar", "manneskjurnar", "manneskjunum", "manneskjanna"],
//   ],
//   [
//     ["a person", "a person", "a person", "a person"],
//     ["people", "people", "people", "people"],
//     ["the person", "the person", "the person", "the person"],
//     ["the people", "the people", "the people", "the people"],
//   ],
// ];

// const hundur = [
//   [
//     ["hundur", "hund","hundi", "hunds"],
//     ["hundar", "hunda", "hundum", "hunda"],
//     ["hundurinn", "hundinn", "hundinum", "hundsins"],
//     ["hundarnir", "hundana", "hundunum", "hundanna"],
//   ],
//   [
//     ["a dog", "a dog", "a dog", "a dog"],
//     ["dogs", "dogs", "dogs", "dogs"],
//     ["the dog", "the dog", "the dog", "the dog"],
//     ["the dogs", "the dogs", "the dogs", "the dogs"],
//   ],
// ];