$(document).ready(function () {
  console.log("This is loading");
  //   console.log(window);
  //   console.log(moment());

  var presentDate = $("#currentDay");
  var plannerDiv = $(".container");

  // var storedText = JSON.parse(localStorage.getItem("userInput"));
  // var storedSchedule;
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
    textDisplay.attr("id", "text" + time[i].timeNumber);
    console.log("text" + time[i].timeNumber)
    console.log( localStorage.getItem("text" + time[i].timeNumber))
    textDisplay.val(localStorage.getItem("text" + time[i].timeNumber));
    $(hourRow).append(textDisplay);

    var btnDiv = $("<div>");
    btnDiv.attr("class", "saveBtn col-sm-1 fas fa-save");
    btnDiv.attr("id", "save" + time[i].timeNumber);
    $(hourRow).append(btnDiv);

    var currentHour = parseInt(moment().format("H"));
    console.log(currentHour);
    console.log(time[i].timeNumber);
    if (currentHour > parseInt(time[i].timeNumber)) {
      textDisplay.addClass("past");
    } else if (currentHour < parseInt(time[i].timeNumber)) {
      textDisplay.addClass("future");
    } else {
      textDisplay.addClass("present");
    }
  }

  $(".saveBtn").on("click", function (event) {
    console.log("this is working");
    // event.target.id.replace("save");
    var ret = event.target.id.replace("save", "text");
    console.log(ret);
    var task = $("#"+ret).val();
    console.log(task);
    localStorage.setItem(ret , task);
    // localStorage.setItem(ret, task);
  });
});
