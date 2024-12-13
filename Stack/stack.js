class Stack{
    constructor(){
        this.item =[]
        this.count = 0
    }

    push(data){
        this.item.push(data)
        this.count++
    }
    pop(){
        if(this.isempty()){
            return
        }
        this.item.pop()
        this.count-=1
    }

    size(){
        return this.item.length
    }

    peek(){
        if(this.size){
            console.log("kunjij iri");
            return
        }
        return this.item[this.size()-1]
    }

    isempty(){
        return this.item.length==0 
    }
}
const newStack = new Stack()


newStack.push(2)
newStack.push(2)
newStack.push(1000)
newStack.pop()
newStack.pop()
newStack.pop()
console.log("this is peek",newStack.peek())

console.log(newStack)