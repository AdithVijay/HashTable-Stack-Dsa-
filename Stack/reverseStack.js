class Stack {
    constructor() {
      this.items = [];
      this.size = 0;
      this.maxsize = 100; // Increase size for large strings
    }
  
    pushTo(data) {
      if (this.size === this.maxsize) {
        console.log("kamman nikk");
        return;
      }
      this.items.push(data);
      this.size++;
    }
  
    Pop() {
      if (this.isempty()) {
        console.log("imm");
        return;
      }
      this.size--;
      return this.items.pop();
    }
  
    isempty() {
      return this.size === 0;
    }
  }
  
  // Function to reverse a string
  function reverseString(inputString) {
    const stack = new Stack();
  
    // Step 1: Push each character onto the stack
    for (let char of inputString) {
      stack.pushTo(char);
    }
  
    // Step 2: Pop each character to reverse the string
    let reversedString = "";
    while (!stack.isempty()) {
      reversedString += stack.Pop();
    }
  
    return reversedString;
  }
  
  // Example Usage
  const input = "asalm is kunda";
  const reversed = reverseString(input);
  console.log("Original String:", input);
  console.log("Reversed String:", reversed);
  