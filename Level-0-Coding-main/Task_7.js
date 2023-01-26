function convertToF(celsius) {
    var F = Math.round((celsius * (9/5) + 32));
console.log(F);
}
convertToF(43);//insert celsius in the brackets.

function convertToC(fahrenheit) {
    var C = Math.round((fahrenheit - 32) * 5/9);
    console.log(C);
}
convertToC(97);//insert fahrenheit in the brackets.