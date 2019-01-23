import {Jumbler} from '../index';

function last(arr) {
  return arr[arr.length - 1]
}

describe('addLetter', () => {
  const jumbler = new Jumbler()

  it('should take in a letter and add it to allLetters', () => {
    jumbler.addLetter('a')
    expect(jumbler.allLetters.length).toBe(1)
    expect(last(jumbler.allLetters)).toBe('a')
  })

  it('should take in another letter and add it to allLetters', () => {
    jumbler.addLetter('b')
    expect(jumbler.allLetters.length).toBe(2)
    expect(last(jumbler.allLetters)).toBe('b')
  })

  it('should not allow allLetter to have a length longer than 10', () => {
    jumbler.allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    jumbler.addLetter('b')
    expect(jumbler.allLetters.length).toBe(10)
    expect(last(jumbler.allLetters)).toBe('j')
  })
})

