export class DynamicArray {
    constructor (arr) {
        this.array = arr
    }

}

export class ListNode {
    constructor(key) {
        this.key = key
        this.next = null
    }
}


export class LinkedList {
    constructor(head = null) {
        this.head = head 
        this.tail = head
    }
    
    PushBack(val) {
        let node = new ListNode(val)
        node.next = null
        if (this.tail === null) {
            this.tail = node
            this.head = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
}

export class Stack{
    constructor () {
        this.stack = []
    }


    Push(val) {
        this.stack.push(val)
    }
    
    Pop(){
        return this.stack.pop()
    }
        

}