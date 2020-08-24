//We have some sort of structure like an array that we want to loop over and go through
//we keep track of multiple indexes so that we can check values 
//imagine a situation where are putting 

function sumZero(array) {
    //accepts sorted array
    //find first pair where the sum is equal to zero and return the values 
    //return undefined if nothing is coming out 
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right]
        if (sum == 0) {
            return [left, right]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


function sumZeroNaive(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] == 0) {
                return [i, j10]
            }
        }
    }
    return undefined;
}

console.log(sumZero([-2, -1, 0, 1, 2, 9]))