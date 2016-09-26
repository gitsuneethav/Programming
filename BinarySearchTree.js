// JavaScript source code
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.makeNode = function (value) {
    var node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
}

BinarySearchTree.prototype.add = function (value) {
    var currentNode = this.makeNode(value);
    if (!this.root)
        this.root = currentNode;
    else
        this.insert(currentNode);

    return this;
}

BinarySearchTree.prototype.insert = function (currentNode) {
    var node = this.root;
    var value = currentNode.value;
    var traverse = function (node) {
        if (value > node.value) {
            if (!node.right) {
                node.right = currentNode;
                return;
            }
            else
                traverse(node.right);
        }
        else if (value < node.value) {
            if (!node.left) {
                node.left = currentNode;
                return;
            }
            else
                traverse(node.left);
        }
    };
    traverse(node);
}

BinarySearchTree.prototype.findMin = function () {
    var node = this.root;
    var traverse = function (node) {
        return !node.left ? node.value : traverse(node.left);
    };
    return traverse(node);
}

BinarySearchTree.prototype.findMax = function () {
    var node = this.root;
    var traverse = function (node) {
        return !node.right ? node.value : traverse(node.right);
    };

    return traverse(node);
}

BinarySearchTree.prototype.getDepth = function () {
    var node = this.root;
    var maxDepth = 0;
    var traverse = function (node, depth) {
        if (!node) return null;
        else {
            maxDepth = depth > maxDepth ? depth : maxDepth;
            traverse(node.left, depth + 1);
            traverse(node.right, depth + 1);
        }
    };
    traverse(node, 0);
    return maxDepth;
}

BinarySearchTree.prototype.getLeaves = function () {
    var node = this.root;
    var leaves = [];
    var traverse = function (node) {
        if (!node) return null;
        if (!node.left && !node.right)
            leaves.push(node.value);
        else {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
    };

    traverse(node);
    return leaves;
}

BinarySearchTree.prototype.preOrder = function(){
    var node = this.root;
    var result = [];
    var traverse = function(node){
        result.push(node.value);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };

    traverse(node);
    return result;
}

BinarySearchTree.prototype.inOrder = function(){
    var node = this.root;
    var result = [];
    var traverse = function(node){
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
    };

    traverse(node);
    return result;
}

BinarySearchTree.prototype.postOrder = function(){
    var node = this.root;
    var result = [];
    var traverse = function(node){
        node.left && traverse(node.left);
        node.right && traverse (node.right);
        result.push(node.value);
    };
    traverse(node);
    return result;
}

var bst = new BinarySearchTree();
bst.add(40).add(25).add(78).add(10).add(32);
bst.add(10).add(20).add(30).add(5).add(8).add(3).add(9);
document.getElementById("bst").innerHTML = "<span>PreOrder Result: " + bst.preOrder() + "</span><br /><span>PostOrder Result: " + bst.postOrder() + "</span><br /><span>InOrder Result: " + bst.inOrder() + "</span><br />";
document.getElementById("bst").innerHTML += "<span>Leaf Nodes: " + bst.getLeaves() + "</span><br/>";
document.getElementById("bst").innerHTML += "<span>Min Value: " + bst.findMin() + "</span><br/>";
document.getElementById("bst").innerHTML += "<span>Max Value: " + bst.findMax() + "</span><br/>";
document.getElementById("bst").innerHTML += "<span>Depth: " + bst.getDepth() + "</span><br/>";
