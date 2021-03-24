/*

IS BINARY TREE HEIGH-BALANCED?

	- make binary tree node class
	- build example binary tree
	- 3 traversal methods for practice - inOrder, preOrder, postOrder
	- check if height isBalanced(), utilizing a call to a helper function height()
	
*/

class BTN {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
  insertL(val) {
    this.left = new BTN(val);
  }
  insertR(val) {
    this.right = new BTN(val);
  }
}

let b = new BTN(7);
b.insertL(5);
b.insertR(2);
b.left.insertL(1);
b.left.insertR(11);
b.right.insertL(4);
b.right.insertR(44);

console.log(b);

function inOrder(node, arr = []) {
  if (!node) return;

  inOrder(node.left, arr);
  arr.push(node.val);
  inOrder(node.right, arr);

  return arr;
}

function preOrder(node, arr = []) {
  if (!node) return;
  arr.push(node.val);
  preOrder(node.left, arr);
  preOrder(node.right, arr);
  return arr;
}

function postOrder(node, arr = []) {
  if (!node) return;
  postOrder(node.left, arr);
  postOrder(node.right, arr);
  arr.push(node.val);
  return arr;
}

console.log('in: ', inOrder(b), '\n');
console.log('pre: ', preOrder(b), '\n');
console.log('post: ', postOrder(b), '\n');

function height(root) {
  if (!root) return 0; // this is the end/bottom/leaf node, so it has ZERO height

  let leftH = height(root.left);
  let rightH = height(root.right);
  console.log(leftH);
  if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) {
    return -1;
  }

  return 1 + Math.max(leftH, rightH);
}

function isBalanced(root) {
  if (!root) return true;
  let h = height(root);
  return h !== -1;
}

console.log('BAL: ', isBalanced(b)); // expect true
