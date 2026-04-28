// Board
let board;
let boardWidth = 350;
let boardHeight = 576;
let context;

// Doodler
let doodlerwidth = 46;
let doodlerheight = 46;
let doodlerX = boardWidth / 2 - doodlerwidth / 2;
let doodlerY = boardHeight * 7 / 8 - doodlerheight;
let doodlerRightImg;
let doodlerLeftImg;

// Physics
let VelocityX = 0;

let doodler = {
    img : null,
    x : doodlerX,
    y : doodlerY,
    width : doodlerwidth,
    height : doodlerheight
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // Used for drawing on the board

    // Load doodler images
    doodlerRightImg = new Image();
    doodlerRightImg.src = "./doodler-right.png";
    doodler.img = doodlerRightImg; // Set the initial image to the right-facing doodler
    doodler.img.onload = function() {
        context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
    }

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "./doodler-left.png";

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDoodler);
}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    // Doodler
    doodler.x += velocityX;
    if (doodler.x > boardWidth) {
        doodler.x = 0;
    }
    else if (doodler.x + doodler.width < 0) {
        doodler.x = boardWidth;
    }
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
}

function moveDoodler(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") {
        velocityX = 4;
        doodler.img = doodlerRightImg;
    }
    else if (e.code == "ArrowLeft" || e.code == "KeyA") {
        velocityX = -4;
        doodler.img = doodlerLeftImg;
    }
}    

// 20:41 - https://www.youtube.com/watch?v=pHFtOYU-a20&list=PLnKe36F30Y4bLhA-st9sC4ZthyV7nsL2Q&index=6&t=126s