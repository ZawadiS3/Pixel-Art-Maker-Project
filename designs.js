// Select color input
var my_color;
// Select size input
var heightInput = document.getElementById("inputHeight");
var widthInput = document.getElementById("inputWidth");
var selectedColor = document.getElementById("colorPicker");
var tbl = document.getElementById("pixelCanvas");

const formSetSizes = document.getElementById('sizePicker');




// When size is submitted by the user
formSetSizes.addEventListener("submit", function(e) {
    e.preventDefault();
    // call makeGrid()
    makeGrid();
});


function paintElement(i, j) {
    // get the selected color
    my_color = selectedColor.value;
    // set the id to select the td element
    var el_id = "td_" + i + "_" + j;
    // get the td element
    var el = document.getElementById(el_id);
    // set the element's background 
    el.style.backgroundColor = my_color;
}


// reset the grid to a blank state.
function clearElement(grid) {
    grid.innerHTML = "";
}


// This function is called when the form is submitted
function makeGrid() {
    // Select size input
    height = heightInput.value;
    width = widthInput.value;

    // resset the table content
    clearElement(tbl);


    // creates a <table> element and a <tbody> element
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < height; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < width; j++) {
            (function() {
                let my_i = i;
                let my_j = j;
                let element_id = "td_" + my_i + "_" + my_j;
                // Create a <td> element, put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                // Add a click event listener to the created element
                // and call the function to set the background
                cell.addEventListener("click", function() {
                    paintElement(my_i, my_j);
                }, false);
                // Add the cell to the row
                row.appendChild(cell);
                // set the row id attribute
                cell.setAttribute("id", element_id);

            }()); // immediate invocation
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");


}