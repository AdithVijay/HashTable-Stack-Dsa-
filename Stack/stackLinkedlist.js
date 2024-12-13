class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null; // Top of the stack
        this.size = 0; // Tracks the size of the stack
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.head; // Point new node to the current head
        this.head = newNode; // Update head to the new node
        this.size++; // Increment size
    }

    pop() {
        if (!this.head) {
            console.log("Stack is empty");
            return null; // Handle empty stack
        }
        const poppedData = this.head.data; // Store the data to return
        this.head = this.head.next; // Move head to the next node
        this.size--; // Decrement size
        return poppedData; // Return the popped data
    }

    print() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr.join(" => ") + " => null");
    }
}
const stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2)
stack.pop()
stack.pop()
stack.pop()
stack.print()