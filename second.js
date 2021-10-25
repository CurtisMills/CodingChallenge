// function to format body of text to array of words
function getLowerCaseWords(inputText) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const result = inputText.replace(regex, "");

  let wordsArray = result.toLowerCase().split(/[ ,]+/);
  return wordsArray;
}

function buildDictionaryHelper(bodyOfText) {
  let textToCount = getLowerCaseWords(bodyOfText);
  let wordsDictionary = {
    getOccurances: function (word) {
      return this.wordCounts[word];
    },
    wordCounts: {},
  };

  for (let i = 0; i < textToCount.length; i++) {
    let word = textToCount[i];
    if (word in wordsDictionary.wordCounts) {
      wordsDictionary.wordCounts[word]++;
    } else {
      wordsDictionary.wordCounts[word] = 1;
    }
  }
  return wordsDictionary;
}
