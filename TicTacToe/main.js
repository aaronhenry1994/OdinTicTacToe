const pieces = ['x', 'o', 'x', 'o', 'o', 'x', 'o', 'x'];

const board = document.createElement('div');
document.body.appendChild(board);

const xbtn = document.querySelector('.xbtn');
const obtn = document.querySelector('.obtn');

const playerFactory = (tokenChoice) => {
    const playerChoice = (event) => console.log('You chose' + {tokenChoice});
    return {tokenChoice};
};

const computerFactory = (computerToken) => {
    return {computerToken}
};

const playerX = playerFactory('X');
const playerO = playerFactory('O');

const player = playerFactory();

const computer = computerFactory();

const computerX = computerFactory('X');
const computerO = computerFactory('O');

const choices = (playerToken, computerToken) => {
    const playerChoice = () => {
        if (target === playerX) {
            console.log('You chose X')
            return playerX
        }
        else if (target == playerO) {
            console.log('You chose O')
            return playerO
        }
    }
    const computerChoice = () => {
        if (target === playerX) {
            console.log('Computer chooses O')
            return computerO;
        }
        else if (target == playerO) {
            console.log('Computer chooses X')
            return computerX;
        }
    }
    return {playerToken, computerToken}
};

const players = choices();

xbtn.addEventListener('click', (e) => {
    event.preventDefault()

    players.playerToken = 'X';
    players.computerToken = 'O';

    console.log(players);
});

obtn.addEventListener('click', (e) => {
    event.preventDefault();

    players.playerToken = 'O';
    players.computerToken = 'X';

    console.log(players);
});

const emptyBtns = document.querySelectorAll('.emptyBtn');

let gameArray = Array.from(emptyBtns);

console.log(gameArray)

choices();

emptyBtns.forEach(btn => btn.addEventListener('click', () => {

    const thisGame = choices();

    btn.textContent = players.playerToken;

    choices();
    console.log(players);

}))