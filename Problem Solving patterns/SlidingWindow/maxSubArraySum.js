function maxSubArraySum(array, n) {
    if (array.length < n) return null
    //check if the value of the window is greater than the value of the string 
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += array[i]
        //find initial value of the first n elements
    }

    let currentTotal = total;

    for (let i = num; i < array.length; i++) {
        //loop over the remaining elements 
        //add right most digit subtract left most value
        currentTotal += arr[i] - arr[i - num]
        total = Math.max(currentTotal, total)
        //check if the total has changed or not
    }
    return total

}