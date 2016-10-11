// JavaScript source code
function Node() {
    var data;
    var next = null;
}

function list() {
    head = null;
}

list.prototype.makeNode = function (value) {
    var Node = {
        data: value,
        next: null
    };
    return Node;
}

list.prototype.insertNode = function (value) {
    var currentNode = this.makeNode(value);    
    if (head == undefined)
        head = currentNode;
    else {
        var lastNode = this.traverse();
        lastNode.next = currentNode;
    }
}
list.prototype.traverse = function () {
    var node = head;
    while (node.next != null) {
        node = node.next;
    }
    return node;
}
list.prototype.print = function () {
    var node = head;
    var str = "";
    while (node != null) {
        str += node.data + ", ";
        node = node.next;
    }
    return str.substring(0, str.length - 2);
}
list.prototype.reverse = function () {
    var prev = head;
    var node = head, next;
    while (node != null) {        
        next = node.next;
        node.next = prev;
        if (prev == head)
            prev.next = null;
        prev = node;
        node = next;
    }
    head = prev;
}
list.prototype.delete = function (value) {
    var node = head;
    var prev = null;
    while (node != null) {
        if (node.data == value) {
            if (prev == null)
                head = node.next;
            else
                prev.next = node.next;
            node.next = null;
            delete node;
            return;
        }
        prev = node;
        node = node.next;
    }
}
list.prototype.middle = function () {
    var current = head;
    var node = head;
    var count = 0;
    while (node != null) {        
        if (node.next == null || node.next.next == null) {
            return current.data + ", " + count;
        }
        current = current.next;
        node = node.next.next;
        count++;
    }
    
}
function create() {
    head = null;
    var arrlist = document.getElementById("txtlist").value.split(',');
    for (let i = 0; i < arrlist.length; i++) {
        list.prototype.insertNode(arrlist[i]);
    }
    document.getElementById("list").value = list.prototype.print();
}

function reverse() {
    list.prototype.reverse();
    document.getElementById("revList").value = list.prototype.print();
}

function deleteNode() {    
    list.prototype.delete(document.getElementById("txtNode").value);
    document.getElementById("newList").value = list.prototype.print();
}
function findMedian() {
    document.getElementById("txtMiddle").value = list.prototype.middle();
}