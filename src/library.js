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
//hitta, sakna, tala við, horfa á, hjálpa, 
//sjá, eiga, muna eftir, hata, elska, 
//leita að, drekka, borða, henda
//grammar 0 = nom, 1 = acc, 2 = dat, 3 = gen
{verbis:"hitta",
verben:"meet",
forms:[
["hitti", "meet"], 
["hittir", "meet"], 
["hittir", "meets"], 
["hittum", "meet"], 
["hittið", "meet"], 
["hitta", "meet"]
],
grammar:1
},
{verbis:"sakna",
verben:"miss",
forms:[
["sakna", "miss"], 
["saknar", "miss"], 
["saknar", "misses"], 
["söknum", "miss"], 
["saknið", "miss"], 
["sakna", "miss"]
],
grammar:3
},
{verbis:"tala við",
verben:"talk to",
forms:[
["tala við", "talk to"], 
["talar við", "talk to"], 
["talar við", "talks to"], 
["tölum við", "talk to"], 
["talið við", "talk to"], 
["tala við", "talk to"]
],
grammar:1
},
{verbis:"horfa á",
verben:"watch",
forms:[
["horfi á", "watch"], 
["horfir á", "watch"], 
["horfir á", "watches"], 
["horfum á", "watch"], 
["horfið á", "watch"], 
["horfa á", "watch"]
],
grammar:1
},
{verbis:"hjálpa",
verben:"help",
forms:[
["hjálpa", "help"], 
["hjálpar", "help"], 
["hjálpar", "helps"], 
["hjálpum", "help"], 
["hjálpið", "help"], 
["hjálpa", "help"]
],
grammar:2
},
{verbis:"sjá",
verben:"see",
forms:[
["sé", "see"], 
["sérð", "see"], 
["sér", "sees"], 
["sjáum", "see"], 
["sjáið", "see"], 
["sjá", "see"]
],
grammar:1
},
{verbis:"eiga",
verben:"own",
forms:[
["á", "own"], 
["átt", "own"], 
["á", "owns"], 
["eigum", "own"], 
["eigið", "own"], 
["eiga", "own"]
],
grammar:1
},
{verbis:"muna eftir",
verben:"remember",
forms:[
["man eftir", "remember"], 
["manst eftir", "remember"], 
["man eftir", "remembers"], 
["munum eftir", "remember"], 
["munið eftir", "remember"], 
["muna eftir", "remember"]
],
grammar:2
},
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
//hundur, tölva, ljós, bolti, bíll, 
//mynd, epli, hús, hestur, borð
//genders: 0=masc, 1=fem, 2=neut
{objis:"hundur",
objen:"dog",
gender:0,
forms:[
[["hundur", "a dog"], ["hund", "a dog"], ["hundi", "a dog"], ["hunds", "a dog"]], 
[["hundar", "dogs"], ["hunda", "dogs"], ["hundum", "dogs"], ["hunda", "dogs"]],  
[["hundurinn", "the dog"], ["hundinn", "the dog"], ["hundinum", "the dog"], ["hundsins", "the dog"]],  
[["hundarnir", "the dogs"], ["hundana", "the dogs"], ["hundunum", "the dogs"], ["hundanna", "the dogs"]], 
],
},
{objis:"tölva",
objen:"computer",
gender:1,
forms:[
[["tölva", "a computer"], ["tölvu", "a computer"], ["tölvu", "a computer"], ["tölvu", "a computer"]], 
[["tölvur", "computers"], ["tölvur", "computers"], ["tölvum", "computers"], ["tölva", "computers"]],  
[["tölvan", "the computer"], ["tölvuna", "the computer"], ["tölvunni", "the computer"], ["tölvunnar", "the computer"]],  
[["tölvurnar", "the computers"], ["tölvurnar", "the computers"], ["tölvunum", "the computers"], ["tölvanna", "the computers"]], 
],
},
{objis:"ljós",
objen:"light",
gender:2,
forms:[
[["ljós", "a light"], ["ljós", "a light"], ["ljósi", "a light"], ["ljóss", "a light"]], 
[["ljós", "lights"], ["ljós", "lights"], ["ljósum", "lights"], ["ljósa", "lights"]],  
[["ljósið", "the light"], ["ljósið", "the light"], ["ljósinu", "the light"], ["ljóssins", "the light"]],  
[["ljósin", "the lights"], ["ljósin", "the lights"], ["ljósunum", "the lights"], ["ljósanna", "the lights"]], 
],
},
{objis:"bolti",
objen:"ball",
gender:0,
forms:[
[["bolti", "a ball"], ["bolta", "a ball"], ["bolta", "a ball"], ["bolta", "a ball"]], 
[["boltar", "balls"], ["bolta", "balls"], ["boltum", "balls"], ["bolta", "balls"]],  
[["boltinn", "the ball"], ["boltann", "the ball"], ["boltanum", "the ball"], ["boltans", "the ball"]],  
[["boltarnir", "the balls"], ["boltana", "the balls"], ["boltunum", "the balls"], ["boltanna", "the balls"]], 
],
},
{objis:"bíll",
objen:"car",
gender:0,
forms:[
[["bíll", "a car"], ["bíl", "a car"], ["bíl", "a car"], ["bíls", "a car"]], 
[["bílar", "cars"], ["bíla", "cars"], ["bílum", "cars"], ["bíla", "cars"]],  
[["bíllinn", "the car"], ["bílinn", "the car"], ["bílnum", "the car"], ["bílsins", "the car"]],  
[["bílarnir", "the cars"], ["bílana", "the cars"], ["bílunum", "the cars"], ["bílanna", "the cars"]], 
],
},
{objis:"mynd",
objen:"picture",
gender:1,
forms:[
[["mynd", "a picture"], ["mynd", "a picture"], ["mynd", "a picture"], ["myndar", "a picture"]], 
[["myndir", "pictures"], ["myndir", "pictures"], ["myndum", "pictures"], ["mynda", "pictures"]],  
[["myndin", "the picture"], ["myndina", "the picture"], ["myndinni", "the picture"], ["myndarinnar", "the picture"]],  
[["myndirnar", "the pictures"], ["myndirnar", "the pictures"], ["myndunum", "the pictures"], ["myndanna", "the pictures"]], 
],
},
{objis:"epli",
objen:"apple",
gender:2,
forms:[
[["epli", "an apple"], ["epli", "an apple"], ["epli", "an apple"], ["eplis", "an apple"]], 
[["epli", "apples"], ["epli", "apples"], ["eplum", "apples"], ["epla", "apples"]],  
[["eplið", "the apple"], ["eplið", "the apple"], ["eplinu", "the apple"], ["eplisins", "the apple"]],  
[["eplin", "the apples"], ["eplin", "the apples"], ["eplunum", "the apples"], ["eplanna", "the apples"]], 
],
},
{objis:"hús",
objen:"house",
gender:2,
forms:[
[["hús", "a house"], ["hús", "a house"], ["húsi", "a house"], ["húss", "a house"]], 
[["hús", "houses"], ["hús", "houses"], ["húsum", "houses"], ["húsa", "houses"]],  
[["húsið", "the house"], ["húsið", "the house"], ["húsinu", "the house"], ["hússins", "the house"]],  
[["húsin", "the houses"], ["húsin", "the houses"], ["húsunum", "the houses"], ["húsanna", "the houses"]], 
],
},
  {objis:"hestur",
  objen:"horse",
  gender:0,
  forms:[
  [["hestur", "a horse"], ["hest", "a horse"], ["hesti", "a horse"], ["hests", "a horse"]], 
  [["hestar", "horses"], ["hesta", "horses"], ["hestum", "horses"], ["hesta", "horses"]],  
  [["hesturinn", "the horse"], ["hestinn", "the horse"], ["hestinum", "the horse"], ["hestsins", "the horse"]],  
  [["hestarnir", "the horses"], ["hestana", "the horses"], ["hestunum", "the horses"], ["hestanna", "the horses"]], 
],
},
{objis:"borð",
  objen:"table",
  gender:2,
  forms:[
    [["borð", "a table"], ["borð", "a table"], ["borði", "a table"], ["borðs", "a table"]], 
    [["borð", "tables"], ["borð", "tables"], ["borðum", "tables"], ["borða", "tables"]],  
    [["borðið", "the table"], ["borðið", "the table"], ["borðinu", "the table"], ["borðsins", "the table"]],  
    [["borðin", "the tables"], ["borðin", "the tables"], ["borðunum", "the tables"], ["borðanna", "the tables"]], 
  ],
  },
]

