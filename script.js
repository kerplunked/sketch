const sketchGrid = document.querySelector("#grid");

let gridSize = 16;


//loop to create grid,, may needa new better way

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


makeGrid(16);
drawBlack();


