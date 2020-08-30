//Stacks are an abstract data structure which abides by a Last In First Out principle 
//The last element added to a stack is the first one removed
//

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.first = null
        this.last = null
        this.size = 0;
    }

    //Implementation of push
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let first = this.first;
            this.first - newNode
            this.first.next = first

        }
        return ++this.size

    }

    //Implementation of pop pseudocode 
    pop() {
        //Pseudocode 
        //If there are no numbers in the stack, return undefined 
        //Otherwise return this.first 

        if (!this.first) return null
        let first = this.first
        if (this.first == this.last) {
            this.last = null;
        }
        this.size--
        this.first = this.first.next;
        return first
    }
}


let stacky = new Stack();
stacky.push(4)
stacky.push(4)
stacky.push(4)

console.log(stacky.push(3))