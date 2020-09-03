const WRAPPER = document.querySelector('.wrapper');
const CHESSBOARD_ARRAY = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

function renderChessBoard(array) {
    let layout = '';
    let counter = 0;
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (counter % 2 === 0) {
                layout += `<div class="square bg-black" ox=${j} oy=${i}></div>`;
            } else {
                layout += `<div class="square bg-white" ox=${j} oy=${i}></div>`;
            }
            counter++;
        }
        counter++;
    }
    WRAPPER.innerHTML = layout;
    addEventToSquare();
}

function addEventToSquare() {
    document.querySelectorAll('.square').forEach(function (element) {
        element.addEventListener('click', clickOnSquare);
    });
}

function clickOnSquare(elem) {
    document.querySelectorAll('.square').forEach(function (element) {
        element.classList.remove('green');
        element.classList.remove('active');
    });
    let y = +elem.target.getAttribute('oy');
    let x = +elem.target.getAttribute('ox');
    elem.target.classList.add('green');
    if (x + 2 < 8 && y - 1 >= 0) {
        document
            .querySelector(`div[ox='${x + 2}'][oy='${y - 1}']`)
            .classList.add('active');
    }
    if (x + 2 < 8 && y + 1 < 8) {
        document
            .querySelector(`div[ox='${x + 2}'][oy='${y + 1}']`)
            .classList.add('active');
    }
    if (x + 1 < 8 && y + 2 < 8) {
        document
            .querySelector(`div[ox='${x + 1}'][oy='${y + 2}']`)
            .classList.add('active');
    }
    if (x + 1 < 8 && y - 2 >= 0) {
        document
            .querySelector(`div[ox='${x + 1}'][oy='${y - 2}']`)
            .classList.add('active');
    }
    if (x - 2 >= 0 && y - 1 >= 0) {
        document
            .querySelector(`div[ox='${x - 2}'][oy='${y - 1}']`)
            .classList.add('active');
    }
    if (x - 2 >= 0 && y + 1 < 8) {
        document
            .querySelector(`div[ox='${x - 2}'][oy='${y + 1}']`)
            .classList.add('active');
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
        document
            .querySelector(`div[ox='${x - 1}'][oy='${y - 2}']`)
            .classList.add('active');
    }
    if (x - 1 >= 0 && y + 2 < 8) {
        document
            .querySelector(`div[ox='${x - 1}'][oy='${y + 2}']`)
            .classList.add('active');
    }
}

renderChessBoard(CHESSBOARD_ARRAY);
