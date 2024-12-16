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
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.join(" => "));
    }
}

function sort(originalStack){
    const auxiliaryStack = new Stack()
    
    while(!originalStack.isEmpty()){
        let temp = originalStack.pop()
        while(!auxiliaryStack.isEmpty() && auxiliaryStack.peek()<temp){
            originalStack.push(auxiliaryStack.pop())
        }
        auxiliaryStack.push(temp)
    }

    while(!auxiliaryStack.isEmpty()){
        originalStack.push(auxiliaryStack.pop())
    }
}

const stack = new Stack()
stack.push("banana")
stack.push("apple")
stack.push("cherry")
stack.push("date")
stack.print()
sort(stack)
stack.print()
