$('input').on("keyup",function () {
  $('#result').val(parseInt($("#amount").val(), 10)*  15);
});

