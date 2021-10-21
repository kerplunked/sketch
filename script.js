const sketchGrid = document.querySelector("#grid");






//loop append 16 times then go to a new line and 16 again until 16 lines

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.height = "32px";
    div.style.width = "32px";
    div.style.border = "1px solid #000000";
    div.classList.add("box")
    sketchGrid.append(div);
    
}

const draw = document.querySelector(".box");

draw.addEventListener("mouseover", () => {
    draw.style.backgroundColor = "black";

});



