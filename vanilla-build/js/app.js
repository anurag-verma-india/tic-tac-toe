
const App = {
    // All of our selected HTML elements
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]'),
    },

    state: {
        moves: []
    },

    init() {
        App.registerEventListeners();
    },

    registerEventListeners() {

        // DONE
        App.$.menu.addEventListener("click", (event) => {
            App.$.menuItems.classList.toggle('hidden');
        })

        // TODO
        App.$.resetBtn.addEventListener("click", (event) => {
            console.log("Reset the game");
        })
        // TODO
        App.$.newRoundBtn.addEventListener("click", (event) => {
            console.log("Add a new round");
        })
        // TODO
        App.$.squares.forEach(square => {
            square.addEventListener('click', (event) => {
                // Return early if the clicked square hasMove in it
                const hasMove = (squareId) => {
                    const existingMove = App.state.moves.find(
                        (move) => move.squareId === squareId
                    );
                    return existingMove !== undefined;
                }
                if (hasMove(+square.id)) {
                    return;
                }

                // Finding the current player
                const lastMove = App.state.moves[App.state.moves.length - 1];
                // const lastMove = App.state.moves.at(-1);
                const getOppositePlayer = (playerId) => playerId === 1 ? 2 : 1
                const currentPlayer = App.state.moves.length === 0 ? 1 : getOppositePlayer(lastMove.playerId);


                // Determine which icon to add to the square
                const icon = document.createElement('i');
                if (currentPlayer === 1) {
                    icon.classList.add("fa-solid", "fa-x", "yellow");
                } else {
                    icon.classList.add("fa-solid", "fa-o", "turquoise");
                }

                App.state.moves.push({
                    squareId: +square.id,
                    playerId: currentPlayer
                })

                // App.state.currentPlayer = currentPlayer === 1 ? 2 : 1;

                square.replaceChildren(icon);
                // <i class="fa-solid fa-x yellow"></i>
                // <i class="fa-solid fa-o turquoise"></i>

                // Check if there is a winner or tie game

                const winningPatterns = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9],
                    [1, 5, 9],
                    [3, 5, 7]
                ];
                console.log("\n\n");
            })
        })
    }
};


// window.addEventListener('load', () => App.init())
window.addEventListener('load', App.init)


