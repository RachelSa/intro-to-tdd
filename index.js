

export class Jumbler {
  constructor(){
    this.letters = []
  }

  addLetter(letter) {
    this.letters.push(letter)
    return this.letters
  }
}
