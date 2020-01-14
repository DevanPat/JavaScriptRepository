var b = 100;
function Divide_numbers()   {
    document.write(300 / b + "<br>");
}
function Multiply_numbers() {
    var a = 25;
    document.write(a * 11);
}


function Add_numbers() {
    console.log(b + 32);
}

function get_Date() {
    if (new Date().getHours() < 20) {
        document.getElementById("Greet").innerHTML = "How are you?";
    }
}

function bungee_Function()  {
    var Bungee;
    Age = document.getElementById("Age").value
    if  (Age >= 21) {
        Bungee = "You are able to bungee jump!";
    }
    else    {
        Bungee = "You are not old enough to jump!";
    }
    document.getElementById("Jump").innerHTML = Bungee;
}

if (30 > 3) {
    document.write("The left number is bigger then the right number.")
}