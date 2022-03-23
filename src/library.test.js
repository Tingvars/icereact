import getSentence from './library'

function getFirstFromList(list) {
    return 0
  }

test('getSentence generates a question without adjectives', () => {
    const config = {
        useAdj: false
    };
    const sentence = getSentence(config, getFirstFromList)

    expect(sentence).toEqual({
        "english": "I meet a dog",
        "fields": [
            "Ég",
            "hitti",
            "hund",
        ],
        "headwords": [
            "Ég",
            "hitta",
            "hundur",
        ],
    });
  });

  test('getSentence generates a question with adjectives', () => {
    const config = {
        useAdj: true
    };
    const sentence = getSentence(config, getFirstFromList)

    expect(sentence).toEqual({
        "english": "I meet an old dog",
        "fields": [
            "Ég",
            "hitti",
            "gamlan",
            "hund",
        ],
        "headwords": [
            "Ég",
            "hitta",
            "gamall",
            "hundur",
        ],
    });
  });