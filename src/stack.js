const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    let stack = this.stack;
    stack.push(element);
    return stack;
  }

  pop() {
    let stack = this.stack;
    let remove = stack.pop();
    return remove;
  }

  peek() {
    let stack = this.stack;
    return stack[stack.length - 1];
  }
}

module.exports = {
  Stack,
};
