function getValueById(elementId) {
  const inputField = document.getElementById(elementId);
  const inputFieldSteing = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldSteing;
}

function calculateDataArea(count, name, total) {
  const prent = document.getElementById("body-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <th>${count}.</th>
        <th>${name}</th>
        <th>${total}cm<sup>2</sup></th>
        <th><button class="btn btn-sm bg-[#1090D8] lowercase">Convart to m<sup>2</sup></button>
        </th>
    `;
  prent.appendChild(tr);
}

// rendom color
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}
//   1st

document
  .getElementById("first-cart")
  .addEventListener("mouseover", function () {
    const color = document.getElementById("first-cart");
    color.style.backgroundColor = randomColor();
  });

//   2nd

document
  .getElementById("secound-cart")
  .addEventListener("mouseover", function () {
    const color = document.getElementById("secound-cart");
    color.style.backgroundColor = randomColor();
  });
//   3rd

document
  .getElementById("third-cart")
  .addEventListener("mouseover", function () {
    const color = document.getElementById("third-cart");
    color.style.backgroundColor = randomColor();
  });

//   4th
document
  .getElementById("forth-cart")
  .addEventListener("mouseover", function () {
    const color = document.getElementById("forth-cart");
    color.style.backgroundColor = randomColor();
  });

//   5th

document
  .getElementById("fifth-cart")
  .addEventListener("mouseover", function () {
    const color = document.getElementById("fifth-cart");
    color.style.backgroundColor = randomColor();
  });

//   6th
document
  .getElementById("sixth-cart")
  .addEventListener("mouseover", function () {
    const color = document.getElementById("sixth-cart");
    color.style.backgroundColor = randomColor();
  });
