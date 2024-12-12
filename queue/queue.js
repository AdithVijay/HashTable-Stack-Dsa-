class Queue{
    constructor(){
        this.items = []
    }
    enque(data){
        this.items.push(data)
    }
    deque(){
        this.items.shift()
    }
    size(){
        return this.items.length
    }
    peek(){
        return this.items[0]
    }
    print(){
        console.log(this.items.join("=>"))
    }
}
const queue = new Queue()
queue.enque(0)
queue.enque(1)
queue.enque(2)
queue.enque(3)
queue.deque()
queue.print
console.log(queue.peek());
console.log(queue.size());

console.log(queue);
