class Stack{
    constructor(){
        this.q =[]
    }

    push(data){
        this.q.push(data)
        for(let i=0;i<this.q.length;i++){
            this.q.push(this.q.shift())
        }
    }
    Pop(){
        this.q.pop()
    }

    size(){
        
    }

    peek(){

    }

    isempty(){

    }
}
const newStack = new Stack()


newStack.push(2)
newStack.push(1)
newStack.push(3)
newStack.Pop()
console.log("this is peek",newStack.peek())
console.log(newStack)