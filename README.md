# The Odin Project - Battleship
This project's goals are tailored towards practicing Test Driven Development with JS and Jest. To run this project:
- clone the repo
- navigate your CLI to the repo folder
- run ```npm init```
- run ```npm run start```

### To Do
- Interactive UI for attacking (click on the enemy's board - remember to hide unknown!)
- Reset the game completely

### Main Takeaways
- TDD is SUPER helpful for building pure functions (and preventing tightly coupled code)
- TDD is also a great way to make designing objects and deciding where certain functions should reside simple

### Other Interesting Things Learned
- the Array.prototype.forEach() loop cannot be broken with a return statement

### Notes (to Self) for Gameplay Design/Order
- create player1
- build player1 board
- 'pass computer' screen
- build player2/AI board
- 'pass computer' screen & start game
- player1 attacks
- 'pass' screen
- player2/AI attacks
- 'pass' screen
- etc...
- player/AI win/play again/reset screen