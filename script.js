let pixels = [];
let sketchBoard = document.querySelector('.sketchBoard');
var root = document.querySelector(':root');
let maxPixels = prompt('Pixel number', '10');
maxPixels = Number(maxPixels);
percent = 100 / maxPixels;
root.style.setProperty('--pixelHeight', `${percent}%`);
root.style.setProperty('--pixelWidth', `${percent}%`);

function createBoard(){

    for(let i = 0, max = Number(maxPixels); i < max; i++){

        pixels[i] = document.createElement("div");
        sketchBoard.append(pixels[i]);
        pixels[i].classList.add("pixel");
    }
}

function drawBoard(pix){
    if (pix === 0) return;

    drawBoard(pix - 1);

    for(let i = 0; i < maxPixels; i++){
        pixels[i] = document.createElement("div");
        sketchBoard.append(pixels[i]);
        pixels[i].classList.add("pixel");
    }
}
drawBoard(maxPixels);
console.log(pixels)
