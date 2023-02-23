let tech = [];

const add = () => {
  const newTech = document.getElementById("technology").value;

  if (newTech != "" && !isDuplicate(newTech)) {
    tech.push(newTech);
    populateGrid(newTech);
    cleanInputField();
    return false;
  }
  if (newTech == "") {
    alert("Empty input field!");
    return false;
  }
  return false;
};

const isDuplicate = (value) => {
  if (tech.includes(value)) {
    alert("This technology already exists.");
    cleanInputField();
    return true;
  }
  return false;
};

const cleanInputField = () => {
  document.getElementById("technology").value = "";
};

const remove = () => {
  let grid = document.getElementById("gridContainer");
  grid.innerHTML = "";
  tech = [];
};

const populateGrid = (gridData) => {
  let grid = document.getElementById("gridContainer");
  const gridElement = document.createElement("p");
  gridElement.appendChild(document.createTextNode(gridData));
  grid.appendChild(gridElement);
};
