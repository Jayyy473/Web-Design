// 1) Highlight row on hover
document.querySelectorAll("tbody tr").forEach(row => {
  row.addEventListener("mouseenter", () => {
    row.style.backgroundColor = "#ffe066";
  });
  row.addEventListener("mouseleave", () => {
    row.style.backgroundColor = "";
  });
});

// 2) Sort rows by amount
const sortBtn = document.createElement("button");
sortBtn.textContent = "Sort by Amount";
sortBtn.style.margin = "10px 0";
document.body.prepend(sortBtn);

sortBtn.addEventListener("click", () => {
  const tbody = document.querySelector("tbody");
  const rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    const aVal = parseFloat(a.cells[2].textContent.replace(/[^0-9.]/g, ""));
    const bVal = parseFloat(b.cells[2].textContent.replace(/[^0-9.]/g, ""));
    return bVal - aVal; // highest first
  });

  rows.forEach(r => tbody.appendChild(r));
});

// Save the original order of rows
const tbody = document.querySelector("tbody");
const originalRows = Array.from(tbody.rows);

// Create Reset button
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Order";
resetBtn.style.margin = "10px";
document.body.prepend(resetBtn);

// Reset rows to original order
resetBtn.addEventListener("click", () => {
  originalRows.forEach(r => tbody.appendChild(r));
});
