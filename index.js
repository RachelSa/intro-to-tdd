export class Jumbler {
  constructor(){
    this.letters = []
  }

  addLetter(letter) {
    if (this.letters.length < 10) {
      this.letters.push(letter)
    }
    return this.letters 
  }

  rotate() {
    const first = this.letters.splice(0,1)[0]
    this.letters.push(first)
  }
}
