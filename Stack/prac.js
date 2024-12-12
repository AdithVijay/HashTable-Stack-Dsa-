class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
        this.size = 0
    }
    push(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return console.log("kunij irkk");
        }
        this.head = this.head.next
        this.size--
    }

    peek(){
        if(this.head){
            return this.head
        }else{
            return "marri iri myraaa"
        }
    }

    isEmpty(){
        return this.size==0
    }

    print(){
        let current = this.head
        let arr=[]
        while(current){
            arr.push(current.data)
            current = current.next
        }
        console.log(arr.join("=>"),"null")
    }
}
const stack = new Stack()

stack.push(0)
stack.push(1)
stack.push(2)
console.log("dddd",stack.peek())
// stack.pop()
// stack.pop()
console.log(stack)
stack.print()
