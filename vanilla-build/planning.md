# Where do you start writing?

## What can a player do in my app?

1. Player can make a move

   - What is a game move?
     - Who is up? (turn indicator, icon to play)
     - Did the latest move cause a tie or a game win?
     - Who won? Was it a tie?
   - What "state" do I need to track?
     - Current Player
     - Total wins by player
     - Total Ties
     - Prior Game History

2. New Round
3. Reset current game
4. Toggle menu

### Progression of project

1. All in one file
2. Refactors
3. MVC in the end
   a. Easier to debug
   b. Easier to add functionality to

## Best Practices when developing user interfaces

1. Global Scope and namespaces
2. Stable selectors (data-\* attributes)
3. Separate logic by responsibility ("separation of concerns")

## What is a state?

1. Client state

```js
const clientState = {
  isMenuOpen: false,
};
```

2. Server state

```js
const serverState = {
  currentPlayer: 1,
  currentGame: [],
  gameHistory: [],
};
```
