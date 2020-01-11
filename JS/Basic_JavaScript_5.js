document.write(typeof "Apple");

document.write(typeof 7);

function my_Function()  {
    document.getElementById("Nan").innerHTML = 0/0;
}

function my_Function2()  {
    document.getElementById("Purple").innerHTML = isNaN('Purple');
}


function my_Function3()  {
    document.getElementById("Number").innerHTML = isNaN('1404034');
}

document.write(-3E410);

document.write(2E410);

document.write(1 > 2);

console.log(3 + 3);

document.write("9" + 8);

console.log(10 < 3);

document.write(12 == 12);

document.write(30 == 40);

X = 7;
Y = 7;
document.write(X === Y);

A = 20;
B = "90";
document.write(A === B);

N = 30;
M = "30";
document.write(N === M);

P = 11/21/1972;
Q = 11/21/1974;
document.write(P === Q);

document.write(9 > 3 && 10 > 7);

document.write(9 > 25 && 10 > 7);

document.write(12 > 30 || 12 > 7);

document.write(30 > 40 || 50 > 60);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(30 > 10);
}

document.write(Bigger = (10 < 29) ? "Left number is bigger":"Right number is bigger");




