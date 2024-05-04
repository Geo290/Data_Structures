// FIND AND RETURN THE BIGEST NUMBER IN THE LINKED LIST

class Node { // create our Node class
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    };
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    /**
     * Inserts a new Node at the start of the list.
     * @param {Number} data 
     */
    push (data) {
        const newNode = new Node(data, this.head, null); //create 'newNode', a instance of Node class; it won't have a tail

        if (this.head) { // if there's actually a head, then the list isn't empty
            newNode.next = this.head; // Point 'newNode' to the current head
            this.head.prev = newNode; // 'newNode' becomes the prevois Node of current one
            this.head = newNode; // Now 'newNode' has became  the head of the list

        } else { // otherwise 'newNode' will become the head of the list
            this.head = newNode; // So both head and tail must point to 'newNode'
            this.tail = newNode;
        };

        this.lenght++; // increase the length of the list
    };

    /**
     * Inserts a new Node at the end of the list.
     * @param {Number} data 
     */
    append (data) {

    };

    /**
     * Returns the largest Node; in this case the bigest number
     * @returns {Number} 
     */
    max () {
        let curr = this.head; // Define two variables 'curr' and 'max'
        let max = this.head; // And initialize them with the current Node

        while (curr) { // iterate over the list until there it reaches the last Node
            if (curr.data > max.data) { // if 'curr' value is bigger than 'max' value 
                max = curr; // store 'curr' value in 'max'
            };
            
            curr = curr.next; // now store next node in 'curr'
        };

        return max.data; // return the value
    };
};

const myList = new DoublyLinkedList();

myList.push(1);
myList.push(2);
myList.push(10);
myList.push(0);
myList.push(0.5);
myList.push(3)

console.log( myList.max() )

console.log(myList);