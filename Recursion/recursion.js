//Recursion must have a base case 
//and it has to have another case as well where the recurions calls itself with a different input 
//Simplest recursive function 

function countDown(num) {
    if (num == 0) {
        console.log('All done')
        return;
    }
    console.log('recursion happening')
    num--
    countDown(num)
}

function sumRange(num) {
    if (num == 1) return 1
    return num + sumRange(num - 1);
}

console.log(sumRange(5))


function factorial(num) {
    //base case 
    //3! = 3 * 2!
    // return num*factorial(num-1)
    //different recursive call 
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1)



}

function factorialIterative(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total = total * i
    }
    return total
}


//Commmon Recursion Pitfalls 
//No Base Case - this leads to infinite loops
//not returning anything or returning the wrong thing. Both of the base case and the recursive case must have a return statement 


