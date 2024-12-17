class Stack{
    constructor(){
       this.q = []
    }

    push(data){
        let size = this.q.length
        this.q.push(data)
        for(let i=0;i<size;i++){
            this.q.push(this.q.shift())
        }
    }

    pop(){
        this.q.shift()
    }

    isEmpty(){
        return this.s1.length==0
    }
}

const stack = new Stack()
stack.push(10)
stack.push(1)
stack.pop()

console.log(stack);
