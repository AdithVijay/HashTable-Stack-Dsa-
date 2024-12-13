
class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    push(data){
        this.items.push(data)
        this.count++
    }
    pop(){
        if(this.isempty()){
            console.log("podi punde");
            return
        }
        this.count--
        return this.items.pop()
    }
    isempty(){
       return this.items.length==0
    }

    sort(){
        for(let i=0;i<this.items.length;i++){
            for(let j=i+1;j<this.items.length;j++){
                if(this.items[i]>this.items[j]){
                    let temp = this.items[i]
                    this.items[i] = this.items[j]
                    this.items[j] = temp
                }
            }
        }
        return this.items
        
    }
}


    const stack = new Stack()    
    stack.push(10)
    stack.push(1)
    stack.push(1)
    stack.push(2)

    console.log(stack.sort())
