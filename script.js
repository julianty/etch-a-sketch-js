let width = 16;
let height = 16;


function createSketchpad(width, height) {
  let canvas = document.querySelector("#canvas");
  // Create the cell elements
  for(let j=0; j<height; j++) {
    let rowDiv = document.createElement("div");
    rowDiv.style.display = "flex";
    rowDiv.style.flex = `1 1 ${100/height}%`
    for(let i=0; i<width; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.flex = `1 1 ${100/width}%`;
      // cell.textContent = `${i} ${j}`;
      rowDiv.appendChild(cell); 
    }
    canvas.appendChild(rowDiv);
  }

  // Create the listeners
  let cells = document.querySelectorAll(".cell");
  cells.forEach( (cell) => {
    cell.addEventListener('mouseover', e => FillColor(e));
  });
}


// Function for filling the color
function FillColor(e) {
  // console.log(e.target);
  e.target.style.backgroundColor = 'grey';
}

createSketchpad(width, height);

let newGrid = document.querySelector("#newgrid");
newGrid.addEventListener('click', () => resetSketchpad()); 

function resetSketchpad() {
  let height = prompt("Please enter a new height", 16);
  let width = prompt("Please enter a new width", 16);

  // Remove old canvas
  let body = document.querySelector("body");
  let canvas = document.querySelector("#canvas");
  body.removeChild(canvas);
  // Generate new canvas
  canvas = document.createElement("div");
  canvas.setAttribute("id", "canvas");
  body.appendChild(canvas);

  // Generate new sketchpad
  createSketchpad(width, height);
}