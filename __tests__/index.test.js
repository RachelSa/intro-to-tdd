'use strict';

import {Jumbler} from '../index';

it('adds a new letter to letters', () => {
  let jumbler = new Jumbler()
  expect(jumbler.addLetter("a")[0]).toBe("a");
  expect(jumbler.letters.length).toBe(1)
});
