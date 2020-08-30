/**Split up a larger subarray into smaller and smaller arrays
 *An array of 1 or 2 elements is always sorted
 * [5,3,6,2,1,25,6,4]
 * => [5,3,4,2] + [1,25,6,4]
 * => [5,3] [4,2] [1,25] [6,4]
 * [5] [3] [4] [2]
 * [3,5]  [4,2]
 */

function merge(arr1, arr2) {
    //takes two sorted arrays as input
    let newArr = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            newArr.push(arr1[i])
            i++;
        } else {
            newArr.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }
    return newArr
}



/*
*
*Break up the array into halves until you have arrays that are empty or have one element 
Once you have the smaller sorted arrays, merge them back until you go back to the full length of the array 
Once merged, return the merged and sorted array
*
*/

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left, right)
}




console.log(merge([1, 3], [2, 6]))

console.log(mergeSort([5, 2, 3, 1, 6, 7, 8, 53, 32, 1]))
