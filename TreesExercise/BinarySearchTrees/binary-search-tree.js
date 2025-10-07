class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      const newRoot = new Node(val);
      this.root = newRoot;
      return this;
    }
    let inserted = false;
    let newNode = new Node(val);
    if (this.root.left === null && val < this.root.val) {
      this.root.left = newNode;
      inserted = true;
    }
    if (this.root.right === null && val > this.root.val) {
      this.root.right = newNode;
      inserted = true;
    }
    let current;
    if (val < this.root.val) current = this.root.left;
    if (val > this.root.val) current = this.root.right;
    while (!inserted){
      if (val < current.val){
        if(current.left === null){
          current.left = newNode;
          inserted = true;
        }
        else current = current.left;
      }
      if (val > current.val) {
        if(current.right === null){
          current.right = newNode;
          inserted = true;
        }
        else current = current.right;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    const newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    if(val < node.val){
      if(node.left === null){
        node.left = newNode;
        return this;
      }
      return this.insertRecursively(val, node.left);
    }
    if(val > node.val){
      if(node.right === null){
        node.right = newNode;
        return this;
      }
      return this.insertRecursively(val, node.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node;
    if (this.root === null) return node;
    let found = false;
    if (this.root.val === val){
      node = this.root;
      return node;
    }
    let current = this.root;
    while(!found){
      if(current.left === null && current.right === null) return node;
      if(val < current.val){
        if(val === current.left.val) {
          node = current.left;
          found = true;
        }
        current = current.left;
      }
      if(val > current.val){
        if(val === current.right.val) {
          node = current.right;
          found = true;
        }
        current = current.right;
      }
    }
    return node;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(node === null) return undefined;
    if(val === node.val) return node;
    if(val > node.val) return this.findRecursively(val, node.right);
    if(val < node.val) return this.findRecursively(val, node.left);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const order = [];
    function helper(node){
      order.push(node.val);
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
    }
    helper(this.root);
    return order;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const order = [];
    function helper(node){
      if(node.left) helper(node.left);
      order.push(node.val);
      if(node.right) helper(node.right);
    }
    helper(this.root);
    return order;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const order = [];
    function helper(node){
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
      order.push(node.val);
    }
    helper(this.root);
    return order;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const order = [];
    const queue = [];
    queue.unshift(this.root);
    while(queue.length){
      let current = queue.shift();
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
      order.push(current.val);
    }
    return order;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let node = this.root;
    let parent;

    while(node.val !== val){
      parent = node;
      if(val < node.val){
        node = node.left;
      } else{
        node = node.right;
      }
    }

    if (node !== this.root){
      if(node.left === null && node.right === null){
        if(parent.left === node){
          parent.left = null;
        }
        if(parent.right === node){
          parent.right = null;
        }
      } else if(node.left !== null && node.right !== null){
        let rightParent = node;
        let right = node.right;

        while(right.left !== null){
          rightParent = right;
          right = right.left;
        }

        if(parent.left === node){
          parent.left.val = right.val;
        } else{
          parent.right.val = right.val;
        }

        if(right.right !== null){
          rightParent.left = right.right;
        } else{
          rightParent.left = null;
        }

      } else {
        if(node.left === null){
          if(parent.left === node){
            parent.left = node.right;
          }
          if(parent.right === node){
            parent.right = node.right;
          }
        } else{
          if(parent.left === node){
            parent.left = node.left;
          }
          if(parent.right === node){
            parent.right = node.left;
          }
        }
      }
    }
    return node;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(current = this.root) {
    if (current === null) return;
    return maxDepth(current) - minDepth(current) <= 1;

    function minDepth(current) {
      if (current === null) return 0;
      return 1 + Math.min(minDepth(current.left), minDepth(current.right));
    }

    function maxDepth(current) {
      if (current === null) return 0;
      return 1 + Math.max(maxDepth(current.left), maxDepth(current.right));
    }

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    // if the tree is too small, return
    if (!this.root || (!this.root.left && !this.root.right)) return;

    while (current) {
      // Current is largest and has a left subtree and 2nd largest is the largest in that subtree
      if (current.left && !current.right) {
        return this.findSecondHighest(current.left);
      }
      // Current is parent of largest and largest has no children so current is 2nd largest
      if (current.right && (!current.right.left && !current.right.right)) {
        return current.val;
      }
      current = current.right;
    }
  }
}

module.exports = BinarySearchTree;