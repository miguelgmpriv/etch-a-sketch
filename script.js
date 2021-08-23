
let pixels = [];
let sketchBoard = document.querySelector('#sketchBoard');
var root = document.querySelector(':root');
let option = 0;

document.getElementById('pixelSlider').addEventListener('change', function(e){
    //user selected pixel size used here to start setting up the board
    setBoard(e.target.value); 
    drawBoard(e.target.value,e.target.value); 
});

document.getElementById('colorPicker').addEventListener("change", function(e){
    //gets the value from color input and updates css variable
    root.style.setProperty('--backgroundColor', e.target.value);
    option = 0;
});

document.getElementById('clear').addEventListener('click',function(){
    //"clears" the board by changing all the pixel class background to white.
    let pixs = document.querySelectorAll('.pixel');
    pixs.forEach(pixel => pixel.style.backgroundColor = 'white');
});

document.getElementById('eraser').addEventListener('click', options); //begin "eraser" thread

document.getElementById('rgb').addEventListener('click', options);

document.getElementById('sketchBoard').addEventListener('mouseover', changePixel);

function setBoard(pixChoice){

    while(sketchBoard.firstChild){
        sketchBoard.removeChild(sketchBoard.firstChild);
    } //removes grid

    let percent = 100/pixChoice; // used to set up board based on percentage
    root.style.setProperty('--pixelHeight', `${percent}%`);
    root.style.setProperty('--pixelWidth', `${percent}%`);
}

function drawBoard(pix, maxPixels){
    //use recursion to draw the board
    if (pix === 0) return;
    
    drawBoard(pix - 1,maxPixels);
    
    for(let i = 0; i < maxPixels; i++){
        pixels[i] = document.createElement("div");
        sketchBoard.append(pixels[i]);
        pixels[i].classList.add("pixel");
    }
}
function options(event){
    if (event.target.id === 'eraser'){
        root.style.setProperty('--backgroundColor', `white`);
        option = 0;
    } else if (event.target.id === 'rgb'){
        option = 1;
    }
}

function changePixel(event){
    if (option === 1) {
        let rgb = Math.floor(Math.random()*16777215).toString(16);
        root.style.setProperty('--backgroundColor', `#${rgb}`);
    } 
    event.target.style.backgroundColor = getComputedStyle(root).getPropertyValue('--backgroundColor');            
}

window.onload = function(){
    //default board settings
    setBoard(50);
    drawBoard(50,50);
};