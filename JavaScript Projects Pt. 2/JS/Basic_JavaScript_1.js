function Sport_Function()   {
    var Sport_Output;
    var Sports = document.getElementById("Sport_Input").nodeValue;
    var Sport_String = " is fun to watch.";
    switch(Sports)  {
        case "Football":
            Sport_Output = "Football" + Sport_String;
        break;
        case "Basketball":
            Sport_Output = "Basketball" + Sport_String;
        break;
        case "Baseball":
            Sport_Output = "Baseball" + Sport_String;
        break;
        case "Tennis":
            Sport_Output = "Tennis" + Sport_String;
        break;
        case "Soccer":
            Sport_Output = "Soccer" + Sport_String;
        break;
        case "Golf":
            Sport_Output = "Golf" + Sport_String;
        break;
        default:
        Sport_Output = "Enter a sport precisely as shown above";
    }
    document.getElementById("Output").innerHTML = Sport_Output;
}

function Classy_Function () {
    var B = document.getElementsByClassName("Clicked");
    B[1].innerHTML = "I prefer to eat some great food after my tea!";
}

var c = document.getElementById("can_Vas");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(70,55,3,95,62,10);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "green");

ctx.fillStyle = grd;
ctx.fillRect(12,14,130,70);

var b = document.getElementById("can_Vas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(1, 5, 90, 120);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "orange");

ctx.fillStyle = grd;
ctx.fillRect(20, 40, 130, 40);
