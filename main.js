const chemicalsData = [
    {
        id: 1,
        chemicalName: 'Acetone',
        vender: 'Sigma-Aldrich',
        density: '0.791 g/cm³',
        viscosity: '0.32 mPa·s',
        packaging: 'Bottle',
        packSize: '500',
        unit: 'mL',
        quantity: 10,
    },
    {
        id: 2,
        chemicalName: 'Benzene',
        vender: 'Merck',
        density: '0.876 g/cm³',
        viscosity: '0.65 mPa·s',
        packaging: 'Drum',
        packSize: '200',
        unit: 'L',
        quantity: 5,
    },
    {
        id: 3,
        chemicalName: 'Chloroform',
        vender: 'Thermo Fisher',
        density: '1.489 g/cm³',
        viscosity: '0.56 mPa·s',
        packaging: 'Canister',
        packSize: '20',
        unit: 'L',
        quantity: 12,
    },
    {
        id: 4,
        chemicalName: 'Ethanol',
        vender: 'Honeywell',
        density: '0.789 g/cm³',
        viscosity: '1.2 mPa·s',
        packaging: 'Bottle',
        packSize: '1000',
        unit: 'mL',
        quantity: 30,
    },
    {
        id: 5,
        chemicalName: 'Hexane',
        vender: 'Sigma-Aldrich',
        density: '0.655 g/cm³',
        viscosity: '0.31 mPa·s',
        packaging: 'Drum',
        packSize: '250',
        unit: 'L',
        quantity: 7,
    },
    {
        id: 6,
        chemicalName: 'Methanol',
        vender: 'Merck',
        density: '0.792 g/cm³',
        viscosity: '0.59 mPa·s',
        packaging: 'Bottle',
        packSize: '1000',
        unit: 'mL',
        quantity: 15,
    },
    {
        id: 7,
        chemicalName: 'Toluene',
        vender: 'Thermo Fisher',
        density: '0.867 g/cm³',
        viscosity: '0.59 mPa·s',
        packaging: 'Canister',
        packSize: '50',
        unit: 'L',
        quantity: 6,
    },
    {
        id: 8,
        chemicalName: 'Xylene',
        vender: 'Honeywell',
        density: '0.864 g/cm³',
        viscosity: '0.65 mPa·s',
        packaging: 'Drum',
        packSize: '150',
        unit: 'L',
        quantity: 8,
    },
    {
        id: 9,
        chemicalName: 'Acetic Acid',
        vender: 'Sigma-Aldrich',
        density: '1.049 g/cm³',
        viscosity: '1.22 mPa·s',
        packaging: 'Bottle',
        packSize: '500',
        unit: 'mL',
        quantity: 20,
    },
    {
        id: 10,
        chemicalName: 'Sodium Hydroxide',
        vender: 'Merck',
        density: '2.13 g/cm³',
        viscosity: 'Not applicable',
        packaging: 'Bag',
        packSize: '25',
        unit: 'kg',
        quantity: 10,
    },
    {
        id: 11,
        chemicalName: 'Sulfuric Acid',
        vender: 'Thermo Fisher',
        density: '1.84 g/cm³',
        viscosity: '26.7 mPa·s',
        packaging: 'Canister',
        packSize: '50',
        unit: 'L',
        quantity: 5,
    },
    {
        id: 12,
        chemicalName: 'Ammonia',
        vender: 'Honeywell',
        density: '0.73 g/cm³',
        viscosity: '0.26 mPa·s',
        packaging: 'Cylinder',
        packSize: '40',
        unit: 'L',
        quantity: 8,
    },
    {
        id: 13,
        chemicalName: 'Hydrogen Peroxide',
        vender: 'Sigma-Aldrich',
        density: '1.45 g/cm³',
        viscosity: '1.245 mPa·s',
        packaging: 'Bottle',
        packSize: '500',
        unit: 'mL',
        quantity: 18,
    },
    {
        id: 14,
        chemicalName: 'Nitric Acid',
        vender: 'Merck',
        density: '1.51 g/cm³',
        viscosity: '1.34 mPa·s',
        packaging: 'Drum',
        packSize: '200',
        unit: 'L',
        quantity: 4,
    },
    {
        id: 15,
        chemicalName: 'Glycerol',
        vender: 'Thermo Fisher',
        density: '1.26 g/cm³',
        viscosity: '1.5 Pa·s',
        packaging: 'Canister',
        packSize: '20',
        unit: 'L',
        quantity: 10,
    },
];

function populateTable() {
    const tableBody = document.querySelector('#invoiceTable tbody');
    chemicalsData.forEach((item) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><input type="checkbox" name="select" class="checkbox" onclick="selectRow()"></td>
            <td>${item.id}</td>
            <td class="border-right">${item.chemicalName}</td>
            <td>${item.vender}</td>
            <td class="unit-data">${item.density}</td>
            <td class="unit-data">${item.viscosity}</td>
            <td>${item.packaging}</td>
            <td>${item.packSize}</td>
            <td>${item.unit}</td>
            <td class="unit-data">${item.quantity}</td>
        `;

        tableBody.appendChild(row);
    });
}

function sortTable(columnIndex) {
    var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
    table = document.getElementById('invoiceTable');
    switching = true;
    dir = 'asc';

    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('TD')[columnIndex];
            y = rows[i + 1].getElementsByTagName('TD')[columnIndex];

            if (dir === 'asc') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === 'desc') {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }
}

function clickAll() {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach((checkbox) => {
        const row = checkbox.closest('tr');
        if (checkbox.checked) {
            checkbox.checked = false;
            row.classList.remove('selected');
        } else {
            row.classList.add('selected');
            checkbox.checked = true;
        }
    });
}

function reload() {
    location.reload();
}

function deleteRow() {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkbox.parentElement.parentElement.remove();
        }
    });
}

function addRow() {
    const tableBody = document.querySelector('#invoiceTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><input type="checkbox" name="select" class="checkbox"></td>
        <td>${chemicalsData.length + 1}</td>
        <td class="border-right">New Chemical</td>
        <td>New Vender</td>
        <td class="unit-data">0.0 g/cm³</td>
        <td class="unit-data">0.0 mPa·s</td>
        <td>New Packaging</td>
        <td>0</td>
        <td>mL</td>
        <td class="unit-data">0</td>
    `;

    chemicalsData.push({
        id: chemicalsData.length + 1,
        chemicalName: 'New Chemical',
        vender: 'New Vender',
        density: '0.0 g/cm³',
        viscosity: '0.0 mPa·s',
        packaging: 'New Packaging',
        packSize: '0',
        unit: 'mL',
        quantity: 0,
    });

    tableBody.appendChild(row);
}

function scrollToBottom() {
    const tableContainer = document.querySelector('.table-container');
    tableContainer.scrollTop = tableContainer.scrollHeight;
}

function scrollToTop() {
    const tableContainer = document.querySelector('.table-container');
    tableContainer.scrollTop = 0;
}

function selectRow() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const selectAll = document.querySelector('#checkAll');

    let allChecked = true;

    checkboxes.forEach((checkbox) => {
        const row = checkbox.closest('tr');
        if (!checkbox.checked) {
            allChecked = false;
            row.classList.remove('selected');
        } else {
            row.classList.add('selected');
        }
    });

    if (allChecked) {
        selectAll.checked = true;
    } else {
        selectAll.checked = false;
    }
}

window.onload = populateTable;
