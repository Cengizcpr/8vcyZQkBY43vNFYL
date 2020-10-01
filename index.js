$(function () {
  var second = 59;
  var minutes = 59;
  var hour = 9;
  var counterLocationSecond = $("#second");
  var counterLocationMinutes = $("#minutes");
  var counterLocationHour = $("#hour");

  //SecondCounter
  $.counterRunSecond = function () {
    if (second > 1) {
      second--;
      counterLocationSecond.text(second);
    } else {
      $("#second").text("59");
      second = 59;
    }
  };
  //MinutesCounter
  $.counterRunMinute = function () {
    if (minutes > 1) {
      minutes--;
      counterLocationMinutes.text(minutes);
    } else {
      $("#minutes").text("00");
    }
  };
  //HourCounter
  $.counterRunHour = function () {
    if (hour > 1) {
      hour--;
      counterLocationHour.text(hour);
    } else {
      $("#hour").text("00");
    }
  };
  //HourUp
  $("#hourUp").click(function () {
    if (hour < 24) {
      hour++;
      counterLocationHour.text(hour);
    }
  });
  //HourDown
  $("#hourDown").click(function () {
    if (hour >= 1) {
      hour--;
      counterLocationHour.text(hour);
    }
  });
  //MinuteUp
  $("#minuteUp").click(function () {
    if (minutes < 60) {
      minutes++;
      counterLocationMinutes.text(minutes);
    }
  });
  //MinuteDown
  $("#minuteDown").click(function () {
    if (minutes >= 1) {
      minutes--;
      counterLocationMinutes.text(minutes);
    }
  });
  //SecondUp
  $("#secondUp").click(function () {
    if (second < 60) {
      second++;
      counterLocationSecond.text(second);
    }
  });
  //SecondDown
  $("#secondDown").click(function () {
    if (second >= 1) {
      second--;
      counterLocationSecond.text(second);
    }
  });
  //KeyboardHourUpDown
  $(document).on("keydown", function (e) {
    //e.keyCode = 107 (+)
    if (e.keyCode == 107) {
      if (hour < 24) {
        hour++;
        counterLocationHour.text(hour);
      }
    }
    //e.keyCode = 109 (-)
    else if (e.keyCode == 109) {
      if (hour >= 1) {
        hour--;
        counterLocationHour.text(hour);
      }
    }
  });

  function loadlink() {
    $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", function (
      result
    ) {
      $("#moneyTypeUSD").text(result.bpi.USD.code);
      $("#moneyRateUSD").text(result.bpi.USD.rate);
      $("#moneyTypeEURO").text(result.bpi.EUR.code);
      $("#moneyRateEURO").text(result.bpi.EUR.rate);
      $("#moneyTypeGBP").text(result.bpi.GBP.code);
      $("#moneyRateGBP").text(result.bpi.GBP.rate);

      console.log(
        result.bpi.USD.rate + result.bpi.EUR.rate + result.bpi.GBP.rate
      );
      setTimeout(function () {
        refreshDivContent(result);
      }, 5000);
    });
  }
  loadlink(); // This will run on page load
  setInterval(function () {
    loadlink(); // this will run after every 5 seconds
  }, 5000);

  setInterval("$.counterRunSecond()", 1000);
  setInterval("$.counterRunMinute()", 60000);
  setInterval("$.counterRunHour()", 3600000);
});
