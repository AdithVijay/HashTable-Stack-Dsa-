class Queue {
    constructor() {
        this.items=[]
    }

    enqueue(data){
        this.items.push(data)
    }
    dequeuse(){
        this.items.shift()
    }
}

const queue = new Queue()



queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
console.log(queue)