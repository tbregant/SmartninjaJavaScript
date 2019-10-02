
let button = document.getElementById("generate");

button = button.addEventListener("click", function () {
  // values
  let minNumber = parseInt(document.getElementById("minNumber").value);
  let maxNumber = parseInt(document.getElementById("maxNumber").value);
  let count = parseInt(document.getElementById("count").value);
  let result = document.getElementById("result");

  if (isNaN(minNumber) || isNaN(maxNumber) || isNaN(count)) {
    result.innerHTML = "Plese enter numbers!";
  }
  else if (minNumber > maxNumber || (maxNumber - minNumber + 1) < count || minNumber <= 0 || maxNumber <= 0) {
    result.value = "Values are not correct!";
  } else {
    let i = 0;
    let numbers = [];

    while (numbers.length < count) {
      let randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
      if (numbers.indexOf(randomNumber) == -1) {
        numbers.push(randomNumber);
      }
      i++;
    }
    console.log(numbers);
    result.innerHTML = numbers.sort(numericSort);
  }
});

function numericSort(a, b) {
  return a - b;
}
