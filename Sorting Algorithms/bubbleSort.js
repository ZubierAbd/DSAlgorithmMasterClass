/*
bubble sort is a sorting algorithm where the largest values bubble to the top. The input is an array 
//What we are trying to do is looping over an array and checking if the number after is greater than the number before. 
We run two loops 
*/

function bubbleSort(arr) {

    //PseudoCode 
    //Start with variable i that starts at end and goes to beginning 
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;


}

function bubbleSort2(arr) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    }
    let noswaps;

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noswaps = true;
            }

        }
        if (noswaps) break
    }
    return arr
}



console.log(bubbleSort([4, 2, 5, 1, 2, 2, 4, 5, 42, 22]))

console.log(bubbleSort2([4, 2, 5, 1, 2, 2, 4, 5, 42, 22]))