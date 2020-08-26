function power(base, exponent) {
    //return b^e
    //2^3 = 2*2*2
    //2^5 = 2*2*2*2*2
    //2^5 = 2* 2^4
    if (exponent == 1) { return base }
    return base * power(base, exponent - 1)

}

function factorial(nums) {
    // 5! = 5 * 4!
    if (nums == 1) return 1;
    return nums * factorial(nums - 1)
}


function productOfArray(array) {
    let total = 1

    function helper(input) {
        if (input.length == 0) {
            return
        }
        total *= input[0]
        helper(input.slice(1))
    }
    helper(array)
    return total
}


function recursiveRange(num) {
    //accepts a number and adds up all of the numbers from zero to the number passed to the total 
    let total = 0;
    function recursiveHelper(input) {
        if (input == 0) return 0
        total += input
        input--
        recursiveHelper(input)
        //5+4+3+2+1 = 9+6 = 15
    }
    recursiveHelper(num)
    return total
}


function fib(n) {
    //fib sequence 
    //1, 1, 2, 3, 5, 
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}

function reverse(string) {
    return string.split('').reverse().join('')
}

function recursiveStringReverse(string) {
    if (string == "") return ""
    recursiveStringReverse(string.substr(1) + string.charAt(0))
}


console.log(reverse('saima'))

function isPalindrome(string) {
    let reversedString = reverse(string)
    if (reversedString == string) return true
    else return false
}

console.log(isPalindrome('dad'))