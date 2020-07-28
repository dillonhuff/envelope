$('input').on("keypress",function (e) {
  if (e.which == 13) {
    $('#result').val(parseInt($("#amount").val(), 10)*  15);
    $("#menu").append('<li> ' + $("#amount").val() + ' </li>');
  }
});



