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

}

function reverseString(str){
    const stack = new Stack()

    for(let char of str){
        stack.push(char)
    }
    stack.print()

    let largest = 0

    while(!stack.isempty()){
        let element = stack.pop()
        if(element>largest){
            largest = element
        }
    }
    console.log(largest);
    

}

let str = [1,2,3,4,9,5,6,7]

reverseString(str)


