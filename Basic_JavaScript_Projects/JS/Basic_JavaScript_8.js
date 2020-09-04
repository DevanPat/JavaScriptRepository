function Time_function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18)    {
        Reply = "It is the afternoon.";
}
    else    {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function co_tate()  {
    var sec_1 = "I was"
    var sec_2 = " amazed at how"
    var sec_3 = " fast the cheetah"
    var sec_4 = " captured its prey."
    var sentence = sec_1.concat(sec_2, sec_3, sec_4);
    document.getElementById("Concatenate").innerHTML = sentence;
}

function slice_Method() {
    var Sentence = "Jim made gumbo for 50 people."
    var Section = Sentence.slice(4, 9);
    document.getElementById("Slice").innerHTML = Section;
}

function my_Function()  {
    var text = document.getElementById("toUpper").innerHTML;
    document.getElementById("toUpper").innerHTML = text.toUpperCase();
}

    function two_Function()  {
var str = "Where are my shoelaces? Did the dog chew them up?";
var pos = str.search("shoelaces");
document.getElementById("Frogs").innerHTML = pos;
}

function string_Method()   {
var X =500;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 56789.877066098989321
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}

function to_Fixed() {
    var x= 20.9749
    document.getElementById("toFixed").innerHTML =
    x.toFixed(12) + "<br>" +
    x.toFixed(3) + "<br>" +
    x.toFixed(8) + "<br>" +
    x.toFixed(11);
}

function value_Of() {
    var a = 120;
    document.getElementById("valueOf").innerHTML =
    a.valueOf() + "<br>" +
    (120).valueOf() + "<br>" +
    (117 + 3).valueOf();
}

function countdown()    {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if(seconds == -1)   {
            alert("Time's up!");
    }
        }
        tick();
}