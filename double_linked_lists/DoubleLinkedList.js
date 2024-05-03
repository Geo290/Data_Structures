class Node {
    // Constructor to create a new node
    // next and prev is by default initialized as null
    constructor(data, prev, next) {
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

    print() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result += 'X';
    };

    reversePrint() {
        let current = this.tail;
        let result = '';

        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result += 'X';
    }
};

