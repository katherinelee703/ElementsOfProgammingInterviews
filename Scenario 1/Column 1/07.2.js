/*

EPI 7.2 - REVERSE A SINGLE SUBLIST OF A SLL

Write a program that takes a singly linked list L and two integers s and f as args, and reverses the order of the nodes from the sth node to the fth node, inclusive. The numbering beings with head as 1. Do not allocate additional nodes.

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let sll = new Node(11);
sll.next = new Node(3);
sll.next.next = new Node(5);
sll.next.next.next = new Node(7);
sll.next.next.next.next = new Node(2);
console.log('before: ', sll); // { 11 -> 3 -> 5 -> 7 -> 2 }

function reverseSublist(head, start, finish) {
  if (start < 1) return null;
  if (!head || start == finish) return head;
  let dummyHead = new Node('dummy');
  dummyHead.next = head;

  let holder = dummyHead; // original list head;
  let goForward = 1;

  while (goForward < start) {
    holder = holder.next;
    goForward++;
  }

  let mover = holder.next;

  for (let i = 0; i < finish - start; i++) {
    // break here in case someone input a finish that was past end of list
    // this version will make everything from start until actual end will be reversed
    if (!mover.next) break;
    let goToFront = mover.next;
    mover.next = goToFront.next;
    goToFront.next = holder.next;
    holder.next = goToFront;
  }

  return dummyHead.next;
}

console.log('after: ', reverseSublist(sll, 1, 3)); // { 5 -> 3 -> 11 -> 7 -> 2 }
// console.log("after: ", reverseSublist(sll, 1, 8)); // { 2 -> 7 -> 5 -> 3 -> 11 } would reverse everything in list
