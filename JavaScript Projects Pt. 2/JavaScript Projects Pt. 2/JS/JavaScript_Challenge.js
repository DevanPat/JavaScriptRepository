function validateForm() {
    var x = document.forms["myForm"]["phone number"].value;
    if( x == "")    {
        alert("Name must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm()    {
    document.getElementById("myForm").style.display = "none";
}