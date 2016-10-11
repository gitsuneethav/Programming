// JavaScript source code

function tree() {
    root = null;
    tree.prototype.makeNode = function(value){
        var Node={
            data:value,
            left: null,
            right:null
        };
    }
    tree.prototype.insert = function (value) {
        var newNode = this.makeNode(value);
        if (!root)
            root = newNode;
        else {
            var node = root;
            this.binarysearch(node);
        }
    };
    tree.prototype.binarysearch = function (node) {
        while(node != null)
    }
}