$('input').on("keyup",function () {
  $('#result').val(parseInt($("#amount").val(), 10)*  15);
  $("#menu").append('<li><a href="#">New list item</a></li>');
});



