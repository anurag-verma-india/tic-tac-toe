
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
        currentPlayer: 2
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
                console.log(`Square with id ${event.target.id} was clicked`)

                const currentPlayer = App.state.currentPlayer;

                const icon = document.createElement('i');
                if (currentPlayer === 1) {
                    icon.classList.add("fa-solid", "fa-x", "yellow");
                } else {
                    icon.classList.add("fa-solid", "fa-o", "turquoise");
                }
                event.target.replaceChildren(icon);

                // <i class="fa-solid fa-x yellow"></i>
                // <i class="fa-solid fa-o turquoise"></i>
            })
        })
    }
};


// window.addEventListener('load', () => App.init())
window.addEventListener('load', App.init)


