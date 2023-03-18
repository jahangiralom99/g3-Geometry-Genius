count = 0;
document
  .getElementById("first-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("triangle-name").innerText;
    const firstTriangle = getValueById("triangle-1st-field");
    const secoundTriangle = getValueById("triangle-2nd-field");
    count += 1;
    const totala = 0.5 * firstTriangle * secoundTriangle;
    
    calculateDataArea(count,name, totala, );
  });
document
  .getElementById("secound-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("rectangle-name").innerText;
    const firstfield = getValueById("rectangle-1st-field");
    const secoundField = getValueById("rectangle-2nd-field");
    count += 1;
    const total =firstfield * secoundField;
    
    calculateDataArea(count,name, total, );
    document.getElementById('secound-cart-btn').setAttribute('disabled', true)
  });
document
  .getElementById("secound-cart-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("rectangle-name").innerText;
    const firstfield = getValueById("rectangle-1st-field");
    const secoundField = getValueById("rectangle-2nd-field");
    count += 1;
    const total =firstfield * secoundField;
    
    calculateDataArea(count,name, total, );
    document.getElementById('secound-cart-btn').setAttribute('disabled', true)
  });
