const removeFromArray = (arr, num) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            arr.splice(i, 1);
        }
    }

    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
