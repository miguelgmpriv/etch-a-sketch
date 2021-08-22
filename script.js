var pixs = document.querySelectorAll('.pixel');

let pixels = [];
let sketchBoard = document.querySelector('.sketchBoard');
var root = document.querySelector(':root');

document.getElementById('pixelSlider').addEventListener('change', function(e){
    setBoard(e.target.value);
    drawBoard(e.target.value,e.target.value);
    pixs = document.querySelectorAll('.pixel');
    console.log(pixs);
    return pixs.forEach(pixel => pixel.addEventListener('mouseover', test));
});

function setBoard(pixChoice){
    let percent = 100/pixChoice;
    root.style.setProperty('--pixelHeight', `${percent}%`);
    root.style.setProperty('--pixelWidth', `${percent}%`);
}

function drawBoard(pix, maxPixels){
    console.log(maxPixels);
    if (pix === 0) return;

    drawBoard(pix - 1,maxPixels);

    for(let i = 0; i < maxPixels; i++){
        pixels[i] = document.createElement("div");
        sketchBoard.append(pixels[i]);
        pixels[i].classList.add("pixel");
    }
}

function test(e){
    console.log(e);
    //root.style.setProperty('--backgroundColor', 'black');
    this.style.backgroundColor = 'black';
}