var pixs = document.querySelectorAll('.pixel');
let pixels = [];
let sketchBoard = document.querySelector('#sketchBoard');
var root = document.querySelector(':root');


document.getElementById('pixelSlider').addEventListener('change', function(e){
    setBoard(e.target.value); //prepares everything for drawBoard
    drawBoard(e.target.value,e.target.value);
    pixs = document.querySelectorAll('.pixel');
    return pixs.forEach(pixel => pixel.addEventListener('mouseover', test));
});

document.getElementById('colorPicker').addEventListener("change", function(e){
    root.style.setProperty('--backgroundColor', e.target.value);
    console.log(getComputedStyle(root).getPropertyValue('--backgroundColor'))

});

document.getElementById('clear').addEventListener('click',function(){
    pixs.forEach(pixel => pixel.style.backgroundColor = 'white');
});


function setBoard(pixChoice){

    while(sketchBoard.firstChild){
        sketchBoard.removeChild(sketchBoard.firstChild);
    } //removes grid

    let percent = 100/pixChoice; 
    root.style.setProperty('--pixelHeight', `${percent}%`);
    root.style.setProperty('--pixelWidth', `${percent}%`);
}

function drawBoard(pix, maxPixels){

    if (pix === 0) return;

    drawBoard(pix - 1,maxPixels);

    for(let i = 0; i < maxPixels; i++){
        pixels[i] = document.createElement("div");
        sketchBoard.append(pixels[i]);
        pixels[i].classList.add("pixel");
    }
}

function test(e){
    //root.style.setProperty('--backgroundColor', 'black');
    this.style.backgroundColor = getComputedStyle(root).getPropertyValue('--backgroundColor');
}

window.onload = function(){
    console.log('Hello');
    setBoard(50);
    drawBoard(50,50);
    pixs = document.querySelectorAll('.pixel');
    return pixs.forEach(pixel => pixel.addEventListener('mouseover', test));
};