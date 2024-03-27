
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
        currentPlayer: 1,
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
                console.log(`Square with id ${square.id} was clicked`)
                console.log(`Current player is ${App.state.currentPlayer}`)


                // Return early if the clicked square is not empty
                if (square.hasChildNodes()) {
                    console.log("Square is not empty");
                    return;
                }

                // Determine which icon to add to the square
                const currentPlayer = App.state.currentPlayer;

                const icon = document.createElement('i');
                if (currentPlayer === 1) {
                    icon.classList.add("fa-solid", "fa-x", "yellow");
                } else {
                    icon.classList.add("fa-solid", "fa-o", "turquoise");
                }

                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;
                App.state.moves.push({
                    squareId: square.push
                })


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
            })
        })
    }
};


// window.addEventListener('load', () => App.init())
window.addEventListener('load', App.init)


