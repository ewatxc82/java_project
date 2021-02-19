// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData);

var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var columns = ["datetime", "city", "country", "shape", "durationMinutes", "comments"]

var addData = (ufoInput) => {
    ufoInput.forEach(sighting => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(sighting[column]))
    });
} 

addData(tableData);

button.on("click", () => {

    d3.event.preventDefault();

    var dateInput2 = dateInput.property("value").trim();

    var dateFilter = tableData.filter(tableData => tableData.datetime === dateInput2);

    $tbody.html("");

    let response = {
        dateFilter
    }
})