

let pixels = [];
let sketchBoard = document.querySelector('.sketchBoard');
var root = document.querySelector(':root');
let maxPixels = prompt('Pixel number', '10');
maxPixels = Number(maxPixels);
percent = 100 / maxPixels;
root.style.setProperty('--pixelHeight', `${percent}%`);
root.style.setProperty('--pixelWidth', `${percent}%`);



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

const pixs = document.querySelectorAll('.pixel');

console.log(pixs);
pixs.forEach(pixel => pixel.addEventListener('mouseover', test));

function test(e){
    //root.style.setProperty('--backgroundColor', 'black');
    this.style.backgroundColor = 'black';
}
