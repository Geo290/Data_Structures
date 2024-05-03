class Queue {
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    enqueue(data) {
        this.items[this.end] = data;
        this.end++;  
    };

    dequeue() {
        if(this.front === this.end) {
            return null;
        };

        const data = this.items[this.front];

        delete this.items[this.front];
        this.front++;
        return data;
    }

    getSize() {
        return this.end - this.front;
    }

    isEmpty() {
        return this.getSize() === 0 ? true : false;
    }

    peek() {
        if(this.isEmpty() === true) {
            return null;
        }   
        return this.items[this.front];
    }

    print() {
        let result = '';

        if(this.isEmpty() === true) {
            return null;
        }
        for (let i = this.front; i < this.end; i++) {
            result += this.items[i] + " ";
            
        }

        return result;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);


// console.log( queue.dequeue() );
// console.log( queue.dequeue() );
// console.log( queue.dequeue() );  

console.log( queue.getSize() );

console.log( queue.isEmpty() )

console.log( queue.peek() );

console.log( queue.print() );

console.log(queue);