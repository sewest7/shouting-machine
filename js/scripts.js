$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    let yell1Input = $("input#yell1").val();

    $(".yell1").append(yell1Input.toUpperCase());
    $("#shout").show();

  });
});
