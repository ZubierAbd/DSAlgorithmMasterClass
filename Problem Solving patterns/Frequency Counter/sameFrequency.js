const sameFrequency = (n1, n2) => {
    //find out if they have the same frequency of digits 
    let s1 = n1 + ""
    let s2 = n2 + ""
    //Converting to string to make it easier
    if (s1.length != s2.length) {
        return false
        //if lengths dont match then return false 
    }
    let d1 = {}
    let d2 = {}
    for (let digit of s1) {
        d1[digit] = (d1[digit] || 0) + 1
        //get KV digits
    }
    for (let digit of s2) {
        d2[digit] = (d2[digit] || 0) + 1
        //get KV digits
    }

    for (let key in d1) {
        if (!key in d2) {
            return false
            //if not there, then false
        }
        if (d1[key] !== d2[key]) {
            return false
            //if values of keys dont match then false
        }
    }
    return true
}

console.log(sameFrequency(100, 110))