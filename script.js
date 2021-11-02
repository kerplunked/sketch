const sketchGrid = document.querySelector("#grid");
const reset = document.querySelector(".clearbtn");
const div = document.querySelectorAll(".box-cell");

const blackClr = document.querySelector(".blackbtn")
const greyClr = document.querySelector(".greybtn")


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

// create click event on button to start drawing function
// inside click event set new colour var to that colour

blackClr.addEventListener("click", () =>  {
    colourPick = "black";
    draw();
});

greyClr.addEventListener("click", () =>  {
    colourPick = "grey";
    draw();
});

function draw(){
    document.querySelectorAll('.box-cell').forEach(cell => {
    cell.addEventListener('mouseenter', () => {

        if (colourPick === "black") {
  
        cell.style.backgroundColor = "black"
        }
        else if (colourPick === "grey") {

        cell.style.backgroundColor = "grey"
        }
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
 
    reset.addEventListener("click", () => {
        gridSize = Number(window.prompt("Enter new grid size; MAX 100"));
        if (gridSize > 100) {
            gridSize = 100
        }
        sketchGrid.textContent = "";
        makeGrid(gridSize);
        

})
   
}



makeGrid(16);


resetGrid();

