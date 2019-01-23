# intro-to-tdd
Lecture code for Intro to TDD

[Jumble](https://patchesofpride.files.wordpress.com/2015/03/gijoejumble.jpg?w=580)
[Jest](https://jestjs.io/docs/en/getting-started.html)
[Babel](https://jest-bot.github.io/jest/docs/babel.html)

## Before getting started
 - A bit about me
 - What is TDD?
    - Tests drive implementation
    - A way of approaching a problem
    - Start with simple tests and simple implementation
 - Why TDD?
    - Allows secure refactor
    - Secure deployments
    - Tests as documentation
 - The code challenge approach, generally
    - language and framework-agnostic. (Don't worry about the things you don't know!)
    - you may encounter it in your job search
 - The code challenge approach in this study group
    - I'll write the test and invite you to talk me through writing the implementation.
    - Ask for help if you need it; this is collaborative!
    - This is an approach you can try in your next project or when preparing for code challenges, but it's not something you need to study as part of your FI curriculum.
 - What is the Jumble?
 - Directory tour

## To Do

  1. Jumbler should have a function `addLetter`, which takes in a letter as an argument and returns `allLetters`.
  2. No more that 10 letters should be added. After 10 letters are in `allLetters`, it should not add letters to it's length, even if `addLetter` is called.
  3. Jumbler should have a function `rotate`, which takes the first letter from `allLetters`, and moves it to the last position.

