/**
 * Quick sort works based on the fact that arrays of 0 or 1 length are always sorted
 * Works by selecting one element called the pivot and finding the index where the pivot would be in the sorted array
 *
 */


/**In order to implemetn quickSort it is helpful to have a function responsible for rearranging elemetns in an array on either side of the pivot
 * Given an array, the helper function should designate an element as a the pivot and move everything smaller to the left
 * At the end, the pivoted element will be in the corrected index
*The order of the elements on the left or the right doesnt matter
*/

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]

}


function pivot(arr, start = 0, end = arr.length - 1) {
    /**Accept three arugments - arr, start and end  */
    let pivot = arr[start]
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)

        }
    }
    swap(arr, start, swapIdx)

    return swapIdx
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)

    }
    return arr;

}


console.log(quickSort([4, 6, 3, 2, 12]))
