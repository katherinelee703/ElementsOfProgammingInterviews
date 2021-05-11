/*

EPI 7.7 - REMOVE KTH TO LAST NODE 

  example:
  l1 =   |a| -> |b| -> |c| -> |d| -> |e| -> |f| -> |g|
  :                            remove e (3rd to last)
  to solve: 
    we should advance the longer list by the diff in length of the 2 lists (if there is a diff in length)
    then we advance both lists one-by-one together:
      - we can go all the way to the end and check if end node is the same (node |5| in the example)
      - OR we can break as soon as the node is proved to be the joiner node (node |4| in the example)

*/
class SLLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let l1 = new SLLNode('a');
l1.next = new SLLNode('b');
l1.next.next = new SLLNode('c');
l1.next.next.next = new SLLNode('d');
l1.next.next.next.next = new SLLNode('e');
l1.next.next.next.next.next = new SLLNode('f');
l1.next.next.next.next.next.next = new SLLNode('g');

function removeKthToLastNode(list, k) {
  let p1 = list;
  k = k + 1;

  while (k > 0) {
    p1 = p1.next;
    k--;
  }

  let p2 = list;

  while (p1) {
    p2 = p2.next;
    p1 = p1.next;
  }

  let removed = p2.next;
  p2.next = p2.next.next;
  removed.next = null; // just for safety so no one can access the rest of list from here if they accidentally got access to this node somewhere else

  return list; // or return removed if you wanted to see which one was removed
}

let res = removeKthToLastNode(l1, 3);
console.log(res); // a, b, c, ...
console.log(res.next.next.next); // d, f, g, null

// O(n) time, O(1) space -- 2 pointers method
