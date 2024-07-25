$(document).ready(function () {
  $(".mother").hide();
  $("#mobilemore").hide();
  $("#sun").hide();

  $(".more").click(function () {
    $(".mother").toggle();
  });

  $(".mother").click(function () {
    $(".mother").hide();
  });

  $("#mobile").click(function () {
    $("#mobilemore").slideToggle();
    $("#mobilenave").css("transform", "translateX(0%)");
  });

  $("section").click(function () {
    e.preventDefault();
    $("#mobilenave").css("transform", "translateX(0%)");
  });

  $("#open").click(function () {
    $("#mobilenave").css("transform", "translateX(0%)");
  });

  $("#close").click(function () {
    $("#mobilenave").css("transform", "translateX(-100%)");
  });

  $("a").click(function () {
    $("#mobilenave").css("transform", "translateX(-100%)");
  });

  $("#moon").click(function () {
    $("body").addClass("dark");
    $("#sun").slideToggle();
    $("#moon").slideToggle();
  });

  $("#sun").click(function () {
    $("body").removeClass("dark");
    $("#moon").slideToggle();
    $("#sun").slideToggle();
  });
});
