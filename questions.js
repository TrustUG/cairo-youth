$(document).ready(function () {
  $(".questions .question-box p").hide();

  $("#question1").click(function () {
    $("#answer1").slideToggle();
    $("#answer2").slideUp();
    $("#answer3").slideUp();
    $("#answer4").slideUp();
    $("#answer5").slideUp();
  });

  $("#question2").click(function () {
    $("#answer2").slideToggle();
    $("#answer1").slideUp();
    $("#answer3").slideUp();
    $("#answer4").slideUp();
    $("#answer5").slideUp();
  });

  $("#question3").click(function () {
    $("#answer3").slideToggle();
    $("#answer1").slideUp();
    $("#answer2").slideUp();
    $("#answer4").slideUp();
    $("#answer5").slideUp();
  });

  $("#question4").click(function () {
    $("#answer4").slideToggle();
    $("#answer1").slideUp();
    $("#answer2").slideUp();
    $("#answer3").slideUp();
    $("#answer5").slideUp();
  });

  $("#question5").click(function () {
    $("#answer5").slideToggle();
    $("#answer1").slideUp();
    $("#answer2").slideUp();
    $("#answer3").slideUp();
    $("#answer4").slideUp();
  });
});
