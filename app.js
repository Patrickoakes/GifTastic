var topics = ["Godfather", "Last Tango In Paris", "Its A Wonderful Life", "Taxi Driver", "Belle Du Jour", "Thin Blue Line", "Salesmen", "Bad Lieutenant"]

renderButtons();

function renderButtons() {
    $("#food-input").val("");
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.attr("class", "buttonDetail btn btn-light");
        newButton.text(topics[i]);
        $("#buttons").append(newButton);
    };
}
