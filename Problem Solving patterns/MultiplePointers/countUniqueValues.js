const countUniqueValues = array => {
    //Function takes a array of numbers and counts the unique values 
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] != array[j]) {
            i++;
            array[i] = array[j]
        }
    }

}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]))