$(function() {
  $(".col-xs-2").click(function() {
    $(this).find(".vocab").toggle();
    $(this).find(".definition").toggle();
  });
});
