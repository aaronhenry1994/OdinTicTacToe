let color = 'black';

function createGrid(size) {
    let grid = document.getElementById('grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
for (let i =0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', inkPen)
    square.style.backgroundColor = 'white';
    grid.insertAdjacentElement('beforeend', square);
}
}

createGrid(16);

function inkPen() {
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color = choice;
}

function changeSize(input) {
    createGrid(input)
}

function clearBoard() {
    window.location.reload();
}