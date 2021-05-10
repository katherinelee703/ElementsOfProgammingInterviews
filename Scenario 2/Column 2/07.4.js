/*

EPI 7.4 - TEST FOR OVERLAPPING LISTS - LISTS ARE CYCLE FREE

  example:
  l1 =   |1| -> |2| -> |3| \
                            \
  l2 =                 |7| -> |4| -> |5|

  l1 length is 5
  l2 length is 3

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

let l1 = new SLLNode(1);
l1.next = new SLLNode(2);
l1.next.next = new SLLNode(3);
l1.next.next.next = new SLLNode(4);
l1.next.next.next.next = new SLLNode(5);

let l2 = new SLLNode(7);
l2.next = l1.next.next.next;

let l3 = new SLLNode(8);
l3.next = new SLLNode(9);

console.log(l1);
console.log(l2);

function findOverlappingAcyclic2Lists(l1, l2) {
  // error handling
  if (!l1 || !l2) return null;
  // determine longer vs shorter
  let l1len = getLength(l1);
  let l2len = getLength(l2);
  let diff = Math.abs(l1len - l2len);

  let longer, shorter;
  if (l1len > l2len) {
    longer = l1;
    shorter = l2;
  } else {
    longer = l2;
    shorter = l1;
  }
  // advance the longer one ahead if needed
  while (diff > 0) {
    longer = longer.next;
    diff--;
  }
  // advance both together until joiner is found or 2 sep lists end
  while (longer && shorter) {
    if (longer === shorter) return longer.val; // or return true;
    longer = longer.next;
    shorter = shorter.next;
  }
  return false;
}

function getLength(list) {
  let len = 1;
  while (list.next) {
    list = list.next;
    len++;
  }
  return len;
}

console.log(findOverlappingAcyclic2Lists(l1, l2)); // true, node.val of 4
console.log(findOverlappingAcyclic2Lists(l1, l3)); // false
console.log(findOverlappingAcyclic2Lists(l2, null)); // null
