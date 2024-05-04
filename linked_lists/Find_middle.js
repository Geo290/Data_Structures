// Find middle of the Linked List using Extra Memory (Brute Force):

class Node { // Create our Node class
    constructor (data, next) {
        this.data = data;
        this.next = next;
    };
};

class SimplyLinkedList { // Create our SimplyLinkedList class 
    constructor () { 
        this.head = null; // It'll have a head
        this.length = 0; // and length
    };

    /**
     * Insert a node at the end of the list
     * @param {any} data 
     */
    push (data) {
        const newNode = new Node(data, null); // Create 'newNode', a instance of Node class

        if (!this.head) { // If there is no head in the list then it's empty
            this.head = newNode; // So 'newNode' becomes the head fo the list

        } else { // Otherwise: create 'current' varibale
            let current = this.head; // And store the 'head' of the list

            while (current.next) { // Meanwhile there is a reference to following nodes
                current = current.next; // 'current' stores the next node
            };

            current.next = newNode; // Point the 'current' to 'newNode'           
        };

        this.length++; // increase list length
    };

    /**
     * Return the middle of the list by using brute force. 
     * If the number of elements is even the returns the second middle.
     * Consumes much memory.
     * Check code for details.
     * 
     * @returns Middle of the list
     */
    getMiddleBruteForce () {
        let values = []; // Create an array to store the data of every node 
        let current = this.head; // Srote the head of the list in 'current'
        const index = Math.floor(this.length / 2); // Get the middle index of the array

        while (current) { // Iterate till reach the end of the list
            values.push(current.data); // Push 'current' node data in the array
            current = current.next; // Go to next node
        };

        return values[index]; // return the value in the index stored in 'index'
    };

    /**
     * Return the middle of the list by counting nodes in two steps. 
     * If the number of elements is even the returns the second middle.
     * Check code for details
     * 
     * @returns Middle of the list
     */
    getMiddleCountingNodesTP () {
        let index = Math.floor(this.length / 2); // Get the middle index of the array
        let current = this.head; // Srote the head of the list in 'current'

        while (index > 0) { // Iterate till 'index' reach 0
            current = current.next; // Go to next nod e
            index--; // Decrease index
        };

        return current.data; // Return middle
    };

    /**
     * Return the middle of the list by counting nodes in one step. 
     * If the number of elements is even the returns the second middle.
     * Check code for details
     * 
     * @returns Middle of the list
     */
    getMiddleCountingNodesOP () {
        let head = this.head;
        let middle = this.head;
        let count = 1;

        while (head) {
            if (count % 2 === 0) {
                middle = middle.next;
            };
            head = head.next;
            count++;
        };
        
        return middle.data;
    }
};

const myList = new SimplyLinkedList();

myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.push(6);

console.log(myList.getMiddleBruteForce());
console.log(myList.getMiddleCountingNodesTP());
console.log(myList.getMiddleCountingNodesOP());