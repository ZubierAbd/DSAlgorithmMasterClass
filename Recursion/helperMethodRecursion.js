function outer(input) {
    let outerScopedVariable = []

    function helper(helperinput) {
        helper(helperinput--)
    }

    helper(input)

    return outerScopedVariable
}

/*This is the skeleton we are expecting when we are using a helper method for a recursive function

*/

function collectOdds(nums) {
    let result = []

    function helper(helperInput) {
        if (helperInput.length == 0) return

        if (helperInput[0] % 2 != 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1));
    }

    helper(nums)
    return result
}

console.log(collectOdds([1, 2, 3, 4, 5]))
