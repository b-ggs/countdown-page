$(document).ready(function() {
  newCountdown("bohol", "until Bohol!", moment("March 16, 2017"));
  newCountdown("beach", "until beach day!", moment("April 8, 2017"));
})

var $container = $(".container");

function buildTemplate(id, eventName) {
  var $template = $(".template").clone();
  $template.attr("class", id + "-container countdown-container");
  $template.find(".countdown").attr("id", id);
  $template.find(".event").text(eventName);
  $template.hide();
  return $template;
}

function appendTemplate($template) {
  $container.append($template);
}

function buildCountdown(moment, id) {
  countdown(moment.toDate(),
    function(ts) {
      var $countdownContainer = $("." + id + "-container")
      if(!$countdownContainer.is(":visible")) {
        $countdownContainer.show();
      }
      $("#" + id).text(ts.toString());
    }
  );
}

function newCountdown(id, eventName, moment) {
  var $template = buildTemplate(id, eventName);
  buildCountdown(moment, id);
  appendTemplate($template);
}
