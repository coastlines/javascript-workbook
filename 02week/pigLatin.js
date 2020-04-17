'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {
  // initialize variables
  let vowels = /[aeiou]/gi;
  let translation;
  let character;
  let wordIndex;

  // remove whitespace from argument and convert to lowercase
  let cleanWord = word.toLowerCase().trim();

  // check to see if the zero index of the argument is a vowel & return translation if true
  if (cleanWord[0].match(vowels)) {
    translation = cleanWord + 'yay';
    return translation;
  }

  // when the first letter is not a consonant, loop through argument until the first vowel appears and store its index
  for (character of cleanWord) {
    if (character.match(vowels)) {
      wordIndex = cleanWord.indexOf(character);
      // create and return translation
      translation = cleanWord.slice(wordIndex) + cleanWord.slice(0, wordIndex) + "ay";
      return translation;
    }
  }
}


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
