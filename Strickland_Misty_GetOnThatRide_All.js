// Stretch Feature 1

// The rider must be greater than 52 inches tall AND at least 11 years old.

var height = 53;
var age = 11;

function rollercoaster(num1,num2){
    if (num1 < height) {
    console.log("Sorry kiddo. Maybe next year");
}

else if (num2 < age) {
    console.log("Sorry kiddo. Maybe next year.");
}

else {
    console.log("Get on that ride, kiddo!");
}
}

rollercoaster(52,11)

console.log("********************************")

// Stretch Feature 2

// The rider must be greater than 52 inches tall OR at least 11 years old.

var height = 53;
var age = 11;

function Rollercoaster(num1,num2){
    if (num1 >= height) {
    console.log("Get on that ride, kiddo!");
}

else if (num2 >= age) {
    console.log("Get on that ride, kiddo!");
}

else {
    console.log("Sorry kiddo. Maybe next year.");
}
}

Rollercoaster(52,11)

console.log("********************************")

// Stretch Feature 1 in a different way

// The rider must be greater than 52 inches tall AND at least 11 years old.

var height = 53;
var age = 11;

function RollerCoaster(num1,num2){
    if (num1 >= height && num2 >= age) {
    console.log("Get on that ride, kiddo!");
}
else {
    console.log("Sorry kiddo. Maybe next year.")
}
}

RollerCoaster(52,11)

console.log("********************************")

// Stretch Feature 2 in a different way

// The rider must be greater than 52 inches tall OR at least 11 years old.

var height = 53;
var age = 11;

function ROLLERCOASTER(num1,num2){
    if (num1 >= height || num2 >= age) {
    console.log("Get on that ride, kiddo!");
}

else {
    console.log("Sorry kiddo. Maybe next year.");
}
}

ROLLERCOASTER(52,11)
