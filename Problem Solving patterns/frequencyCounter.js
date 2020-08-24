//Collect a bunch of values and their frequencies and stuff 

const same = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
    } else {
        //shitty solution 
        for (let i = 0; i < arr1.length; i++) {
            let correctIndex = arr2.indexOf(arr[i] ** 2);
            if (correctIndex == -1) {
                return false;
            }
            arr2.splice(correctIndex, 1)
        }
    }
    //This function has a time complexity of N^2
    //[1,2,3]  && [4,9,1]
}

const sameButBetter = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
        //Checking if the lengths have the same value 
    }
    let FC1 = {}
    let FC2 = {}
    for (let val of arr1) {
        FC1[val] = (FC1[val] || 0) + 1;
        //This is the part where we set up the objects 
    }
    for (let val of arr2) {
        FC2[val] = (FC2[val] || 0) + 1
        //This is the part where we set up the objects 
    }

    for (let key in FC1) {
        if (!key in FC2) {
            return false
            //Checks if the key is there in the object or not. if not there then it is immediately a fail
        }
        if (FC2[key ** 2] !== FC2[key]) {
            return false
            //Checks if the value of the squared value in second array is the same as the value of the non squared value in the first array
        }
    }
    return true;
}