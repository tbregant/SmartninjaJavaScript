let countTo = 100;

for (let num = 1; num <= countTo; num++) {
    let prntText = "";

    if (num % 3 == 0) {
        prntText = "Fizz";
    }

    if (num % 5 == 0) {
        prntText += "Buzz";
    }

    let newNode = document.createElement("li");

    if (prntText.length == 0) {
        newNode.innerText = num;
    } else {
        newNode.innerText = prntText;
    }

    document.getElementById("result").appendChild(newNode);

}