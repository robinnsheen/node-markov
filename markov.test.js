"use strict";
const {MarkovMachine} = require("./markov");

describe("getChains", function () {
  test("test ", function () {
    const catInHatMachine = new MarkovMachine("cat in the hat");
    const chains = catInHatMachine.getChains();
    const testChains = new Map([
      ["cat", ["in"]],
      ["in", ["the"]],
      ["the", ["hat"]],
      ["hat", [null]]
    ]);
    expect(chains).toEqual(testChains);
  });

  test("test ", function () {
    const catInHatMachine = new MarkovMachine("cat in the the hat");
    const chains = catInHatMachine.getChains();
    const testChains = new Map([
      ["cat", ["in"]],
      ["in", ["the"]],
      ["the", ["the", "hat"]],
      ["hat", [null]]
    ]);
    expect(chains).toEqual(testChains);
  });
});

describe("getText", function () {
  test("test ", function () {
    const catInHatMachine = new MarkovMachine("cat in the hat");
    const text = catInHatMachine.getText();
    const testText = "cat in the hat";
    expect(text).toEqual(testText);
  });
});