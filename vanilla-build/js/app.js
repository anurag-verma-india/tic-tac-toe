import View from "./view.js"


// const App = {
//     // All of our selected HTML elements
//     $: {
//         menu: document.querySelector('[data-id="menu"]'),
//         menuItems: document.querySelector('[data-id="menu-items"]'),
//         resetBtn: document.querySelector('[data-id="reset-btn"]'),
//         newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
//         squares: document.querySelectorAll('[data-id="square"]'),
//         modal: document.querySelector('[data-id="modal"]'),
//         modalText: document.querySelector('[data-id="modal-text"]'),
//         modalBtn: document.querySelector('[data-id="modal-btn"]'),
//         turn: document.querySelector('[data-id="turn"]'),
//     },

//     state: {
//         moves: []
//     },

//     getGameStatus(moves) {
//         const player1Moves = moves.filter(move => move.playerId === 1).map(move => +move.squareId);
//         const player2Moves = moves.filter(move => move.playerId === 2).map(move => +move.squareId);

//         const winningPatterns = [
//             [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9],
//             [1, 4, 7],
//             [2, 5, 8],
//             [3, 6, 9],
//             [1, 5, 9],
//             [3, 5, 7]
//         ];

//         let winner = null;

//         winningPatterns.forEach((pattern) => {
//             const p1Wins = pattern.every((value) => player1Moves.includes(value));
//             const p2Wins = pattern.every((value) => player2Moves.includes(value));

//             if (p1Wins) winner = 1;
//             if (p2Wins) winner = 2;
//         });

//         return {
//             status: moves.length === 9 || winner !== null ? 'complete' : 'in-progress', // in-progress | finished
//             winner // 1 | 2 | null
//         }
//     },

//     init() {
//         App.registerEventListeners();
//     },

//     registerEventListeners() {

//         // DONE
//         App.$.menu.addEventListener("click", (event) => {
//             App.$.menuItems.classList.toggle('hidden');
//         }) 

//         // TODO
//         App.$.resetBtn.addEventListener("click", (event) => {
//             console.log("Reset the game");
//         })  
//         // TODO
//         App.$.newRoundBtn.addEventListener("click", (event) => {
//             console.log("Add a new round");
//         })
//         App.$.modalBtn.addEventListener('click', event => {
//             App.state.moves = [];

//             App.$.squares.forEach(square => { square.replaceChildren() })

//             App.$.modal.classList.add('hidden');
//         })

//         // TODO
//         App.$.squares.forEach(square => {
//             square.addEventListener('click', (event) => {
//                 // Return early if the clicked square hasMove in it
//                 const hasMove = (squareId) => {
//                     const existingMove = App.state.moves.find(
//                         (move) => move.squareId === squareId
//                     );
//                     return existingMove !== undefined;
//                 }
//                 if (hasMove(+square.id)) {
//                     return;
//                 }

//                 // Finding the current player
//                 const lastMove = App.state.moves[App.state.moves.length - 1];
//                 // const lastMove = App.state.moves.at(-1);
//                 const getOppositePlayer = (playerId) => playerId === 1 ? 2 : 1
//                 const currentPlayer = App.state.moves.length === 0 ? 1 : getOppositePlayer(lastMove.playerId);
//                 const nextPlayer = getOppositePlayer(currentPlayer);

//                 // Determine which icon to add to the square
//                 const squareIcon = document.createElement('i');
//                 const turnIcon = document.createElement('i');
//                 const turnLabel = document.createElement('p');
//                 turnLabel.innerText = `Player ${nextPlayer}, you are up!`

//                 if (currentPlayer === 1) {
//                     squareIcon.classList.add("fa-solid", "fa-x", "yellow");
//                     turnIcon.classList.add("fa-solid", "fa-o", "turquoise");
//                     turnLabel.classList = 'turquoise';

//                 } else {
//                     squareIcon.classList.add("fa-solid", "fa-o", "turquoise");
//                     turnIcon.classList.add("fa-solid", "fa-x", "yellow");
//                     turnLabel.classList = 'yellow';
//                 }

//                 App.$.turn.replaceChildren(turnIcon, turnLabel);

//                 App.state.moves.push({
//                     squareId: +square.id,
//                     playerId: currentPlayer
//                 })

//                 square.replaceChildren(squareIcon);
//                 // <i class="fa-solid fa-x yellow"></i>
//                 // <i class="fa-solid fa-o turquoise"></i>

//                 // Check if there is a winner or tie game

//                 const game = App.getGameStatus(App.state.moves);

//                 if (game.status === 'complete') {
//                     App.$.modal.classList.toggle('hidden');
//                     let message = ''
//                     if (game.winner) {
//                         message = `Player ${game.winner} wins!`;
//                     } else {
//                         message = 'Tie game!';
//                     }
//                     App.$.modalText.textContent = message;
//                 }
//                 console.log("\n\n");
//             })
//         })
//     }
// };


// // window.addEventListener('load', () => App.init())
// window.addEventListener('load', App.init)



function init() {
    const view = new View()

    view.bindGameResetEvent(event => {
        console.log("Reset Event")
        console.log(event)
    })


    view.bindNewRoundEvent(event => {
        console.log("New Round Event")
        console.log(event)
    })


    view.bindPlayerMoveEvent(event => {
        console.log("Move event")
        console.log(event)
    })



}

window.addEventListener("load", init)