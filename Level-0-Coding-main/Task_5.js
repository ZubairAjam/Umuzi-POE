var triangleArea = function(side1,side2,side3) {
    var sp = 0.5*(side1 + side2 + side3);
    var area = Math.sqrt(sp*(sp-side1)*(sp-side2)*(sp-side3));
    return area;
}
console.log(triangleArea(3,4,5));