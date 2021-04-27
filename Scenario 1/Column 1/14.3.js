/*

14.3 FIND THE K LARGEST ELEMEMTS IN A BST

given a bst and a # k, return an array of the k largest elements in the bst, in decreasing order.

brute force is do in-order traversal, and reverse the last k elements of it

the better way is to start from desired node, and do a reverse in-order, and stop/return once we get k items into final array

        19
      /    \
    7       43
          /    \
         23     47
            \     \
            37     53
           /  \
         29   41
          \ 
           31

*/
class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
let bst = new BSTNode(19);
bst.right = new BSTNode(43);
bst.right.right = new BSTNode(47);
bst.right.right.right = new BSTNode(53);
bst.left = new BSTNode(7);
bst.right.left = new BSTNode(23);
bst.right.left.right = new BSTNode(37);
bst.right.left.right.right = new BSTNode(41);
bst.right.left.right.left = new BSTNode(29);
bst.right.left.right.left.right = new BSTNode(31);
console.log(bst);

function bs(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < key) {
      start = mid + 1;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('BS:', bs(arr, -44)); // 2
function findKLargestNaive(bst, k) {
  let finalArr = [];

  function inOrder(head) {
    let curr = head;
    if (curr) {
      inOrder(curr.right);
      finalArr.push(curr.val);
      inOrder(curr.left);
    }
    return finalArr;
  }
  inOrder(bst);
  return finalArr.slice(0, k);
}

console.log('naive: ', findKLargestNaive(bst, 3));
// expect [53, 47, 43]

function findKLargestWrapper(bst, k) {
  let kLargest = [];
  findKLargest(bst, k, kLargest);
  return kLargest;
}

function findKLargest(node, k, kLargest) {
  if (node !== null) {
    findKLargest(node.right, k, kLargest);
    // break & return before adding more values
    // if the length is now k
    if (kLargest.length === k) return kLargest;
    kLargest.push(node.val);
    findKLargest(node.left, k, kLargest);
  }
}

console.log('optimized: ', findKLargestWrapper(bst, 4));
// expect [53, 47, 43, 41]
