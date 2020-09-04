function Ride_Function()    {
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Rider(Age, Height) {
    this.Rider_Age = Age;
    this.Rider_Height = Height;
}

var Moe = new Rider(15, "5-11",);
var Jamie = new Rider(27, "5-5",);
function new_This() {
    document.getElementById("New_and_This").innerHTML =
    "Moe is " + Moe.Rider_Age + " years old and his height is " + Moe.Rider_Height;
}

function nested_Function()  {
    document.getElementById("Nesting").innerHTML = minus_2();
    function minus_2()  {
        var Origin_number = 12;
        var z = Origin_number - 2;
        function minus_2()   {Origin_number + z;}
        minus_2();
        return Origin_number;
    }
}