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

    unique(){
        let uniqueel = []
        for(let item of this.items ){
            if(!uniqueel.includes(item)){
                uniqueel.push(item)
            }
        }
        console.log(uniqueel);
        
    }
}


    const stack = new Stack()    
    stack.push(10)
    stack.push(1)
    stack.push(1)
    stack.push(2)
    stack.unique()
