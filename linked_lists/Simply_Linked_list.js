class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    add(data) {
        const newNode = new Node(data, null);

        if (!this.head) {
            this.head = newNode;

        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            };

            current.next = newNode;
        };

        this.size++;
    };

    insertAt(data,index) {
        const newNode = new Node(data, null);
        let current = this.head;
        let previous;

        if (index < 0 || index > this.size) {
            return null;
        };

        if (index === 0) {
            newNode.next = current;
            this.head = newNode;

        } else {
            for (let i=0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next = current;
            previous.next = newNode;
        };

        this.size++;
    };

    print() {
        let current = this.head;
        let result = '';

        if (!this.size) {
            return null;
        }

        while (current) {
            result += current.data += ' -> ';
            current = current.next;
        };

        result += 'X';
        return result;
    };

    removeData(data) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;

                } else {
                    previous.next = current.next;
                };
            };

            this.size--;
            return current.data;
        };

        return null;
    };

    removeFrom(index) {
        let current = this.head;
        let previous = null;

        if (index < 0 || index > this.size) {
            return null;
        };

        if (index == 0) {
            this.head = current.next;

        } else {
            for (let i=0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            previous.next = current.next;
        };

        this.size--;
        return current.data;
    };

    isEmpty() {
        return this.size === 0;
    };

    getSize() {
        return this.size;
    }
};

const linkedList = new Linkedlist();

linkedList.add(12);
linkedList.add(99);
linkedList.add(1043);
// linkedList.insertAt(10,1);   

// linkedList.removeData(12);

// console.log( linkedList.removeFrom(0) );

// console.log( linkedList.print() );

// console.log( linkedList.getSize() );

// console.log( linkedList.isEmpty() );

console.log(linkedList);
