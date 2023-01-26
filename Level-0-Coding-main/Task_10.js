function printVowels(string) {
    var str = string;
    var vowels = 'aAeEiIoOuU';
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            console.log(str[i]);
        }
    } 
} printVowels('United StAtes');