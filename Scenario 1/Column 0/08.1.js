// IMPLEMENT A STACK THAT TRACKS MAX, IN ADDITION TO HAVING PUSH, POP, AND PEEK

class Stack {
  constructor() {
    this.stack = [];
    this.max = [];
  }
  push(val) {
    this.stack.push(val);
    if (val > this.max[this.max.length - 1] || this.max.length === 0) {
      this.max.push(val);
    }
  }
  pop() {
    let popped = this.stack.pop();
    if (this.max[this.max.length - 1] === popped) {
      this.max.pop();
    }
    return popped;
  }
  getmax() {
    return this.max[this.max.length - 1] || null;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

let s = new Stack();
s.push(3);
s.push(5);
s.push(2);
s.push(7);
console.log(s.pop()); // 7
console.log(s.getmax()); // 5
console.log(s); // Stack { stack: [ 3, 5, 2 ], max: [ 3, 5 ] }
s.peek(); // 2
