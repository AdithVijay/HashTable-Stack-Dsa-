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
        return this.items.pop()
    }

    sizes(){
        return this.items.length
    }
    print(){
        console.log(this.items);
    }
    isEmpty(){
        return this.items.length==0
    }

}

function removemiddle(arr){
    const stack = new Stack()

    for(i=0;i<arr.length;i++){
        stack.push(arr[i])
    }   

    let mid = Math.floor( arr.length/2)
    let stack2 = new Stack()

    for(i=0;i<arr.length;i++){
        if(i!=mid){
            stack2.push(stack.pop())
        }else{
            stack.pop()
        }
    }
    while(!stack2.isEmpty()){
        stack.push(stack2.pop())
    }
        stack.print()
}

let arr =[0,1,3,22,5]
removemiddle(arr)
console.log(arr);

