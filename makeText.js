/** Command-line tool to generate Markov text. */

describe("getChains", function () {
  test("test ", function () {
    const catInHatMachine = new MarkovMachine("cat in the hat");
    const chains = catInHatMachine.getChains();
    const testChains = new Map([
      ["cat", ["in"]],
      ["in", ["the"]],
      ["the", ["hat"]]
    ]);
    expect(chains).toEqual(testChains);
  });

  test("test ", function () {
    const catInHatMachine = new MarkovMachine("The cat in the hat");
    const chains = catInHatMachine.getChains();
    const testChains = new Map([
      ["cat", ["in"]],
      ["in", ["the"]],
      ["the", ["hat"]]
    ]);
    expect(chains).not.toEqual(testChains);
  });
});

describe("getText", function () {
  test("test ", function () {
    const catInHatMachine = new MarkovMachine("cat in the hat");
    const text = catInHatMachine.getText();
    const testText = "the cat in the hat"
    expect(text).toEqual(testText);
  });
});