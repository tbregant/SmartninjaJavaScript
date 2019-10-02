    var input = document.getElementById("distance");
    var select = document.getElementById("unit");

    var units = {
        km: 1.6213,
        mi: 0.6213
    }

    let convert = (distance, unit) => distance * units[unit];

    input.addEventListener("keyup", function (e) {
        var distance = input.value;
        var unit = select.value;
        console.log(
            convert(distance, unit)
        );
    });


    select.addEventListener("change", function (e) {
        var distance = input.value;
        var unit = select.value;
        console.log(
            convert(distance, unit)
        )
    });




    class User{
        constructor(){
            console.log(this)
        }
    }

    console.log(this);
    new User();






// 