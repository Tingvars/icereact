const questions = [
    { id: 1, fields: ["Hann", "borðar", "fisk"], english: "He eats fish", headwords: ["Hann", "borða", "fiskur"]}
];

export function getQuestion() {
    return questions[0];
}