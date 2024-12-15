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

function reverseString(str){
    const stack = new Stack()

    for(let char of str){
        stack.push(char)
    }
    stack.print()

    let largest = 0

    for(i=0;i<str.length;i++){
        if(stack.items[i]>largest){
            largest = stack.items[i]
        }
    }
    console.log(largest);
    
}

let str = [1,2,3,4,9,5,6,7]

reverseString(str)


