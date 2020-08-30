class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    //Similar to the Stack, it is a data structure, it is first in first out. So the oldest thing will be done first. 
    constructor() {
        this.first = null
        this.last = null
        this.size = 0;
    }

    //It is faster, it is faster to add to end and remove from beginning 

    dequeue() {
        //Pseudocode of dequeue (remove from the begining )
        //if no first return null
        //if first is same as last, then this.last and this.first = null
        //store temp current this.first 

        if (!this.first) return null
        let temp = this.first;
        if (this.first == this.last) {
            this.first = null
            this.last = null
        }
        else {
            this.first = temp.next;

        }
        --this.size
        return temp.value
    }




    enqueue(val) {
        //Pseudocode of enqueue (add from the end )
        //takes a value 
        //creates a new node with that value 
        // if there are no nodes, then this is the first and last 
        //otherwise set the next property of the current last ot be hte new node and increment length by 1 
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode;
        }
        return ++this.size

    }
} 