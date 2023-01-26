function commonCharacters(string1, string2) {
    var a = string1.toLowerCase();
    var b = string2.toLowerCase();
    var result = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (b.indexOf(a[i]) !== -1 && result.indexOf(a[i]) === -1) {
                result.push(a[i]);
            }
        }
    }
       return result;
}console.log(commonCharacters("applemn", "Guantanamo"));