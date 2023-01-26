function isThisThree(x,y) {
    var sum = x + y;
    var n = Array.from(String(sum), Number);
    if (n.includes(3) && (x || y == 3)){
        return true;
    }else {
        return false;
    } 
}
console.log(isThisThree(30,3));