class Quantity {

  constructor(name, magnitude, unit) {
    this.name = name;
    this.magnitude = magnitude;
    this.unit = unit;
  }

}

$('input').on("keypress",function (e) {
  if (e.which == 13) {
    $('#result').val(parseInt($("#amount").val(), 10)*  15);
    $("#Quantities").append('<li> ' + $("#amount").val() + ' </li>');
  }
});



