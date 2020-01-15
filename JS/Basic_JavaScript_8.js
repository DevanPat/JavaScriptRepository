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