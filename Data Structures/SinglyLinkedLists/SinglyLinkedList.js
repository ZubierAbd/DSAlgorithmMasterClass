class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//A singly Linked List is comprised of nodes. Linked lists have a head, tail and a length property. Think of a chain where you have to go from one point to another
//Unlike other data structures you have to go from one point to another, there is no index when it comes to LinkedLists. You have to 
//Go through the whole data structure if you are trying to find something
//Linked lists have nodes and nodes have a value and a pointer, pointing to the next node in the chain 
//Very easy to insert and modify things in a LinkedList 

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0;
    }

    //Implementation of push method 
    push(val) {
        /**
         * Pseudocode 
         * 1.Accept a value 
         * 2.Create a new node using value
         * 3.if there is no head, set the head and tail to be newly created node 
         * 4.Otherwise set the next property on the tail to be the new node 
         * 5. Increment the length by 1
         */

        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++
        }
        //Returns the whole list using this
        return this
    }


    //Implementation of traversal method 
    traverse() {
        let current = this.head;

        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

    //Implementation of pop method 
    pop() {
        //Removing a node from the end of the list
        //Pseudocode 
        //If nothing in list, return undefined
        //loop through the list until you hit the tail 
        //set the next property of the second to last node to be null 
        //decrement the length of the list by 1
        //return the last node 
        if (!this.head) {
            return undefined
        }

        let current = this.head
        let newTail = current;
        while (current.next) {
            newTail = current
            current = current.next;
            //At the end of this list, newTail will be the second last value and current will be the last value
        }
        newTail.next = null;
        this.length--
        this.tail = newTail;
        /**This is to ensure that when there is one item left in the array, set them to be null for head and tail */
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    //Implementation of shift method 
    // if length 0 return undefined, 
    //store the value of current head and newhead in variables 
    //set this.head to be newHead and return old head.
    //if length is 0 after decrementing, set head and tail to be null 
    shift() {
        //Removing a new node from the beginning of the list 
        let newHead
        let current

        if (!this.head) return undefined
        newHead = this.head.next
        current = this.head

        this.head = newHead;
        this.length--
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    //Implementation of unshift operator 
    unshift(val) {
        //Unshift is the operation of adding an element at the beginning of the LinkedList 
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
        } else {
            let currentHead = this.head;
            newNode.next = currentHead
            this.head = newNode
            this.length++
        }
        return this;


    }

    //Implementation of get operator()
    get(n) {
        //Traverses the list n times and returns nth number
        //similar to running a for loop 
        if (n >= this.length || n < 0) return undefined
        let i = 0;
        let currentPosition = this.head;
        let value;
        while (i <= n) {
            currentPosition = currentPosition.next
            i++

        }
        return currentPosition
    }


    //Implementation of set operator 
    set(n, val) {
        //Takes the index of a certain node and changes the value of that node 
        let foundNode = this.get(n)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        else {
            return false
        }
    }


    //Implementation of insert operator 
    insert(n, val) {
        /**
         * Pseudocode 
         * if index is same as length use push 
         * if index is zero use unshift 
         * otherwise use get to find n-1 node 
         */
        let newNode = new Node(val)
        if (n > this.length || n < 0) return false
        if (n == this.length) {
            this.push(val)
            return true
        } else if (n == 0) {
            this.unshift(val)
            return true
        }
        let prev = this.get(n)
        let after = prev.next
        newNode.next = after
        prev.next = newNode
        this.length++
        return true
    }

    remove(n) {
        //Remove the data from a specific node 
        if (n < 0 || n > this.length) {
            return false
        }

        if (n == 0) {
            return this.shift()
        }

        if (n == this.length - 1) {
            return this.pop();
        }

        let prevNode = this.get(n - 1)
        let removedNode = this.get(n)
        if (removedNode.next) {
            prevNode.next = removedNode.next
        } else {
            prevNode.next = null;
        }
        this.length--
        return removedNode
    }


    /**Implementation of reveral of linkedList */
    reverse() {
        //Reverse a linkedList in place
        //Pseudocode
        //Swap head and tail
        //create a variable called next 
        //create called pervious and node 
        let prev, next, currentNode
    }

    print() {
        let arr = []
        let current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

}

let listy = new SinglyLinkedList();
listy.push("4")
listy.push("6")
listy.push("64")
listy.push("55")
listy.print();