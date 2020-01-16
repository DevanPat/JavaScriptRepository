function my_Function() {
    var Car = {
        Make: "Toyota",
        Model: "Camry",
        Year: 2020,
        Color: "Black",
        Condition: "New",
        Color: "Yellow"
    }
document.getElementById("Dictionary").innerHTML = Car.Color;
}

function my_Function2() {
    var Car = {
        Make: "Toyota",
        Model: "Camry",
        Year: 2020,
        Color: "Black",
        Condition: "New",
        Color: "Yellow"
    }
    delete Car.Year;
document.getElementById("Dictionary2").innerHTML = Car.Year;
}



