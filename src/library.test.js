import getSentence from './library'

function getFirstFromList(list) {
    return 0
  }

test('getSentence generates a question without adjectives', () => {
    const config = {
        useAdjectives: false
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
        useAdjectives: true
    };
    const sentence = getSentence(config, getFirstFromList)

    expect(sentence).toEqual({
        "english": "I meet a big dog",
        "fields": [
            "Ég",
            "hitti",
            "stóran",
            "hund",
        ],
        "headwords": [
            "Ég",
            "hitta",
            "stór",
            "hundur",
        ],
    });
  });