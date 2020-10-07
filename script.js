$(document).ready(function () {
  console.log("This is loading");
  //   console.log(window);
  //   console.log(moment());

  var presentDate = $("#currentDay");
  var plannerDiv = $(".container");

  //   var storedText = JSON.parse(localStorage.getItem("userInput"));
  // var storedSchedule;
  var time = [
    { timeString: "9AM", timeNumber: 9 },
    { timeString: "10AM", timeNumber: 10 },
    { timeString: "11AM", timeNumber: 11 },
    { timeString: "12PM", timeNumber: 12 },
    { timeString: "1PM", timeNumber: 1 },
    { timeString: "2PM", timeNumber: 2 },
    { timeString: "3PM", timeNumber: 3 },
    { timeString: "4PM", timeNumber: 4 },
    { timeString: "5PM", timeNumber: 5 },
  ];

  presentDate.text(moment().format("dddd " + "MMMM Do"));

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
    textDisplay.attr("class", "description col-sm-10 ");
    $(".row").append(textDisplay);

    var saveBtn = $("<button>");
    saveBtn.attr("class", "saveBtn col-sm-1 fas fa-save");
    $(".row").append(saveBtn);

    var currentHour = moment().format("h a");
    console.log(currentHour);
    console.log(time[i].timeNumber);
    if (currentHour === time[i].timeNumber) {
      textDisplay.addClass("present");
    } else if (currentHour <= time[i].timeNumber) {
      textDisplay.addClass("past");
    } else {
      textDisplay.addClass("future");
    }
  }

//   $(".saveBtn").on("click", function (event) {
//     event.preventDefault();
//     console.log("info saved!");
//     var value = $(this).siblings(".description").val();
//     localStorage.setItem("userInput", value);
//     // localStorage.setItem("userInput", JSON.stringify($("textarea")));
//   });

  //   $("#9 .description").val(localStorage.getItem("9"));
});
