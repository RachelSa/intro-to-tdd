'use strict';

import {Jumbler} from '../index';
import last from '../test_helper/last.js';

describe( 'addLetter', () => {

  const jumbler = new Jumbler()

  it('adds a new letter to letters', () => {
    expect(last(jumbler.addLetter("a"))).toBe("a");
    expect(jumbler.letters.length).toBe(1)
  });

  it('adds another new letter to letters', () => {
    expect(last(jumbler.addLetter("b"))).toBe("b");
    expect(jumbler.letters.length).toBe(2)
  });

  it ("doesn't add more than 10 letters to the letters list", () => {
    jumbler.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

    expect(last(jumbler.addLetter("k"))).toBe("j");
  })
})

describe( 'rotate', () => {

  it('puts the first letter in the last position', () => {
    const jumbler = new Jumbler()
    jumbler.addLetter('a')
    jumbler.addLetter('c')
    jumbler.addLetter('t')

    jumbler.rotate()
    expect(last(jumbler.letters)).toBe("a");
    jumbler.rotate()
    expect(last(jumbler.letters)).toBe("c");
    jumbler.rotate()
    expect(last(jumbler.letters)).toBe("t");
  })

})
