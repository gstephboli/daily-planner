$(document).ready(function () {
  console.log("This is loading");
  // DOM var
  var presentDate = $("#currentDay");
  var plannerDiv = $(".container");

  // JS var
  var plannerTable = $("<form></form>");
  var time = [
    "9AM  ",
    "10AM",
    "11AM",
    "12PM",
    "1PM  ",
    "2PM  ",
    "3PM  ",
    "4PM  ",
    "5PM  ",
  ];

  // function defs
  presentDate.text(moment().format("dddd " + "LL"));

  for (var i = 0; i < time.length; i++) {
    var hourRow = $("<row></row>");
    hourRow.addClass("row time-block");
    hourRow.attr("data-time", time[i]);
    hourRow.text(time[i]);
    $(".container").append(hourRow);
  }

  var textDisplay = $("<div></div>");
  textDisplay.addClass("col-sm-10 input-group mb-3");
  $(".row").append(textDisplay);

  var textArea = $("<textarea></textarea>");
  textArea.add("text form-control");
  $(".input-group").append(textArea);

    var saveEl = $("<div></div>");
    saveEl.addClass("col-sm-1 input-group-append");
    $(".row").append(saveEl);

  var saveBtn = $("<button></button>");
  saveBtn.addClass(
    'class="btn btn-outline-secondary saveBtn fas fa-save" type="button-addon2"'
  );
  $(".input-group-append").append(saveBtn);

  //   function calls

  //   event listeners
});
