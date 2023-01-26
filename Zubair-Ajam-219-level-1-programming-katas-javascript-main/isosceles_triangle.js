function isoscelesTriangle(sizeOfTriangle) {
    var numHash = 1;
    for (var i = 1; i <= sizeOfTriangle; i++) {
        for (var j = i; j <= sizeOfTriangle; j++) {
            process.stdout.write(" ");
        }
        if (numHash == 1) {
            process.stdout.write("#"); numHash++;
        }else {
            for (numHash = 1; numHash < i * 2; numHash++) {
                process.stdout.write("#");
            }
        }console.log("");
    }


}isoscelesTriangle(4);