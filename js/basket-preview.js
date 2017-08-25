$("#basket-preview").hide();

$("#basket-info").mouseenter(function () {
  $("#basket-preview").fadeIn();
});

$("#basket-info").mouseleave(function () {
  $("#basket-preview").fadeOut();
});
