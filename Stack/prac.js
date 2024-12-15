class Stack {
    constructor(size = 10) {
        this.items = []
        this.size = 0
    }

    push(data){
        this.items.push(data)
        this.size++
    }
    print(){
        console.log(this.items)
    }
    pop(){
        this.size--
        return this.items.pop()
    }

    
    sizes(){
        return this.items.length
    }

}


