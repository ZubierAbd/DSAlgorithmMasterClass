const averagePair = (arr1, target) => {
    //given a sorted array of integers, is there a pair where the average of the pair is equal to the target 
    //[1,1,2,3,4,5], 4
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg == target) return true
        else if (avg < target) start++
        else end--
    }
    return false

}