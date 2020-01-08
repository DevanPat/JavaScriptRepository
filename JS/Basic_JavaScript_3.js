function my_Third_Function(a, b) {
document.getElementById("Math").innerHTML = a + b;
}

function my_Fourth_Function()   {
    var Subtraction = 6 - 3;
    document.getElementById("Subtraction").innerHTML = "6 - 3 = " + Subtraction;
}

function my_Fifth_Function()    {
    var Multiplication = 10 * 7;
    document.getElementById("Multiplication").innerHTML = "10 * 7 = " + Multiplication;
}

function my_Sixth_Function()    {
    var Division = 15 * 35;
    document.getElementById("Division").innerHTML = "15 * 35 = " + Division;
}

function my_Seventh_Function()  {
    var Calculatedis = (15-10) * 5 / 2 + 9;
    document.getElementById("Calculatedis").innerHTML = "15 minus 10, multiplied by 5, divided in 2, plus 9 equals " + Calculatedis;
}

function modulus_Operator() {
    var Mathed = 20 % 2;
    document.getElementById("Mathed").innerHTML = "When you divide 20 by 2 you have a remainder of: " + Mathed; 
}

function negation_Operator()    {
    var y = 12;
    document.getElementById("Negative").innerHTML = -y;
}

function increment_Operator()   {
var G = 7;
G++;
document.getElementById("Inc").innerHTML = G;
}


function decrement_Operator()   {
var S = 9;
S--;
document.getElementById("Dec").innerHTML = S;
}
