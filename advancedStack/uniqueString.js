class Stack {
    constructor() {
        this.items = []
    }

    push(data){
        this.items.push(data)
    }
    size(){
        return this.items.length
    }
    pop(){
        if(this.isempty()){
            return
        }
       return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isempty(){
        return this.items.length==0
    }
    print(){
        console.log(this.items.join("=>"))
    }
    unique(){

    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.print()