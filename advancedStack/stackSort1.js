class Stack {
    constructor() {
        this.items = [];
    }

    push(data) {
        this.items.push(data);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.join(" => "));
    }
}

function sortStackWithAuxiliary(originalStack) {
    const auxiliaryStack = new Stack();
    while(!originalStack.isEmpty()){
        let temp = originalStack.pop()
        while(!auxiliaryStack.isEmpty() && auxiliaryStack.peek()>temp){
            originalStack.push(auxiliaryStack.pop())
        }
        auxiliaryStack.push(temp)
    }
    while(!auxiliaryStack.isEmpty()){
        originalStack.push(auxiliaryStack.pop())
    }
}

// Test
const stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(4);
stack.push(2);

console.log("Original Stack:");
stack.print();

sortStackWithAuxiliary(stack);

console.log("Sorted Stack:");
stack.print();