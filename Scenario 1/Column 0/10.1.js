// EPI 10.1 - Merge Sorted Files - ie Merge K Sorted Lists
// best to use a binary min heap

class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap);
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let item = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (item >= parent) break;
      this.heap[parentIdx] = item;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMin() {
    if (!this.heap.length) return null;
    let newMin = this.heap.pop();
    let oldMin = this.heap[0];
    if (this.heap.length === 0) return newMin;

    this.heap[0] = newMin;
    this.sinkDown();
    return oldMin;
  }
  sinkDown() {
    let idx = 0;
    let length = this.heap.length;
    let item = this.heap[0];
    while (true) {
      let leftC, rightC;
      let leftCIdx = idx * 2 + 1;
      let rightCIdx = idx * 2 + 2;
      let swap = null;
      if (leftCIdx < length) {
        leftC = this.heap[leftCIdx];
        if (leftC < item) {
          swap = leftCIdx;
        }
      }
      if (rightCIdx < length) {
        rightC = this.heap[rightCIdx];
        if (
          (swap === null && rightC < item) ||
          (swap !== null && rightC < leftC)
        ) {
          swap = rightCIdx;
        }
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = item;
      idx = swap;
    }
  }
}

let h = new MinHeap();
h.insert(5);
h.insert(3);
h.insert(7);
console.log(h);

console.log('min: ', h.extractMin());
console.log(h);
console.log('min: ', h.extractMin());
console.log(h);
console.log('min: ', h.extractMin());
console.log(h);
console.log('min: ', h.extractMin());
console.log(h);

console.log('=========');

function mergeKsortedLists(lists) {
  let res = new MinHeap();

  lists.forEach((list) => {
    while (list.length > 0) {
      let item = list.pop();
      res.insert(item);
    }
  });

  return res;
}

let l1 = [5, 2, 7];
let l2 = [3, 4, 9];
let l3 = [1, 8, 6];
let ls = [l1, l2, l3];

console.log('merged: ', mergeKsortedLists(ls));
