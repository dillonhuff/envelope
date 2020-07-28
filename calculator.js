$('input').on("keyup",function () {
  $('#result').val(parseInt($("#amount").val(), 10)*  15);
  $("#menu").append('<li><a href="#">' + $("#amount").val() + '</a></li>');
});



