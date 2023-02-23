let tech = ["Java", "Git", "React"];

const halo = () => {
  populateGrid(tech);
  console.log(tech);
};

const add = () => {
  alert("The form was submitted");
};

const remove = () => {
  console.log("remove");
};

const populateGrid = (gridData) => {
  let grid = document.getElementById("gridContainer");
  gridData.forEach((element) => {
    const gridElement = document.createElement("p");
    gridElement.appendChild(document.createTextNode(element));
    grid.appendChild(gridElement);
  });
};
