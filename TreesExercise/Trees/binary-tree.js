/** BinaryTreeNode: node for a general tree. */

const { run } = require("jest");

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let depth = 1;
    if (this.root === null) return depth = 0;
    if (this.root.left === null && this.root.right === null) return depth;
    const stack = [];
    const newStack = [];
    stack.push(this.root.right);
    stack.push(this.root.left);
    depth++;
    while(stack.length){
        const current = stack.pop();
        if(current.left === null && current.right === null) return depth;
        if(current.right != null) newStack.push(current.right);
        if(current.left != null) newStack.push(current.left);
        if(stack.length === 0){
            stack.push(...newStack);
            while(newStack.length) newStack.pop();
            depth++;
        }
    }

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let depth = 1;
    if (this.root === null) return depth = 0;
    if (this.root.left === null && this.root.right === null) return depth;
    const stack = [];
    const newStack = [];
    stack.push(this.root.right);
    stack.push(this.root.left);
    depth++;
    while(stack.length){
        const current = stack.pop();
        if(current.right != null) newStack.push(current.right);
        if(current.left != null) newStack.push(current.left);
        if(stack.length === 0){
            if(newStack.length){
                stack.push(...newStack);
                depth++;
                while(newStack.length) newStack.pop();
            }
            else{
                return depth;
            }
        }
    }

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;

    function maxPath(current){
        if(current === null) return 0;
        const leftSum = maxPath(current.left);
        const rightSum = maxPath(current.right);
        sum = Math.max(sum, current.val + leftSum + rightSum);
        return Math.max(0, leftSum + current.val, rightSum + current.val);
    }

    maxPath(this.root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let larger = null;

    function isNext(node){
        if(node === null) return null;
        const nodeVals = [];
        const leftLarger = isNext(node.left);
        const rightLarger = isNext(node.right);
        if(node.val > lowerBound) nodeVals.push(node.val);
        if(leftLarger != null && leftLarger > lowerBound) nodeVals.push(leftLarger);
        if(rightLarger != null && rightLarger > lowerBound) nodeVals.push(rightLarger);
        if(!nodeVals.length) return null;
        let newLarger = Math.min(...nodeVals)
        if(larger === null || newLarger < larger) larger = newLarger;
        return larger;
    }
    return isNext(this.root);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if(this.root.val === node1.val || this.root.val === node2.val) return false;
    const right = [];
    const left = [];
    let depth = 2;
    let depth1 = 0;
    let depth2 = 0;
    let parent1;
    let parent2;
    right.push(this.root.right);
    left.push(this.root.left);
    if(right[0].val === node1.val || right[0].val === node2.val || left[0].val === node1.val || left[0].val === node2.val) return false;
    while(right.length){
      let current = right.shift();
      depth++;
      if(current.right != null){
        if(current.right.val === node1.val){
          depth1 = depth;
          parent1 = current;
          break;
        }
        if(current.right.val === node2.val){
          depth2 = depth;
          parent2 = current;
          break;
        }
        right.push(current.right);
      }
      if(current.left != null){
        if(current.left.val === node1.val){
          depth1 = depth;
          parent1 = current;
          break;
        }
        if(current.left.val === node2.val){
          depth2 = depth;
          parent2 = current;
          break;
        }
        right.push(current.left);
      }
    }
    depth = 2;
    while(left.length){
      let current = left.shift();
      depth++;
      if(current.right != null){
        if(current.right.val === node1.val){
          depth1 = depth;
          parent1 = current;
          break;
        }
        if(current.right.val === node2.val){
          depth2 = depth;
          parent2 = current;
          break;
        }
        left.push(current.right);
      }
      if(current.left != null){
        if(current.left.val === node1.val){
          depth1 = depth;
          parent1 = current;
          break;
        }
        if(current.left.val === node2.val){
          depth2 = depth;
          parent2 = current;
          break;
        }
        left.push(current.left);
      }
    }

    if(depth1 === depth2 && parent1 != parent2){
      return true;
    } else return false;

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const treeSerial = [];
    if (tree.root === null) return null;
    const queue = [];
    queue.push(tree.root);
    while(queue.length){
      let current = queue.pop();
      if(current === null) {
        treeSerial.push("#");
      } 
      else {
        treeSerial.push(current.val);
        queue.push(current.left);
        queue.push(current.right);
      }
    }
    return treeSerial.join(" ");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(serial) {
    if(!serial) return null;
    const values = serial.split(" ");
    
    function buildTree() {
      if (values.length) {
        const currentVal = values.shift();
        if (currentVal === "#") return null;
        let currentNode = new BinaryTreeNode(+currentVal);
        currentNode.left = buildTree();
        currentNode.right = buildTree();
        return currentNode;
      }
    }

    const root = buildTree();
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }

}

module.exports = { BinaryTree, BinaryTreeNode };


let smallTree;
let largeTree;
let emptyTree;


emptyTree = new BinaryTree();

  // build small tree;
let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

  // build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let largeRoot = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(largeRoot);

console.log(BinaryTree.serialize(largeTree));
console.log(BinaryTree.deserialize(BinaryTree.serialize(largeTree)));