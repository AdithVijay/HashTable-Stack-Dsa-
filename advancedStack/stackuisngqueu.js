class StackUsingQueue{
    constructor(){
        this.q = []
        this.size = 0
    }

    push(data){
        this.q.push(data)
        let size = this.q.length
        for(let i=0;i<size;i++){
            this.q.push(this.q.shift())
        }
    }


}
const stack = new StackUsingQueue()
stack.push(10)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)