const adjectives = [
  {adjis: "stór",
  adjen: "big",
  forms:[  
    [//def
    [//masc
      [//sing
        "stóri", "stóra", "stóra", "stóra"
      ],
      [//plur
        "stóru", "stóru", "stóru", "stóru"
      ]
    ],
    [//fem
      [//sing
        "stóra", "stóru", "stóru", "stóru"
      ],
      [//plur
        "stóru", "stóru", "stóru", "stóru"
      ]
    ],
    [//neut
      [//sing
        "stóra", "stóra", "stóra", "stóra"
      ],
      [//plur
        "stóru", "stóru", "stóru", "stóru"
      ]
    ]
  ],
  [//indef
    [//masc
      [//sing
        "stór", "stóran", "stórum", "stórs"
      ],
      [//plur
        "stórir", "stóra", "stórum", "stórra"
      ]
    ],
    [//fem
      [//sing
        "stór", "stóra", "stórri", "stórrar"
      ],
      [//plur
        "stórar", "stórar", "stórum", "stórra"
      ]
    ],
    [//neut
      [//sing
        "stórt", "stórt", "stóru", "stórs"
      ],
      [//plur
        "stór", "stór", "stórum", "stórra"
      ]
    ]
  ]
]
},
{adjis: "gömul",
  adjen: "old",
  forms:[  
    [//def
    [//masc
      [//sing
        "gamli", "gamla", "gamla", "gamla"
      ],
      [//plur
        "gömlu", "gömlu", "gömlu", "gömlu"
      ]
    ],
    [//fem
      [//sing
        "gamla", "gömlu", "gömlu", "gömlu"
      ],
      [//plur
        "gömlu", "gömlu", "gömlu", "gömlu"
      ]
    ],
    [//neut
      [//sing
        "gamla", "gamla", "gamla", "gamla"
      ],
      [//plur
        "gömlu", "gömlu", "gömlu", "gömlu"
      ]
    ]
  ],
  [//indef
    [//masc
      [//sing
        "gamall", "gamlan", "gömlum", "gamals"
      ],
      [//plur
        "gamlir", "gamla", "gömlum", "gamalla"
      ]
    ],
    [//fem
      [//sing
        "gömul", "gamla", "gamalli", "gamallar"
      ],
      [//plur
        "gamlar", "gamlar", "gömlum", "gamalla"
      ]
    ],
    [//neut
      [//sing
        "gamalt", "gamalt", "gömlu", "gamals"
      ],
      [//plur
        "gömul", "gömul", "gömlum", "gamalla"
      ]
    ]
  ]
]
},
{adjis: "góð",
  adjen: "good",
  forms:[  
    [//def
    [//masc
      [//sing
        "góði", "góða", "góða", "góða"
      ],
      [//plur
        "góðu", "góðu", "góðu", "góðu"
      ]
    ],
    [//fem
      [//sing
        "góða", "góðu", "góðu", "góðu"
      ],
      [//plur
        "góðu", "góðu", "góðu", "góðu"
      ]
    ],
    [//neut
      [//sing
        "góða", "góða", "góða", "góða"
      ],
      [//plur
        "góðu", "góðu", "góðu", "góðu"
      ]
    ]
  ],
  [//indef
    [//masc
      [//sing
        "góður", "góðan", "góðum", "góðs"
      ],
      [//plur
        "góðir", "góða", "góðum", "góðra"
      ]
    ],
    [//fem
      [//sing
        "góð", "góða", "góðri", "góðrar"
      ],
      [//plur
        "góðar", "góðar", "góðum", "góðra"
      ]
    ],
    [//neut
      [//sing
        "gott", "gott", "góðu", "góðs"
      ],
      [//plur
        "góð", "góð", "góðum", "góðra"
      ]
    ]
  ]
]
}
]

