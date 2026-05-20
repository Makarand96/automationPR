function getSum() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (Sum, n) { return Sum + n; }, 0);
    // reduce() is a method that loops through an array and reduces it to a single value.
}
function getMul() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var mul = numbers.reduce(function (multiply, n) { return multiply * n; }, 1);
    return mul;
}
var result = getSum(10, 20, 30);
console.log(result);
console.log(getMul(10, 20));
function getMultiply() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (Multiply, n) { return Multiply * n; }, 1);
}
console.log(getMultiply(5, 2, 3, 5, 7));
