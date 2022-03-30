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
[["hundur", "dog"], ["hund", "dog"], ["hundi", "dog"], ["hunds", "dog"]], 
[["hundar", "dogs"], ["hunda", "dogs"], ["hundum", "dogs"], ["hunda", "dogs"]],  
[["hundurinn", "dog"], ["hundinn", "dog"], ["hundinum", "dog"], ["hundsins", "dog"]],  
[["hundarnir", "dogs"], ["hundana", "dogs"], ["hundunum", "dogs"], ["hundanna", "dogs"]], 
],
article: "a",
},
{objis:"tölva",
objen:"computer",
gender:1,
forms:[
[["tölva", "computer"], ["tölvu", "computer"], ["tölvu", "computer"], ["tölvu", "computer"]], 
[["tölvur", "computers"], ["tölvur", "computers"], ["tölvum", "computers"], ["tölva", "computers"]],  
[["tölvan", "computer"], ["tölvuna", "computer"], ["tölvunni", "computer"], ["tölvunnar", "computer"]],  
[["tölvurnar", "computers"], ["tölvurnar", "computers"], ["tölvunum", "computers"], ["tölvanna", "computers"]], 
],
article: "a",
},
{objis:"ljós",
objen:"light",
gender:2,
forms:[
[["ljós", "light"], ["ljós", "light"], ["ljósi", "light"], ["ljóss", "light"]], 
[["ljós", "lights"], ["ljós", "lights"], ["ljósum", "lights"], ["ljósa", "lights"]],  
[["ljósið", "light"], ["ljósið", "light"], ["ljósinu", "light"], ["ljóssins", "light"]],  
[["ljósin", "lights"], ["ljósin", "lights"], ["ljósunum", "lights"], ["ljósanna", "lights"]], 
],
article: "a",
},
{objis:"bolti",
objen:"ball",
gender:0,
forms:[
[["bolti", "ball"], ["bolta", "ball"], ["bolta", "ball"], ["bolta", "ball"]], 
[["boltar", "balls"], ["bolta", "balls"], ["boltum", "balls"], ["bolta", "balls"]],  
[["boltinn", "ball"], ["boltann", "ball"], ["boltanum", "ball"], ["boltans", "ball"]],  
[["boltarnir", "balls"], ["boltana", "balls"], ["boltunum", "balls"], ["boltanna", "balls"]], 
],
article: "a",
},
{objis:"bíll",
objen:"car",
gender:0,
forms:[
[["bíll", "car"], ["bíl", "car"], ["bíl", "car"], ["bíls", "car"]], 
[["bílar", "cars"], ["bíla", "cars"], ["bílum", "cars"], ["bíla", "cars"]],  
[["bíllinn", "car"], ["bílinn", "car"], ["bílnum", "car"], ["bílsins", "car"]],  
[["bílarnir", "cars"], ["bílana", "cars"], ["bílunum", "cars"], ["bílanna", "cars"]], 
],
article: "a",
},
{objis:"mynd",
objen:"picture",
gender:1,
forms:[
[["mynd", "picture"], ["mynd", "picture"], ["mynd", "picture"], ["myndar", "picture"]], 
[["myndir", "pictures"], ["myndir", "pictures"], ["myndum", "pictures"], ["mynda", "pictures"]],  
[["myndin", "picture"], ["myndina", "picture"], ["myndinni", "picture"], ["myndarinnar", "picture"]],  
[["myndirnar", "pictures"], ["myndirnar", "pictures"], ["myndunum", "pictures"], ["myndanna", "pictures"]], 
],
article: "a",
},
{objis:"epli",
objen:"apple",
gender:2,
forms:[
[["epli", "apple"], ["epli", "apple"], ["epli", "apple"], ["eplis", "apple"]], 
[["epli", "apples"], ["epli", "apples"], ["eplum", "apples"], ["epla", "apples"]],  
[["eplið", "apple"], ["eplið", "apple"], ["eplinu", "apple"], ["eplisins", "apple"]],  
[["eplin", "apples"], ["eplin", "apples"], ["eplunum", "apples"], ["eplanna", "apples"]], 
],
article: "an",
},
{objis:"hús",
objen:"house",
gender:2,
forms:[
[["hús", "house"], ["hús", "house"], ["húsi", "house"], ["húss", "house"]], 
[["hús", "houses"], ["hús", "houses"], ["húsum", "houses"], ["húsa", "houses"]],  
[["húsið", "house"], ["húsið", "house"], ["húsinu", "house"], ["hússins", "house"]],  
[["húsin", "houses"], ["húsin", "houses"], ["húsunum", "houses"], ["húsanna", "houses"]], 
],
article: "a",
},
  {objis:"hestur",
  objen:"horse",
  gender:0,
  forms:[
  [["hestur", "horse"], ["hest", "horse"], ["hesti", "horse"], ["hests", "horse"]], 
  [["hestar", "horses"], ["hesta", "horses"], ["hestum", "horses"], ["hesta", "horses"]],  
  [["hesturinn", "horse"], ["hestinn", "horse"], ["hestinum", "horse"], ["hestsins", "horse"]],  
  [["hestarnir", "horses"], ["hestana", "horses"], ["hestunum", "horses"], ["hestanna", "horses"]], 
],
article: "a",
},
{objis:"borð",
  objen:"table",
  gender: 2,
  articles: ["a", "the"],
  forms:[
    [["borð", "table"], ["borð", "table"], ["borði", "table"], ["borðs", "table"]], 
    [["borð", "tables"], ["borð", "tables"], ["borðum", "tables"], ["borða", "tables"]],  
    [["borðið", "table"], ["borðið", "table"], ["borðinu", "table"], ["borðsins", "table"]],  
    [["borðin", "tables"], ["borðin", "tables"], ["borðunum", "tables"], ["borðanna", "tables"]], 
  ],
  article: "a",
  },
]

