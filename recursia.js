function tree(rootValue){
    this.level = 1
    this.value = rootValue
    this.left = null
    this.right = null
    this.datatype = typeof(rootValue)
    this.addLeaf = function(leafvalue){
        if (typeof(leafvalue)!==this.datatype){
            return
        }
        if (leafvalue > this.value) {
            if (!this.right) {
                let leaf = new tree(leafvalue)
                leaf.level = this.level + 1
                this.right = leaf
            } else {
                this.right.addLeaf(leafvalue)
            }
        } else {
            if (!this.left) {
                let leaf = new tree(leafvalue)
                leaf.level = this.level + 1
                this.left = leaf
            } else {
                this.left.addLeaf(leafvalue)
            }
        }
    }
    this.showTree = function(){
        if (this.left && this.right) {
            console.log(`Value ${this.value}, level ${this.level}`)
            this.left.showTree()
            this.right.showTree()
        }
        if (this.left && !this.right) {
            console.log(`Value ${this.value}, level ${this.level}`)
            this.left.showTree()
        }
        if (!this.left && this.right) {
            console.log(`Value ${this.value}, level ${this.level}`)
            this.right.showTree()
        }
        if (!this.left && !this.right) {
            console.log(`Value ${this.value}, level ${this.level}`)
        }
    }
}



let mytree = new tree(5)
mytree.addLeaf(10)
mytree.addLeaf(4)
mytree.addLeaf(2)
mytree.addLeaf("1221")
mytree.addLeaf(5)


mytree.showTree()
console.log(mytree)