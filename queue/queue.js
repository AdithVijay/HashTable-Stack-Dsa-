class Stack {
    constructor() {
        this.items = []
        this.size = 0
        this.maxsize = 5
    }
    pushTo(data){
        if(this.size==this.maxsize){
            console.log("kamman nikk");
            return
        }
        this.items.push(data)
        this.size++
    }
    Pop(){
        if(this.isempty()){
            console.log("imm");
            return
        }
        this.size--
        return this.items.pop()
    }
    isempty(){
        return this.size == 0
    }
    
}
function reverseString(data) {
    let rever = ""
    const stack = new Stack()
    for(i=0;i<data.length;i++){
        stack.pushTo(data[i])
    }
    while(!stack.isempty()){
        rever += stack.Pop()
    }
    return rever
}

const input = "aslam"
const reverse = reverseString(input)
console.log(reverse);

