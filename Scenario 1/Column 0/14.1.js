// IS VALID BST

function isValidBST(node) {
  return checker(node, -Infinity, Infinity);
}
function checker(node, min, max) {
  if (!node) return true;
  if (node.val <= min || node.val >= max) return false;
  return (
    checker(node.left, -Infinity, node.val) &&
    checker(node.right, node.val, Infinity)
  );
}

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let bst = new BSTNode(5);
bst.left = new BSTNode(2);
bst.right = new BSTNode(7);
bst.right.left = new BSTNode(6);
bst.left.left = new BSTNode(1);
bst.left.right = new BSTNode(3);
bst.left.left.left = new BSTNode(0);

console.log(bst);

console.log(isValidBST(bst)); // true

// O(n) time, O(h) space where h is the height of tree
