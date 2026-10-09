// 1. Function Declaration
function add(a, b) {
    return a + b;
}
// 2. Function Expression
const multiply = function(a, b) {
    return a * b;
};
// 3. Arrow Function
const subtract = (a, b) => {
    return a - b;
};
// Display the results
function showFunctions() {
    document.getElementById("output").innerHTML =
        "Addition = " + add(10, 5) + "<br>" +
        "Multiplication = " + multiply(10, 5) + "<br>" +
        "Subtraction = " + subtract(10, 5);
}