function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)]
}

export default function getSentence(randomFunc = getRandomFromList) {
  let useAdj = true;
  let pickedSubject = randomFunc(subjects);
  let subjectGrammar = pickedSubject.grammar;

  let pickedVerb = randomFunc(verbs);
  let verbGrammar = pickedVerb.grammar;

  let pickedObj = randomFunc(objects);
  let pickedForm = randomFunc(pickedObj.forms);

  let isSubject = pickedSubject.is;
  let enSubject = pickedSubject.en;
  let isVerb = pickedVerb.forms[subjectGrammar][0];
  let enVerb = pickedVerb.forms[subjectGrammar][1];
  let objectGender = pickedObj.gender;
  let pickedAdjective = randomFunc(adjectives);
  let enAdjective = pickedAdjective.adjen;
  let adjDefOrIndef;
  if (pickedForm < 2) {
    adjDefOrIndef = 0;
  } else {
    adjDefOrIndef = 1;
  }
  let adjSingOrPlur;
  if (pickedForm = 0) {
    adjSingOrPlur = 0;
  } else if (pickedForm = 1) {
    adjSingOrPlur = 1;
  } else if (pickedForm = 2) {
    adjSingOrPlur = 0;
  } else if (pickedForm = 3) {
    adjSingOrPlur = 1;
  }
  let isAdjective = pickedAdjective.forms[adjDefOrIndef][objectGender][adjSingOrPlur][verbGrammar];
  
    //gender (nos 0,1,2) from object objectGender, 
    //case (nos 0,1,2,3) from verb verbGrammar, 
    //def&indef (0(sing),1(plur),2(sing),3(plur))from object pickedForm
  
  let isObject = pickedObj.forms[pickedForm][verbGrammar][0];
  let enObject = pickedObj.forms[pickedForm][verbGrammar][1];
  let isSubjHeadword = pickedSubject.is;
  let isVerbHeadword = pickedVerb.verbis;
  let isAdjectiveHeadword = pickedAdjective.adjis;
  let isObjHeadword = pickedObj.objis;
  let enSentence;
  if (useAdj) {
    if (adjDefOrIndef = 1) {
    enSentence = enSubject + " " + enVerb + " " + enAdjective + " " + enObject;
  } else if (adjDefOrIndef = 0) {
    let newEnObject = enObject.slice(4);
    enSentence = enSubject + " " + enVerb + " " + "the " + enAdjective + " " + newEnObject;
  }
  } else {
    enSentence = enSubject + " " + enVerb + " " + enObject;
  }

  if (useAdj) {
    return { 
      fields: [isSubject, isVerb, isAdjective, isObject], 
      english: enSentence, 
      headwords: [isSubjHeadword, isVerbHeadword, isAdjectiveHeadword, isObjHeadword]
    }
  } else {
  return { 
    fields: [isSubject, isVerb, isObject], 
    english: enSentence, 
    headwords: [isSubjHeadword, isVerbHeadword, isObjHeadword]
  }
}
}