// COMPUTE LOWEST COMMON ANCESTOR WHEN NODES HAVE PARENT POINTERS

function lcaParentPointers(nodeA, nodeB) {
  if (!nodeA || !nodeB) return null;
  if (nodeA === nodeB) return nodeA;

  let depthA = getDepth(nodeA);
  let depthB = getDepth(nodeB);

  let shallower = depthA < depthB ? nodeA : nodeB;
  let deeper = depthA > depthB ? nodeA : nodeB;
  let diff = Math.abs(depthA - depthB);

  while (diff > 0) {
    deeper = deeper.parent;
    diff--;
  }

  while (deeper !== shallower) {
    deeper = deeper.parent;
    shallower = shallower.parent;
  }
  return deeper.val;
}

function getDepth(node) {
  let depth = 0;
  while (node.parent) {
    depth++;
    node = node.parent;
  }
  return depth;
}

class BT {
  constructor(val, parent) {
    this.val = val;
    this.left = this.right = null;
    this.parent = parent;
  }
}

let bt = new BT(7);
bt.left = new BT(12, bt);
bt.right = new BT(12, bt);
bt.right.left = new BT(18, bt.right);
bt.right.right = new BT(21, bt.right);
console.log(bt);

let a = bt.left;
let b = bt.right.right;
console.log('a: ', a.val); // 12
console.log('b: ', b.val); // 21
console.log('LCA w/parent pointers: ', lcaParentPointers(a, b)); // 7
