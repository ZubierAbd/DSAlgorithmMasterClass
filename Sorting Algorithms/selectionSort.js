function selectionSort(arr) {

    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]

    }

    /*Selection sort pseudocode 
    1.Store the first element as the minimum 
    2. Compare this item to the next item in the array 
    3. If smaller number is found, then designate that number as the new minimum
    4.If min is not the number you started with, swap the two values */

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }

        if (i != lowest) swap(arr, i, lowest)
    }
    return arr
}

console.log(selectionSort([4, 32, 5, 3, 2, 25, 1]))