// MERGE TWO SORTED LISTS

class SLLN {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

let s1 = new SLLN(2);
s1.next = new SLLN(5);
s1.next.next = new SLLN(7);

let s2 = new SLLN(3);
s2.next = new SLLN(4);

console.log(s1);
console.log(s2);

function merge2SortedSLL(l1, l2) {
  let dummy = new SLLN('*');
  let curr = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.data < l2.data) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 ? l1 : l2;

  return dummy.next;
}

console.log('merge 2 sll: ', merge2SortedSLL(s1, s2), '\n=====\n');

//=======================

class DLLN {
  constructor(val, prev) {
    this.data = val;
    this.next = null;
    this.prev = prev || null;
  }
}

let d1 = new DLLN(2);
d1.next = new DLLN(5, d1);
d1.next.next = new DLLN(7, d1.next);

let d2 = new DLLN(3);
d2.next = new DLLN(4, d2);

console.log(d1);
console.log(d2);

function merge2SortedDLL(l1, l2) {
  let dummy = new DLLN('*');
  let curr = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.data < l2.data) {
      curr.next = l1;
      l1.prev = curr;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2.prev = curr;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 ? l1 : l2;

  let returnVal = dummy.next;
  returnVal.prev = null;

  return returnVal;
}

console.log('merge 2 dll: ', merge2SortedDLL(d1, d2));
