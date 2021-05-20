/*

EPI 14.4 - LCA - LOWEST COMMON ANCESTOR BST

- given a bst (root) and any 2 nodes that are part of that BST, find their closest shared ancestor
- assume all nodes are distinct
- nodes do not have pointers/references to their parents
- assume that the value of node1 is smaller, and node2 is larger (to avoid loss of generality)

*/

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
let tree = new BSTNode(19);
tree.left = new BSTNode(7);
tree.right = new BSTNode(43);
tree.left.left = new BSTNode(3);
tree.left.right = new BSTNode(11);
tree.left.right.right = new BSTNode(17);
tree.left.right.right.left = new BSTNode(13);
tree.left.left.left = new BSTNode(2);
tree.left.left.right = new BSTNode(5);
tree.right.right = new BSTNode(47);
tree.right.right.right = new BSTNode(53);
tree.right.left = new BSTNode(23);
tree.right.left.right = new BSTNode(37);
tree.right.left.right.right = new BSTNode(41);
tree.right.left.right.left = new BSTNode(29);
tree.right.left.right.left.right = new BSTNode(31);

let a = tree.left.left;
let b = tree.left.right.right;
let c = tree.left.right.right.left;
let d = tree.right.left.right.left.right;

console.log(tree);

function lca(bst, node1, node2) {
  let root = bst;
  while (root.val < node1.val || root.val > node2.val) {
    while (root.val < node1.val) {
      root = root.right;
    }
    while (root.val > node2.val) {
      root = root.left;
    }
  }

  return root.val; // or just root
}

console.log(lca(tree, a, b)); // expect node val of 7
console.log(lca(tree, c, d)); // expect node val of 19
