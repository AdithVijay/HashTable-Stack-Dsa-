class StackUsingQueue {
    constructor() {
        this.q = []
    }

    push(data){
        let size = this.q.length
        this.q.push(data)
        for(let i=0;i<size;i++){
            this.q.push(this.q.shift())
        }
    }
    pop() {
    if (this.isempty()) {
        console.log("umbikko"); // Queue is empty
        return; // Exit the function
    }
    this.q.shift(); // Remove the front element
}


    isempty(){
        return this.q.length === 0
    }

    peek(){
        if(this.isempty()){
            console.log("kunij iri myra");
            return
        }
       return this.q[0]
    }
    print(){
        console.log(this.q.join("=>"))
    }
}
const stackqueue = new StackUsingQueue()
stackqueue.push(0);
stackqueue.push(1);
stackqueue.push(2)
stackqueue.push(3)

stackqueue.print(); 