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