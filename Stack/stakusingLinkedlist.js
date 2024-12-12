class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class  Stack{
    constructor() {
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
        this.head = this.head.next
    }
    print(){
        let current = this.head
        let arr = []    
        while(current){ 
            arr.push(current.data)
            current=current.next
        }
        console.log(arr.join("=>"),"null")
    }
}

const stack = new Stack()
stack.push(3)
stack.push(2)
stack.push(1)
stack.push(0)
stack.pop()
stack.print()
console.log(stack);
