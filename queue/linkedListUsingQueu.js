class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Queue{
    constructor(){
        this.head = null
        this.rear = null
        this.size = 0
    }

    enqueue(data) {
        const newNode = new Node(data);
        if(this.head==null){
            this.head =newNode
            this.rear = newNode
            this.size++
            return
        }
        this.rear.next = newNode
        this.rear =newNode
        this.size++
    }

    deque(data){
        if(this.head==null){
            console.log("po");
            return
        }
        const dequedata = this.head.data
        this.head = this.head.next
        if(this.head==null){
            this.rear = null
        }
        this.size--
        return dequedata
    }
    print(){
        let current = this.head
        let arr=[]
        while(current){
            arr.push(current.data)
            current =current.next
        }
        console.log(arr.join("=>"),"null")   
    }
}

const queue = new Queue()

queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.deque()
queue.print()
console.log(queue);
