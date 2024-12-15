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
    isempty(){
        return this.size==0
    }

    sizes(){
        return this.items.length
    }
    unique(){
        let arr =[]
        for(let char of this.items){
            if(!arr.includes(char)){
                arr.push(char)
            }
        }
        return arr
    }

}

function reverseString(str){
    const stack = new Stack()

    for(let char of str){
        stack.push(char)
    }

    console.log(stack.unique());

    
            
}

let str = [1,2,3,4,4,4]

reverseString(str)


