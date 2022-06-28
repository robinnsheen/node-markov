/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    const phrases = new Map();
    for (let i = 0; i < this.words.length; i++) {
      //if the key doesnt exist, create an array, add in word
      //if the key does exist, append to array stored in key
      if (phrases.has(this.words[i])) {
        phrases.get(this.words[i]).push(this.words[i + 1] || null);
      } else {
        phrases.set(this.words[i], [this.words[i + 1] || null]);
      }
    }
    console.log(phrases);
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }

}

// const fsP = require('fs/promises');
// let args = process.argv;
// let filePath = args[2];

// /** Take a file path from arguments and return its contents */
// async function readMyFile(path) {
//   try {
//     let contents = await fsP.readFile(path, "utf8");
//     console.log("file contents", contents);
//     return contents;
//   } catch (err) {
//     console.log("error message", err.message);
//     process.exit(1);
//   }
// }

// async function getAndDo() {
//   let text = await readMyFile(filePath);
//   const textMachine = new MarkovMachine(text);
//   textMachine.getText();
// }

// getAndDo();
let text = `when by now and tree by leaf
she laughed his joy she cried his grief
bird by snow and stir by still
anyone’s any was all to her`;
const catInHatMachine = new MarkovMachine(text);
catInHatMachine.getText();