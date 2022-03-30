import {getSentence, objects, adjectives} from './library'

// toBeAnArticle 

expect.extend({
    toBeAnArticle(received) {
        const pass = received === "a" || received === "an";
        return {message: "Article should be a or an", pass}
    }
})

function getFirstFromList(list) {
    return 0
  }

  test('adjective contains valid article', () => {
    //check that each adjective has an article and that it is a or an
        
    adjectives.forEach(adjective => {
        expect(adjective).toHaveProperty("article");
        expect(adjective.article).toBeAnArticle()
    });
  });

  test('object contains valid article', () => {
    //check that each object has an article and that it is a or an
        
    objects.forEach(object => {
        expect(object).toHaveProperty("article");
        expect(object.article).toBeAnArticle()
    });
  });

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