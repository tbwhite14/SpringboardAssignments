/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const stack = [this];
    let sum = 0;
    if(this.root === null) return sum = 0;
    let current = stack.pop();
    sum += current.root.val;
    stack.push(...current.root.children);
    while (stack.length){
        let current = stack.pop();
        sum += current.val;
        stack.push(...current.children);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const stack = [this];
    let evenCount = 0;
    if(this.root === null) return evenCount = 0;
    let current = stack.pop();
    if(current.root.val % 2 === 0) evenCount++;
    stack.push(...current.root.children);
    while(stack.length){
        let current = stack.pop();
        if(current.val % 2 === 0) evenCount++;
        stack.push(...current.children);
    }
    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const stack = [this];
    let boundCount = 0;
    if(this.root === null) return boundCount = 0;
    let current = stack.pop();
    if(current.root.val > lowerBound) boundCount++;
    stack.push(...current.root.children);
    while(stack.length){
        let current = stack.pop();
        if(current.val > lowerBound) boundCount++;
        stack.push(...current.children);
    }
    return boundCount;
  }
}

module.exports = { Tree, TreeNode };

