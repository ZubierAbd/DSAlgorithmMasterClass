function linearSearch(arr, value) {
    if (arr.length == 0) return -1

    for (let num of arr) {
        if (num == value) return true
    }
    return -1
}

console.log(linearSearch([1, 2, 3, 4, 5], 45))

///Big O of linear search is O(n)