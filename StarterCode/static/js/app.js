// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData);

var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var searchDate = d3.select("#datetime");
var searchCity = d3.select("#city");
var columns = ["datetime", "city", "country", "shape", "durationMinutes", "comments"]

var addData = (ufoInput) => {
    ufoInput.forEach(sightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(sightings[column]))
    });
} 

addData(tableData);

button.on("click", () => {

    d3.event.preventDefault();

    var searchedDate = searchDate.property("value").trim();

    var filteredInfo = tableData.filter(tableData => tableData.datetime === searchedDate);

    $tbody.html("");

    let response = {
        filteredInfo
    }

    if(response.filteredInfo.length !== 0){
        addData(filteredInfo);
    }

        else {
            $tbody.append("tr").append("td").text("No UFO Sightings On This Date")
        }
    })