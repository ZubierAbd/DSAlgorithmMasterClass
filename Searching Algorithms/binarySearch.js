///Binary Search is faster than linear search. It works only on sorted arrays. We check and divide by 2.
//We split it in the middle and then check if it might be in the left or right sides


function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1
    let middle = Math.floor(start + end) / 2

    while (array[middle] != value && start < end) {
        if (value < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor(start + end) / 2

    }
    if (array[middle] == value) return middle
    return -1
}

console.log(binarySearch([1, 4, 7, 8, 9, 10, 21], 27))

//S =1  M = 8 E =21
//now checks if value is less than 8 and sets 
// middle to 3
//n

//The complexity of this is O log 