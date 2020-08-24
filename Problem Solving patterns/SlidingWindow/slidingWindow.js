//This pattern involves creating a window and sliding it across the data structure in question 
//

const maxSubArraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    //Calculate the first sum of the first n digits 

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        //How this solution works is that instead of readding everything we move the window by 1 so we subtract the first digit from left side and add first digit of right side to the total 
        //[1,2,3,4,4,6]
        //say sliding window is 2
        //total maxSum = 3 for first 2 things 
        //now we remove 1 from 3 and add 3 to it (arr[0] + array[i])
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
        //Then we do a Maximum check. If the newer value is greater then it is replaced in maxSum
    }
    return maxSum;


}

const maxSubArraySumNaiveSolution = (arr, num) => {
    if (num > arr.length) {
        return null;
        //Checks if the window length is greater than the length of array. If so, it is considered null
    }
    let max = -Infinity;
    //Setting max to -Inf means that we take care of any negative number that might be happening 
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        //Creating temp variable 
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
            //summing up all the values between current value of i and next n digits
        }
        if (temp > max) {
            max = temp
            //setting max as temp if the temporary sum is greater than the max sum
        }
    }
    return max;
}

console.log(maxSubArraySumNaiveSolution([1, 2, 3, 4], 2))