class Queue {
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
       return this.items.shift()
    }
    peek(){
        return this.items[0]
    }
    isempty(){
        return this.items.length==0
    }
    print(){
        console.log(this.items.join("=>"))
    }
    unique(){
        let auxstack = []
        for(let item of this.items){
            if(!auxstack.includes(item)){
                auxstack.push(item)
            }
        }
        console.log(auxstack);
    }
}

const stack = new Queue()
stack.push("c")
stack.push("a")
stack.push("b")
stack.push("c")
stack.push("d")
stack.push("c")
stack.print()
stack.unique()