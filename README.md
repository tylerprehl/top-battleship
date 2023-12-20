# The Odin Project - Battleship
This project's goals are tailored towards practicing Test Driven Development with JS and Jest. To run this project:
- clone the repo
- navigate your CLI to the repo folder
- run ```npm init```
- run ```npm run start```

### To Do
- display the winner message/win counts
- restart the game (but keep the same players, rotating who goes first)
- reset the game completely

### Main Takeaways
- TDD is SUPER helpful for building pure functions (and preventing tightly coupled code)
- TDD is also a great way to make designing objects and deciding where certain functions should reside simple
- TDD *feels* burdensome when it comes to DOM-manipulation function testing, but now that I have to play an entire game to get to the endOfGame() function, I can see exactly how necessary it is if only for time savings

### Other Interesting Things Learned
- the Array.prototype.forEach() loop cannot be broken with a return statement
- if you want to change some node's textContent to have an emoji, passing the usual &#x...; doesn't work. Instead, I used String.fromCodePoint(...)