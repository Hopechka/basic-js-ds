const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }

      cur.next = new ListNode(value);
    }
  }

  dequeue() {
    let cur = this.head;
    this.head = cur.next;
    return cur.value;
  }
}

//const queue = new Queue();
// console.log(queue.enqueue(5));
// console.log(queue.enqueue(6));
// console.log(queue.enqueue(7));
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue);

module.exports = {
  Queue,
};
