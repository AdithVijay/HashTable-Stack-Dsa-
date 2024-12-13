class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(data) {
        this.items.push(data);
        this.count++;
    }

    pop() {
        if (this.isempty()) {
            console.log("Stack is empty!")
            return;
        }
        this.count--;
        return this.items.pop();
    }

    isempty() {
        return this.count === 0;
    }

    smallest() {
        if (this.isempty()) {
            console.log("Stack is empty!");
            return undefined;
        }

        let smallest = this.items[0];
        for (let i = 1; i < this.items.length; i++) {
            if (this.items[i] < smallest) {
                smallest = this.items[i];
            }
        }
        return smallest;
    }
}

// Example Usage
const stack = new Stack();
stack.push(10);
stack.push(1);
stack.push(1);
stack.push(2);

console.log(stack.smallest()); // Output: 1
