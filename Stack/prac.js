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

}

function removemiddle(arr){
    const stack = new Stack()
    for(i=0;i<arr.length;i++){
        stack.push(arr[i])
    }
    let newstack = []       
    let mid = Math.floor( stack.size/2)
        
    for(i=0;i<arr.length;i++){
        let element = stack.pop()
        if(element!=mid){
            newstack.push(element)
        }
    }
    while(newstack.length>0){
        stack.push(newstack.pop())
    }

    stack.print()
}

let arr =[0,1,2,3,4,5]
removemiddle(arr)