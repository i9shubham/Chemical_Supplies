# Invoice Table with Sorting and Custom Checkbox

## Project Overview

The page has a table that contains a list of chemicals with their details. It also has sort options on each column based on which user can sort the data. The left top toolbar contains the functionality to add the row, move row down, move row up, delete row, refresh the data and save the data.

---

## Design Approach

### 1. **Table Structure**
The table is structured using HTML with a `<thead>` for the column headers and a `<tbody>` that is populated dynamically with JavaScript which is mapped to the JSON data sotred in the array in JavaScript file. The table displays 10 columns including:
- A checkbox for selecting rows.
- Chemical data such as name, vendor, density, and viscosity.
- Other quantifying details such as packaging, unit size, and quantity.

### 2. **Bootstrap Components** 
Utilized Bootstrap classes for creating wrapper container around the table having even space around the table and it will made table centerd to the screen and more responsive to the screen size.
### 3. **Sorting Functionality**
The table includes sorting functionality that allows users to sort data by clicking on the table headers. The sorting is done using a simple JavaScript function `sortTable(columnIndex)` which usually sorts table data ascending and descending.

- **Design Choice**: Sorting is applied only to numeric and text columns such as IDs, Chemical Names, Density, and Viscosity. The sorting direction alternates between ascending and descending each time a column header is clicked.

### 4. **Custom Checkbox Design**
The checkboxes in the first column are custom-designed to have a minimalistic style:
- By default, a grey tick is displayed when unchecked.
- On checking, the tick changes to blue.
- **Design Choice**: The native checkbox element is hidden, and custom CSS is applied using `::before` and `::after` pseudo-elements to render the checkmark. Unicode tick mark symbol is used for check box.

### 5. **Styling and Layout**
The table has a clean and modern look achieved through the following CSS styles:
- **Table Border**: A consistent border is applied across all table cells for a well-defined structure.
- **Density and Viscosity Columns**: These columns are given additional emphasis with a solid border and spacing between cells.

- **Spacing**: 
    - Margin is applied to the cells in the "Density" and "Viscosity" columns to create space around the boxes.
    - The `border-spacing` property is used for the entire table to ensure adequate space between rows and columns.
    
---
