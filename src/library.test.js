import getSentence from './library'

function getFirstFromList(list) {
    return list[0]
  }

test('getSentence generates a question', () => {
    expect(getSentence(getFirstFromList)).toEqual({
        "english": "I hate a picture",
        "fields": [
            "Ég",
            "hata",
            "mynd",
        ],
        "headwords": [
            "Ég",
            "hata",
            "mynd",
        ],
    });
  });