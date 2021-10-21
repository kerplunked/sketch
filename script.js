const sketchGrid = document.querySelector("#grid");






//loop to create grid,, may needa new better way

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.height = "32px";
    div.style.width = "32px";
    div.classList.add("box")
    div.style.border = "1px solid #000000";
    
    sketchGrid.append(div);
    
}


// draw on one box 
const draw = document.querySelector(".box");

draw.addEventListener("mouseover", () => {
    
    draw.classList.add("box-colour");
    draw.style.backgroundColor = "black";

});



