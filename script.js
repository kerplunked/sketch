const sketchGrid = document.querySelector("#grid");
const reset = document.querySelector(".clearbtn");

gridSize = 16;





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
    }
    
    sketchGrid.appendChild(row);
}
    
} 


// draw on each box
function drawBlack() {

const draw = document.querySelectorAll(".box-cell");
    
draw.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
    });

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

makeGrid(gridSize);
drawBlack();
resetGrid();


