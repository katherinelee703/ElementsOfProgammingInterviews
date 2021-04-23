/*

FIND THE FIRST KEY GREATER THAN A GIVEN VALUE IN A BST

example, given input 23 and the following tree, return 29

        19
      /    \
    7       43
          /    \
        *23     47
            \     \
            37     53
           /  \
        *29   41
          \ 
           31

naive approach is to do an in-order traversal and stop right after we hit 1 bigger. this works but takes O(n) time worst case and does NOT utilized the greatness of BST properties

a better approach is to use binary search, updating answer candidates as we go thru and eliminate subtrees based on the layout logic of a BST, and then determine where to stop. O(height) time, O(1) space

in example: find first key larger than 23
when we get to 23 we have to go right subtree to find something larger. 
if right subtree has any lefts, we have to go as far left as possible from first right subtree.

if no left or right subtree, we return the parent of 23.
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

// console.log(bst);

// ie "In Order Successor of BST" from Leetcode
function firstKeyGreater(root, key) {
  let succ = null;
  while (root) {
    if (root.val > key) {
      succ = root; // this line is important
      // only when we have gotten to a node that is larger do we re-set successor
      root = root.left;
    } else {
      root = root.right;
      // go right also when root === key, bc if there are things below it, we want to check 1st right child's leftmost child
    }
  }

  return succ.val;
}

console.log(firstKeyGreater(bst, 23)); // expect 29
