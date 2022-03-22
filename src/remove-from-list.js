const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.value == k) {
    // проверка на случай, если начинается с искомого k
    l = l.next;
  }
  let current = l;
  let help = l;
  let prev = null;
  let count = 0;
  while (help.next) {
    help = help.next;
    count++;
  }

  for (let i = 0; i < count; i++) {
    prev = current;
    current = current.next;
    if (current.value == k) {
      prev.next = current.next;
    }
  }

  //   console.log(l);
  //   console.log(current);
  return l;
}

module.exports = {
  removeKFromList,
};

// function removeKFromList(l, k) {
//     let list = new ListNode(l[0]); // у листа появилась голова
//     let current = list;
//     for (let i = 1; i < l.length; i++) {
//       //наполнила лист исключив k
//       if (l[i] != k) {
//         current.next = new ListNode(l[i]);
//         current = current.next;
//       }
//     }
//     if (list.value == k) {
//       list = list.next;
//     }

//     return list;
//   }

//   console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3)); //[1, 2, 4, 5]
