let width = 16;
let height = 16;

let canvas = document.querySelector("#canvas");


for(let j=0; j<height; j++) {
  let rowDiv = document.createElement("div");
  rowDiv.style.display = "flex";
  rowDiv.style.flex = `0 0 ${100/height}%`
  for(let i=0; i<width; i++) {
    let cell = document.createElement("p");
    cell.style.flex = `0 0 ${100/width}%`;
    cell.textContent = `${i} ${j}`;
    rowDiv.appendChild(cell); 
  }
  canvas.appendChild(rowDiv);
}