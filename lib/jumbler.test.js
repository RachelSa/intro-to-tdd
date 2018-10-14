"use strict";

const Jumbler = require('./jumbler');

test('adds a letter to letters', () => {
  const jumbler = Jumbler.new();
  expect(jumbler.addLetter("a")[0]).toBe("a");
});