const repeatString = (str, num) => {
    if (num < 0) {
        return 'ERROR';
    };

    if (num == 0) {
        return '';
    };

    repeatedString = '';

    for (i = 0; i < num; i++) {
        repeatedString += str;
    }

    return repeatedString;
}

console.log(repeatString('hello', 10));
// Do not edit below this line
module.exports = repeatString;
