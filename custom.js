console.log("Danes je bilo končno sonce!");

let mainTitle = document.getElementById("main-title");

mainTitle.addEventListener('mouseover', function () {
    mainTitle.classList.add("green-text");
});

mainTitle.addEventListener('mouseleave', function () {
    mainTitle.classList.remove("green-text");
});

// dodatni eventi : mouseover, mouseleave