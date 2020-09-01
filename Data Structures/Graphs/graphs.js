//Graph terms
//Vertex = node 
//Edge = distance between them essentially 
//A tree is a special type of graph where each node is connected by only one edge

//An undirected graph is one where each edge is a two way graph 
//A directed graph is represented with arrows 

//There is also a weighted and unweighted graph. When there is a value assigned to the edges, it becomes a weighted graph

//We can store it using adjacencry matrix or adjacency list 

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    //Implementation of add vertex 

    addVertex(vertex) {
        //add a key to the adjacency list and its value should be an empty array  
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }

    }

    addEdge(v1, v2) {
        //Takes two vertices as input 
        //The function should find in adjacency list the key of vertex1 and push vertex2 into that array 
        //The function should find the key of v2 adn push v1 into that array 
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].push(v2)
        }
        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2].push(v1)
        }
    }

    removeEdge(v1, v2) {
        //Takes two vertices as input 
        //The function should reassign the key of vertex1 to be everything that was in there except v2
        //Same thing with v1 

        if (this.adjacencyList[v1]) {
            let newArr = this.adjacencyList[v1].filter((e) => e !== v2)
            this.adjacencyList[v1] = newArr
        }
        if (this.adjacencyList[v2]) {
            let newArr = this.adjacencyList[v2].filter((e) => e !== v1)
            this.adjacencyList[v2] = newArr
        }
    }

    removeVertex(v1) {
        //****Implementation of removing vertex */
        //Loop as long as there are any other vertices in the adj list for that vertex
        //call removeEdge function with the vertex we are removing adn any values associated with that in adj list
        //dele the key in adjacency list for that vertex

        while (this.adjacencyList[v1].length) {
            const adjVertex = this.adjacencyList[v1].pop()
            this.removeEdge(adjVertex, v1)
        }
        delete this.adjacencyList[v1]
    }
}


let G = new Graph();

G.addVertex("Tokyo")
G.addVertex("SF")
G.addVertex("Dhaka")
G.addVertex("Mumbai")
G.addEdge("Tokyo", "SF")
G.addEdge("Dhaka", "SF")
G.addEdge("Mumbai", "SF")
G.addEdge("Dhaka", "Mumbai")

console.log(G)
console.log("******************************8")

G.removeEdge("Dhaka", "Mumbai")

console.log(G)

console.log("******************************8")

G.removeVertex("Dhaka")

console.log(G)