export class Jumbler {

constructor() {
  this.allLetters = []
}

addLetter(letter) {
  this.allLetters.push(letter)
}

rotate() {
  const first = this.allLetters.shift()
  this.allLetters.push(first)
}

}
