/*

EPI 9.2 - IS BINARY TREE SYMMETRIC?

a symmetric binary tree has the left and right subtrees and exact mirror images of each other, not just in shape, but also in the value held at each node.

  |3|     |     |3| 
  / \     |     / \
|1|  |1|  |   |1|  |5|
symmetric |  asymmetric

Hint: the definition of symmetry is recursive!

Idea/Solution: 
- start at given root in an outside wrapper function
- set left subtree to left, and right subtree to right
- make intial call to a recursive function, giving it left and right


- inside recursive function, our only base case for true is when both nodes being entered in at the same time are null
- then check for both left and right not being null
  - if both aren't null and have same val, recurse in mirror image pattern. (check right subtree's left with left subtree's right || check right subtree's right, with left subtrees left)
  - if one is null, or one has diff value, return false;

*/

class BTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let t = new BTNode(314);

t.left = new BTNode(6);
t.right = new BTNode(6);

t.left.left = new BTNode(2);
t.right.right = new BTNode(2);

t.left.left.left = new BTNode(1);
t.left.left.right = new BTNode(3);

t.right.right.right = new BTNode(1);
t.right.right.left = new BTNode(3);

//===========================================

function symmetricBTWrapper(root) {
  let left = root.left;
  let right = root.right;
  return isSymmetric(left, right);
}

function isSymmetric(left, right) {
  // base case, went thru whole tree all the way to nulls
  if (!left && !right) return true;
  else if (left.val === right.val) {
    return (
      isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left)
    );
  }
  // either one side emptied first, or mirror-image values differed
  return false;
}

console.log(symmetricBTWrapper(t));
