class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(value){
        this.root = new Node(value)
        this.count = 0
    }

    size(){
        return this.count;
    }

    insert(value){
        this.count++;

        let newNode = newNode(value)

        const searchTree = node => {
            if (value < node.value){
                if (!node.left) node.left = newNode
                else{searchTree(node.left)}
            }
            else if(value > node.value){
                if (!node.right) node.right = newNode
                else{searchTree(node.right)}
            }
        }
        searchTree(this.root)
    }

    min(){
        let current = this.root
        while (current.left) current = current.left
        return current.value
    }

    max(){
        let current = this.root
        while (current.right) current = current.right
        return current.value
    }

    contains(value){
        let current = this.root
        while (current){
            if (value === current.value) return true
            if (value < current.value) current = current.left
            else{current = current.right}
        }
        return false;
    }

    // depth first search - 3 types below
    // depth first searches branch by branch, jumps levels

    // in order
    // search left, root, right
    dfsInOrder(){
        const result = [];

        const traverse = node => {
            if (node.left) traverse(node.left)
            
            result.push(node.value)

            if (node.right) traverse(node.right)
        }
        return result;
    }
    
    // pre order
    // search root, left, right
    dfsPreOrder(){
        const result = [];

        const traverse = node => {
            result.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        return result;
    }
     
    // post order
    // search left, right, root
    dfsPostOrder(){
        const result = [];

        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            result.push(node.value)
        }
        return result;
    }

    // breadth first search
    // breadth first seaches level by level, jumps across branches
    // uses a queue
    bfs(){

    }
}