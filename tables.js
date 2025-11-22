function generateTable() {
    const number = parseInt(document.getElementById('numberInput').value);
    const tableContainer = document.getElementById('tableContainer');

    if (isNaN(number)) {
        tableContainer.innerHTML = '<p style="color: red;">Please enter a valid number.</p>';
        return;
    }

    let tableHTML = '<table>';
    tableHTML += '<thead><tr><th>Factor</th><th>x</th><th>Number</th><th>=</th><th>Result</th></tr></thead>';
    tableHTML += '<tbody>';

    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        tableHTML += `<tr><td>${number}</td><td>x</td><td>${i}</td><td>=</td><td>${result}</td></tr>`;
    }

    tableHTML += '</tbody></table>';
    tableContainer.innerHTML = tableHTML;
}

// Generate table on page load with default value
document.addEventListener('DOMContentLoaded', generateTable);