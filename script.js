$(document).ready(function () {

// DOM variables from HTML
  var presentDate = $("#currentDay");
  var plannerDiv = $(".container");
// Array of time to display on the scheduler
// and use for time reference
  var time = [
    { timeString: "9AM", timeNumber: 9 },
    { timeString: "10AM", timeNumber: 10 },
    { timeString: "11AM", timeNumber: 11 },
    { timeString: "12PM", timeNumber: 12 },
    { timeString: "1PM", timeNumber: 13 },
    { timeString: "2PM", timeNumber: 14 },
    { timeString: "3PM", timeNumber: 15 },
    { timeString: "4PM", timeNumber: 16 },
    { timeString: "5PM", timeNumber: 17 },
  ];
// Setting the current day of the week and date in the header
  presentDate.text(moment().format("dddd " + "MMMM Do"));
// For loop that has my dynamically created row with 
// 3 columns. Including a time, text area and save button for text area.
  for (var i = 0; i < time.length; i++) {
    var hourRow = $("<div>");
    hourRow.attr("class", "row");
    $(".container").append(hourRow);

    var timeSlot = $("<div>");
    timeSlot.attr("class", "hour col-sm-1 ");
    $(hourRow).append(timeSlot);

    var timeDisplay = $("<span>");
    timeDisplay.attr("data-time", time[i].timeNumber);
    timeDisplay.text(time[i].timeString);
    $(timeSlot).append(timeDisplay);

    var textDisplay = $("<textarea>");
    textDisplay.attr("class", "description col-sm-10");
    textDisplay.attr("id", "text" + time[i].timeNumber);
    textDisplay.val(localStorage.getItem("text" + time[i].timeNumber));
    $(hourRow).append(textDisplay);

    var btnDiv = $("<div>");
    btnDiv.attr("class", "saveBtn col-sm-1 fas fa-save time-block");
    btnDiv.attr("id", "save" + time[i].timeNumber);
    $(hourRow).append(btnDiv);

// if/else statement so the css allows the user to know where in the time of day they are in
// time is set in military time
    var currentHour = parseInt(moment().format("H"));
    if (currentHour > parseInt(time[i].timeNumber)) {
      textDisplay.addClass("past");
    } else if (currentHour < parseInt(time[i].timeNumber)) {
      textDisplay.addClass("future");
    } else {
      textDisplay.addClass("present");
    }
  }
// Event listener for save button that will keep information in local storage
  $(".saveBtn").on("click", function (event) {
    var ret = event.target.id.replace("save", "text");
    var task = $("#"+ret).val();
    localStorage.setItem(ret , task);
  });
});
