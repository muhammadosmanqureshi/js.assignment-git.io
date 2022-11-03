// example
var maths = +prompt("enter maths marks");
var urdu = +prompt("enter urdu marks");
var physics = +prompt("enter physics marks");
var bio = +prompt("enter bio marks");

var totalmarks = 450;
console.log(maths)
console.log(urdu);
console.log(physics);
console.log(bio);

var total = parseFloat(maths) + parseFloat(urdu) + parseFloat(physics) + parseFloat(bio)

console.log(total)

var perc = total / totalmarks * 100;
alert(perc + "%")

if (percentage > 80) {
    console.log("Your Grade is A+1")
} else if (percentage > 70) {
    console.log("Your Grade is A")
}
else if (percentage > 60) {
    console.log("Your Grade is B")
}
else if (percentage > 50) {
    console.log("Your Grade is C")
}
else if (percentage > 40) {
    console.log("Your Grade is D")
}
else if (percentage > 33) {
    console.log("Promotted")
}
else {
    console.log("Fail");
}
// example
if (chor == "yes") {
    console.log("nikal gya pata nhi chla");
} else {

    console.log("yato hoga");
}
// example
var age = prompt("enter your age");
var studentcard = true;


if (age >= 18) {
    console.log("you are allowed")

} else if (studentcard == true) {
    console.log("student allow on student card");
} else {
    console.log("not allow")
}
// example
    var num = prompt("enter number");

if (num != 10) {
    if (num > 5) {
        console.log("Number is grater than 5")
    } else {
        console.log("Number is not equal to 10")
    }
}