const adjectives = [
  {adjis: "gamall",
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
],
article: "an",
},
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
],
article: "a",
},
{adjis: "góður",
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
],
article: "a",
}
]

function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length)
}

//let config = { useAdjectives: true }

function getSentence(config, randomFunc = getRandomIndex) {

  const {useAdj} = config;

  //let useAdj = false;

  // if (useAdj) {
  //   getAdjectiveSentence(config, randomFunc)
  // }

  let pickedSubject = subjects[randomFunc(subjects)];
  let subjectGrammar = pickedSubject.grammar;

  let pickedVerb = verbs[randomFunc(verbs)];
  let verbGrammar = pickedVerb.grammar;

  let pickedObj = objects[randomFunc(objects)];

  let pickedFormIndex = randomFunc(pickedObj.forms);

  let isSubject = pickedSubject.is;
  let enSubject = pickedSubject.en;
  let isVerb = pickedVerb.forms[subjectGrammar][0];
  let enVerb = pickedVerb.forms[subjectGrammar][1];
  let objectGender = pickedObj.gender;
  let pickedAdjective = adjectives[randomFunc(adjectives)];
  let enAdjective = pickedAdjective.adjen;
  let adjDefOrIndef;
  if (pickedFormIndex < 2) {
    adjDefOrIndef = 1;
  } else {
    adjDefOrIndef = 0;
  }
  let adjSingOrPlur;
  if (pickedFormIndex === 0) {
    adjSingOrPlur = 0;
  } else if (pickedFormIndex === 1) {
    adjSingOrPlur = 1;
  } else if (pickedFormIndex === 2) {
    adjSingOrPlur = 0;
  } else if (pickedFormIndex === 3) {
    adjSingOrPlur = 1;
  }

  let isAdjective = pickedAdjective.forms[adjDefOrIndef][objectGender][adjSingOrPlur][verbGrammar];
  
    //gender (nos 0,1,2) from object objectGender, 
    //case (nos 0,1,2,3) from verb verbGrammar, 
    //def&indef (0(sing),1(plur),2(sing),3(plur))from object pickedForm
  
  let isObject = pickedObj.forms[pickedFormIndex][verbGrammar][0];
  let enObject = pickedObj.forms[pickedFormIndex][verbGrammar][1];
  let isSubjHeadword = pickedSubject.is;
  let isVerbHeadword = pickedVerb.verbis;
  let isAdjectiveHeadword = pickedAdjective.adjis;
  let isObjHeadword = pickedObj.objis;
  let enSentence;
  if (useAdj) {
    if (pickedFormIndex === 0) {
    enSentence = enSubject + " " + enVerb + " " + pickedAdjective.article + " " + enAdjective + " " + enObject;
  } else if (pickedFormIndex === 1 ) {
    enSentence = enSubject + " " + enVerb + " " + enAdjective + " " + enObject;
  } else if (pickedFormIndex === 2 ) {
    enSentence = enSubject + " " + enVerb + " " + "the " + enAdjective + " " + enObject;
  } else if (pickedFormIndex === 3 ) {
    enSentence = enSubject + " " + enVerb + " " + "the " + enAdjective + " " + enObject;
  }
  } else {
    if (pickedFormIndex === 0) {
      enSentence = enSubject + " " + enVerb + " " + pickedObj.article + " " + enObject;
    } else if (pickedFormIndex === 1 ) {
      enSentence = enSubject + " " + enVerb + " " + enObject;
    } else if (pickedFormIndex === 2 ) {
      enSentence = enSubject + " " + enVerb + " the " + enObject;
    } else if (pickedFormIndex === 3 ) {
      enSentence = enSubject + " " + enVerb + " the " + enObject;
    } 
  }

  if (useAdj) {
    return { 
      pickedObj,
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

export {getSentence, objects, adjectives}