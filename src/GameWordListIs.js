const questions = [
    { id: 1, fields: ["Hann", "borðar", "fisk"], english: "1 He eats fish", headwords: ["Hann", "borða", "fiskur"]},
    { id: 2, fields: ["Ég", "sé", "sólina"], english: "2 I see the sun", headwords: ["Ég", "sjá", "sólin"]},
    { id: 3, fields: ["Þau", "lesa", "bækur"], english: "3 They read books", headwords: ["Þau", "lesa", "bækur"]},
    { id: 4, fields: ["Konan", "drekkur", "kaffi"], english: "4 The woman drinks coffee", headwords: ["Konan", "drekka", "kaffi"]},
    { id: 5, fields: ["Maðurinn", "tekur", "bílinn"], english: "5 The man takes the car", headwords: ["Maðurinn", "taka", "bíllinn"]}
    
];

export function getQuestion(questionCounter) {

    return questions[questionCounter];
}