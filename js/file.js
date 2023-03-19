count = 0;
// 1st btn
document
  .getElementById("first-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("triangle-name").innerText;
    const firstTriangle = getValueById("triangle-1st-field");
    const secoundTriangle = getValueById("triangle-2nd-field");
    count += 1;
    const totala = 0.5 * firstTriangle * secoundTriangle;
    calculateDataArea(count, name, totala);
  });
//   2nd btn
document
  .getElementById("secound-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("rectangle-name").innerText;
    const firstfield = getValueById("rectangle-1st-field");
    const secoundField = getValueById("rectangle-2nd-field");
    count += 1;
    const total = firstfield * secoundField;

    calculateDataArea(count, name, total);
  });
//   3rd btn
document
  .getElementById("third-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("parallelogram-name").innerText;
    const firstfield = getValueById("parallelogram-1st-field");
    const secoundField = getValueById("parallelogram-2nd-field");
    count += 1;
    const total = firstfield * secoundField;

    calculateDataArea(count, name, total);
  });
//   4th btn
document
  .getElementById("forth-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("rhombus-name").innerText;
    const firstfield = getValueById("rhombus-1st-field");
    const secoundField = getValueById("rhombus-2nd-field");
    count += 1;
    const total = 0.5 * firstfield * secoundField;

    calculateDataArea(count, name, total);
  });
//   5th btn
document
  .getElementById("fifth-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("pentagon-name").innerText;
    const firstfield = getValueById("pentagon-1st-field");
    const secoundField = getValueById("pentagon-2nd-field");
    count += 1;
    const total = 0.5 * firstfield * secoundField;

    calculateDataArea(count, name, total);
  });
//   6th cart
document
  .getElementById("sixth-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("ellipse-name").innerText;
    const firstfield = getValueById("ellipse-1st-field");
    const secoundField = getValueById("ellipse-2nd-field");
    count += 1;
    const totalPI = 3.1416 * firstfield * secoundField;

    const total = parseFloat(totalPI.toFixed(2));

    calculateDataArea(count, name, total);
  });
