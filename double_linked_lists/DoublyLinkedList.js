class Node {
    // Constructor to create a new node
    // next and prev is by default initialized as null
    constructor(data, next, prev) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    };
};

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    /**
     * Inserts a new node at the head of the list.
     * @param {*} data 
     */
    addToHead(data) {
        const newNode = new Node(data, this.head, null);
        
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        };

        this.size++;
    };

    /**
     * Inserts a new node at the tail of the list.
     * @param {*} data 
     */
    addToTail(data) {
        const newNode = new Node(data, null, this.tail);

        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        };

        this.size++;
    };

    /**
     * Inserts a new node at the specified index
     * @param {*} data 
     * @param {Number} index 
     * @returns 
     */
    insertAt(data, index) {
        if(index < 0 || index > this.size) {
            return null;
        };

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next = current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        };
        this.size++;
    }

    /**
     * Prints the list
     * @returns {String}
     */
    print() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result += 'X';
    };

    /**
     * Prints the reversed list
     * @returns {String}
     */
    reversePrint() {
        let current = this.tail;
        let result = '';

        while (current) {
            result += current.data + ' <-> ';
            current = current.prev;
        };

        return result += 'X';
    };

    /**
     * Removes and returns the head of the list
     * @returns Removed value
     */
    removeFromHead() {
        const valueToReturn = this.head.data;

        if (!this.head) {
            return null;
        };

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        };

        this.size--;
        return valueToReturn;
    };

    /**
     * Removes and returns the tail of the list
     * @returns Removed value
     */
    removeFromTail() {
        const valueToReturn = this.tail.data;

        if (!this.tail) {
            return null;
        };

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        };

        this.size--;
        return valueToReturn;
    };

    /**
     * Removes a specific node
     * @param {*} data 
     * @returns Removed value
     */
    remove(data) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === data) {
                if (!previous) {
                    return this.removeFromHead();
                } else if (!current.next) {
                    return this.removeFromTail();
                } else {
                    previous.next = current.next;
                    current.next.prev = previous;
                };

                this.size--;
                return current.data;
            };

            previous = current;
            current = current.next;
        };

        return null;
    }

    /**
     * Returns the size of the list
     * @returns {Number}
     */
    getSize() {
        return this.size;
    }

    /**
     * Checks if thelist is empty
     * @returns {Boolean}
     */
    isEmpty() {
        return this.size === 0;
    }
};

const doublyLinkedList = new DoubleLinkedList();

doublyLinkedList.addToHead(3);
doublyLinkedList.addToHead(4);
doublyLinkedList.addToTail(5);
doublyLinkedList.addToTail(6)

doublyLinkedList.insertAt(4.5, 2);

console.log(doublyLinkedList.getSize());

console.log(doublyLinkedList.isEmpty());

doublyLinkedList.removeFromHead();
doublyLinkedList.removeFromTail();
doublyLinkedList.remove(4.5);

console.log(doublyLinkedList.print());
console.log(doublyLinkedList.reversePrint());