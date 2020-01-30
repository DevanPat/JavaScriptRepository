function Call_Loop() {
    var Digit = "";
    var A = 12
    while   (A < 15)    {
        Digit += "<br>" + A;
        A++;
}
document.getElementById("Loop").innerHTML = Digit;
}

function myFunction()   {
    var str = "Greetings from planet Demogorgen!";
    var x = str.length;
    document.getElementById("demo").innerHTML = x;
}

var Instruments = ["Sitar", "Cello", "Saxophone", "Xylophone", "Harp", "Harmonica", "Tuba"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++)    {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function food_taste() {
    var Food_Taste = [];
    Food_Taste[0] = "salty";
    Food_Taste[1] = "spicy";
    Food_Taste[2] = "tangy";
    Food_Taste[3] = "sour";
    document.getElementById("Food").innerHTML = "This food is " +
    Food_Taste[3] + ".";
}

function constant_function()    {
    const Coffee_Beans = {type:"ground", name:"kona", color:"brown"};
    Coffee_Beans.color = "black";
    Coffee_Beans.taste = "toasty";
    Coffee_Beans.type = "whole-bean";
    Coffee_Beans.smell = "chocolatey";
    document.getElementById("Constant").innerHTML = "The taste of the " + Coffee_Beans.type + " " +
        Coffee_Beans.name + " coffee was " + Coffee_Beans.taste + " and it smelled " + Coffee_Beans.smell + ".";
}

var M = 100;
document.write(M);
{
    let M = 120;
    document.write("<br>" + M)
}
document.write("<br>" + M);

var a = my_Function(900, 3);
function my_Function(x, y)  {
    return x * y;
}
document.getElementById("Return").innerHTML = a;


let dog =  {
    breed: "Mastiff.",
    age: " 2 year old ",
    haircolor: "Black-haired ",
    weight: "150 lbs ",
    description : function() {
        return "This dog is a" + this.age + this.weight + this.haircolor + this.breed;
    }
};
document.getElementById("Dog").innerHTML = dog.description();

var type = "";
var a;
for (a = 0; a < 10; a++) {
    if (a === 5)    { break; }
    text += "The number is " + a + "<br>";
}
document.getElementById("break").innerHTML = text;

var text= "";
var a;
for (a = 0; a < 10; a++) {
    if (a === 5) { continue; }
    text += "The number is " + a + "<br>"
}
document.getElementById("continue").innerHTML = text;



