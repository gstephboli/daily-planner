$(document).ready(function () {
  console.log("This is loading");
  //   console.log(window);
  //   console.log(moment());

  var presentDate = $("#currentDay");
  var plannerDiv = $(".container");

//   var storedText = JSON.parse(localStorage.getItem("userInput"));

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
    // hourRow.attr("data-time", time[i]);
    // hourRow.text(JSON.stringify(time[i]));
    $(".container").append(hourRow);

    var timeSlot = $("<div>");
    timeSlot.attr("class", "hour col-sm-1 ");
    $(hourRow).append(timeSlot);

    var timeDisplay = $("<span>");
    timeDisplay.attr("data-time", time[i]);
    timeDisplay.text(time.timeString);
    $(timeSlot).append(timeDisplay);
  }

  var textDisplay = $("<textarea>");
  textDisplay.attr("class", "description col-sm-10 ");
  $(".row").append(textDisplay);

  //   var textArea = $("<textarea>");
  //   textArea.add("text form-control");
  //   $(".input-group").append(textArea);

  //   var saveEl = $("<div></div>");
  //   saveEl.addClass("col-sm-1 input-group-append");
  //   $(".row").append(saveEl);

  var saveBtn = $("<button>");
  saveBtn.attr("class", "saveBtn col-sm-1 fas fa-save");
  $(".row").append(saveBtn);

  var currentHour = parseInt(time.timeNumber);
  if (currentHour === parseInt(presentDate)) {
    textDisplay.addClass("present");
  } else if (currentHour <= parseInt(presentDate)) {
    textDisplay.addClass("past");
  } else {
    textDisplay.addClass("future");
  }

  $(".saveBtn").on("click", function () {
    console.log("info saved!");
    var value = $(this).siblings(".description").val();
    // var time = $(this).parent().attr("id");
    localStorage.setItem("userInput", value);
    // localStorage.setItem("userInput", time);
    // localStorage.setItem("userInput", JSON.stringify($("textarea")));
    // localStorage.getItem("textarea");
    //    localStorage.plannerDiv = JSON.stringify(textDisplay);
  });

//   $("#9 .description").val(localStorage.getItem("9"));
});
