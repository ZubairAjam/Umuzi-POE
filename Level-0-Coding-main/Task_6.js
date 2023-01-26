function findMax(num1, num2, num3) {
    var a = num1;
    var b = num2;
    var c = num3;
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else { 
        return c;
    }
}
console.log(findMax(69,420,666));