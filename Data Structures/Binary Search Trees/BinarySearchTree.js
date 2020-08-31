class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //Implementation of insert code 
    insert(val) {
        ///Create a new node 
        //check if there is a root, if there is no root then this becomes the root 
        //if there is a root, then check if value of new node is greater or less than 
        //if greater check if there is a node to the right, if there is move to that node and repeat that step. if not insert the node here 
        // if less, check if there is node on left. if tehre is, move to that node and repeat otherwise insert as left property
        //
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let currentPos = this.root;
            while (true) {
                if (val < currentPos.value) {
                    if (currentPos.left == null) {
                        currentPos.left = newNode
                        return this
                    } else {
                        currentPos = currentPos.left
                    }
                } else if (val > currentPos.value) {
                    if (currentPos.right == null) {
                        currentPos.right = newNode
                        return this
                    } else {
                        currentPos = currentPos.right
                    }
                } else {
                    //Case when the value is already there 
                    return this
                }
            }
        }
    }

    //Implementation of find method 

    find(val) {
        if (!this.root) return undefined
        let currentPos = this.root;
        let found = false;
        while (!found && currentPos) {
            if (val < currentPos.value) {
                currentPos = currentPos.left
                found = false;
            } else if (val > currentPos.value) {
                currentPos = currentPos.right
                found = false;
            } else {
                found = true;
            }
        }
        if (!found) return found
        return currentPos; //Returns the node after the end of the thing
    }

    contains(val) {
        //Same method which returns true/false
        if (!this.root) return undefined
        let currentPos = this.root;
        let found = false;
        while (!found && currentPos) {
            if (val < currentPos.value) {
                currentPos = currentPos.left
                found = false;
            } else if (val > currentPos.value) {
                currentPos = currentPos.right
                found = false;
            } else {
                found = true;
            }
        }
        return found

    }

    BFS() {
        //Visit every node once 
        //Visits each node on the same level once 
        //Pseudocode 
        //Create a queue and a variable to store the value of nodes visited 
        //Place root node in the queue 
        //if there is anything in queue 
        //Dequeue a node from the queue and push the value of the node to the returned array 
        //If there is a left property add it to the queue 
        //If there is a right property add it to the queue 
        let data = []
        let Q = []
        let node = this.root
        Q.push(node)

        while (Q.length) {
            node = Q.shift();
            //First in first out 
            data.push(node.value)
            if (node.left) {
                Q.push(node.left)
            }
            if (node.right) {
                Q.push((node.right))
            }
        }
        return data

    }


    DFS() {
        //Visit every node once 
        //Visits each node on the same level once 
        let data = []
        let Q = []
        let node = this.root
        Q.push(node)
    }

}






let tree = new BinarySearchTree()
tree.root = new Node(10);


tree.insert(2)
tree.insert(3)
tree.insert(7)
tree.insert(10)

console.log(tree.BFS())