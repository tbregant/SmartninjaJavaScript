var input = document.getElementById("distance");
var selct = document.getElementById("unit");

function setUnits() {
  let units = {
    km: 1.6213,
    mi: 0.6213
  };
}

function convert(distance, unit) {
  var distance = input.value;
  var unit = select.value;
  alert(distance * units[unit]);
}

input.addEventListener("keyup", function(e) {
  convert();
});

selct.addEventListener("change", convert());
