export class Jumbler {

  constructor () {
    this.allLetters = []
  }

  addLetter(letter) {
    if (this.allLetters.length < 10 ) {
      this.allLetters.push(letter)
    } else {
      console.log('hey, you already added to many letters!')
    }
  }
}
