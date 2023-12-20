# The Odin Project - Battleship
This project's goal is to practice Test Driven Development with JS and Jest (which also requires the use of Babel). It also reinforces webpack and JS object knowledge. To play the game:
- clone the repo
- navigate your CLI to the repo folder
- install ````npm``` if necessary
- run ```npm init``` (press ```enter``` a bunch of times)
- run ```npm run start```

### Project Status
- battleship gameplay is complete
- missing LOTS of UI TDD! (I'm looking at you game-management.js)
- stylistically can be improved with animations/sounds/cooler board & ship design

### Main Takeaways
- TDD is SUPER helpful for building pure functions (and preventing tightly coupled code)
- TDD is also a great way to make designing objects and deciding where certain functions should reside simple
- TDD *feels* burdensome when it comes to DOM-manipulation function testing, but now that I have to play an entire game to get to the endOfGame() function, I can see exactly how necessary it is if only for time savings

### Other Interesting Things Learned
- the Array.prototype.forEach() loop cannot be broken with a return statement
- if you want to change some node's textContent to have an emoji, passing the usual &#x...; doesn't work. Instead, I used String.fromCodePoint(...)