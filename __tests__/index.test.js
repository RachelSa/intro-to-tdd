import {Jumbler} from '../index';

describe('addLetter', () => {

  const jumbler = new Jumbler()

  it('should take in a letter and return all letters', () => {
    jumbler.addLetter("a")
    expect(jumbler.allLetters).toEqual(["a"])
    expect(jumbler.allLetters.length).toEqual(1)
  })

  it('should take in another letter and return all letters', () => {
    jumbler.addLetter("b")
    expect(jumbler.allLetters).toEqual(["a", "b"])
    expect(jumbler.allLetters.length).toEqual(2)
  })
})

describe('rotate', () => {
  const jumbler = new Jumbler()

  it('should move the letter in the first position to the last position', () =>{
    jumbler.allLetters = ["a", "b", "c"]
    jumbler.rotate()
    expect(jumbler.allLetters[jumbler.allLetters.length - 1]).toEqual("a")
    expect(jumbler.allLetters[0]).toEqual("b")
  })

  xit('should move the letter in the first position to the last position', () =>{
    jumbler.allLetters = ["d", "e", "f"]
    jumbler.rotate()
    expect(jumbler.allLetters[jumbler.allLetters.length - 1]).toEqual("d")
  })
})
