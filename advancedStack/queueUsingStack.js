class QueueUsingStack{
    constructor(){
        this.stack1 =[]
        this.stack2 =[]
    }
    enqueue(data){
        this.stack1.push(data)
    }
    dequeue(){
        if(this.stack2.length==0){
            while(!this.isempty()){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    isempty(){
        return this.stack1.length==0
    }

    print() {
        const combined = [...this.stack2].reverse().concat(this.stack1);
        console.log(combined.join(" -> "))
    }
}

const stack = new QueueUsingStack()
stack.enqueue(10)
stack.dequeue()
console.log(stack);
