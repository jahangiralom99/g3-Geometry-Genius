
function getValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldSteing = parseFloat(inputField.value);
    return inputFieldSteing;
}

function calculateDataArea(count, name, total,) {
    const prent = document.getElementById("body-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th>${count}</th>
        <th>${name}</th>
        <th>${total}cm<sup>2</sup></th>
        <th><button class="btn btn-sm bg-[#1090D8] lowercase">Convart to m<sup>2</sup></button>
        </th>
    `;
      prent.appendChild(tr)
}