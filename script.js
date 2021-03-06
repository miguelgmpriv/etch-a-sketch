let pixels = []; //Empty array for our board
const sketchBoard = document.querySelector('#sketchBoard');
const root = document.querySelector(':root');
let option = 0; //Global variable to switch on or off random color

//All event listeners to go to options or changePixel functions
document.getElementById('pixelSlider').addEventListener('change', options);
document.getElementById('colorPicker').addEventListener("change", options);
document.getElementById('clear').addEventListener('click', options);
document.getElementById('eraser').addEventListener('click', options); 
document.getElementById('rgb').addEventListener('click', options);
document.getElementById('sketchBoard').addEventListener('mouseover', changePixel);

function options(event){
    if (event.target.id === 'eraser'){
        //Set up "eraser" by replacing background color to white
        root.style.setProperty('--backgroundColor', `white`);
        option = 0;
    } else if (event.target.id === 'rgb'){
        option = 1;
    } else if (event.target.id === 'colorPicker'){
        //Change css variable to user selected color
        root.style.setProperty('--backgroundColor', event.target.value);
        option = 0;
    } else if (event.target.id === 'clear'){
        //Clear the board by changing each pixel background to white
        let pixs = document.querySelectorAll('.pixel');
        pixs.forEach(pixel => pixel.style.backgroundColor = 'white'); 
    } else if (event.target.id === 'pixelSlider'){
        //Display pixels
        const pixelSize = document.getElementById('pixelSize')
        pixelSize.textContent = `${event.target.value} X ${event.target.value}`;
        //Redraw board based on user input        
        setBoard(event.target.value);
    }
}

function setBoard(pixChoice){
    while(sketchBoard.firstChild){
        sketchBoard.removeChild(sketchBoard.firstChild);
    } //removes grid
    let percent = 100/pixChoice; // used to set up board based on percentage
    root.style.setProperty('--pixelHeight', `${percent}%`);
    root.style.setProperty('--pixelWidth', `${percent}%`);
    drawBoard(pixChoice, pixChoice)
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

function changePixel(event){
    if (option === 1) {
        //Activate random if option equals 1
        let rgb = Math.floor(Math.random()*16777215).toString(16);
        root.style.setProperty('--backgroundColor', `#${rgb}`);
    } 
    //use css variable to replace target background color
    event.target.style.backgroundColor = getComputedStyle(root).getPropertyValue('--backgroundColor');            
}

//Setups default settings on load
window.onload = setBoard(50);