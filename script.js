const sketchGrid = document.querySelector("#grid");
const reset = document.querySelector(".clearbtn");

const blackClr = document.querySelector(".blackbtn").addEventListener("click", drawBlack);
const greyClr = document.querySelector(".greybtn").addEventListener("click", drawGrey);


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

function colourGrey() {

    let opacity = 0.1; 
   
    colour = `rgba(0,0,0,${opacity})`;
    return colour;

 }

function drawGrey() { 

    document.querySelectorAll('.box-cell').forEach(cell => {
        cell.addEventListener('mouseenter', () => {
          cell.style.backgroundColor = colourGrey();
          });
        });
      };

  

    



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
        drawBlack();

})
   
}



makeGrid(16);


resetGrid();

