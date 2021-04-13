/*

EPI 8.6 - COMPUTE BINARY TREE NODES IN ORDER OF INCREASING DEPTH

given a binary tree, return an array holding all of its nodes, 
in order of increasing depth (ie, level by level, left to right)

*/

class BTNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let bt = new BTNode(314);
bt.left = new BTNode(6);
bt.right = new BTNode(6);
bt.left.left = new BTNode(271);
bt.left.right = new BTNode(561);
bt.right.left = new BTNode(2);
bt.right.right = new BTNode(271);

function levelByLevel(node) {
  let currentLevel = [node];
  let nextLevel = []; // could build whole q class to avoid while loop on line 45 but this is just quick implementation
  let order = [];
  let holder = [];

  while (currentLevel.length) {
    while (currentLevel.length) {
      let item = currentLevel.pop();
      holder.push(item.val);
      if (item.left) nextLevel.push(item.left);
      if (item.right) nextLevel.push(item.right);
    }
    order.push(holder);
    holder = [];

    // need to maintain left to right ordering,
    // so reverse nextLevel q back into currLevel q
    // if we built real q, could just call dequeue
    // but for now, reverse via pop will work
    while (nextLevel.length) {
      currentLevel.push(nextLevel.pop());
    }
  }
  return order;
}

console.log('level by level order: ', levelByLevel(bt));
// expect = [[314], [6, 6], [271, 561, 2, 271]];
