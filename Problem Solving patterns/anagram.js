const validAnagram = (s1, s2) => {
    //Check if two strings are anagrams of each other
    //Check if they have same number of letters
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    if (s1.length != s2.length) {
        return false;
    }
    let FC1 = {}
    let FC2 = {}
    for (let char of s1) {
        FC1[char] = (FC1[char] || 0) + 1
    }

    for (let char of s2) {
        FC2[char] = (FC2[char] || 0) + 1
    }
    console.log(FC1)
    console.log(FC2)
    for (let key in FC1) {
        if (FC1[key] != FC2[key]) {
            return false
        }
    }
    return true;

}

console.log(validAnagram('zubier', 'reibuz'))