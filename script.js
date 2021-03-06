const sketchGrid = document.querySelector("#grid");
const reset = document.querySelector(".clearbtn");
const div = document.querySelectorAll(".box-cell");

const blackClr = document.querySelector(".blackbtn")
const greyClr = document.querySelector(".greybtn")
const rainbowClr = document.querySelector(".rainbowbtn")
const erase = document.querySelector(".erasebtn")
const gridSq = document.querySelector(".gridbtn")

const slider = document.getElementById("gridSlider");
const output = document.getElementById("gridValue");
output.innerHTML = slider.value;

//loop to create grid

function makeGrid(gridSize) {

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("box-row")

    for (let j = 0; j < gridSize; j++)
    {
        const cell = document.createElement("div");
        cell.classList.add("box-cell");
        row.appendChild(cell);
        cell.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        
    }
    
    sketchGrid.appendChild(row);    
}   
} 

//grid size slider

slider.oninput = function() {

    output.innerHTML = this.value;
        let newGrid = this.value;

        sketchGrid.textContent = "";
        makeGrid(newGrid);
        gridToggle();
        resetGrid();

  }



// create click event on button to start drawing function
// inside click event set new colour var to that colour
gridSq.addEventListener("click", () =>  {
    gridToggle();
});

blackClr.addEventListener("click", () =>  {
    colourPick = "black";
    draw();
});

greyClr.addEventListener("click", () =>  {
    colourPick = "white";
    draw();
});

rainbowClr.addEventListener("click", () =>  {
    colourPick = "rainbow";
    draw();
});
erase.addEventListener("click", () =>  {
    colourPick = "erase";
    draw();
});


//rianbow color gen
function rainbowRBG() {
    rainbowColour='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round  (Math.random()*255)+')';
    return rainbowColour;
}    





function draw(){
    document.querySelectorAll('.box-cell').forEach(cell => {
    cell.addEventListener('mouseenter', () => {

        if (colourPick === "black") {
  
        cell.style.backgroundColor = "black"
        }
        else if (colourPick === "white") {
            let cellBg = window.getComputedStyle(cell).backgroundColor;
            const [r,g,b] = cellBg.slice(4, cellBg.length - 1).split(',');
            rX = (r * 0.9).toFixed(1);
            gX = (g * 0.9).toFixed(1);
            bX = (b * 0.9).toFixed(1);
                greyShade = `rgba(${rX},${gX},${bX},1)`; 
                cell.style.backgroundColor = greyShade;          
        }
        else if (colourPick === "rainbow") {
            cell.style.backgroundColor = rainbowRBG();
        }
        else if (colourPick === "erase") {
            cell.style.backgroundColor = "white";
        }

    });
});
        
   

} 
// gird toggle on and off
//sets border css 
function gridToggle(){
    const check = document.querySelectorAll(".box-cell");

    check.forEach((cell) => {        
        cell.classList.toggle("cellborder")

});
}
    


 

//clear button and restart with grid size selection <100

function resetGrid() {

    
    const check = document.querySelectorAll(".box-cell");

    check.forEach((cell) => {
        reset.addEventListener("click", () => {
            cell.style.backgroundColor = "white";
    });

});
 
 
   
}



makeGrid(16);
gridToggle();

resetGrid();

