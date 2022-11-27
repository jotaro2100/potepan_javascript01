"use strict";

$(document).ready(function () {

  $("#stop, #reset").prop("disabled", true);
  $("#time").text("00:00:000");

  let timer;
  let startTime;
  let countedTime = 0;
  
  $("#start").click(function () {
    startTime = Date.now();
    timer = setInterval(function () {
      const count = new Date(Date.now() - startTime + countedTime);
      const m = String(count.getMinutes()).padStart(2, "0");
      const s = String(count.getSeconds()).padStart(2, "0");
      const ms = String(count.getMilliseconds()).padStart(3, "0");
      $("#time").text(`${m}:${s}:${ms}`);
    }, 10);
    $("#start, #reset").prop("disabled", true);
    $("#stop").prop("disabled", false);
  });
  
  $("#stop").click(function () {
    clearInterval(timer);
    countedTime += Date.now() - startTime;
    $(this).prop("disabled", true);
    $("#start, #reset").prop("disabled", false);
  });
  
  $("#reset").click(function () {
    countedTime = 0;
    $("#time").text("00:00:000");
    $(this).prop("disabled", true);
  });

});

