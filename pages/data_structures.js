export class DynamicArray {
    constructor () {
        this.array = []
    }

    Append(val) {
        this.array.push(val)
    }

    PopBack() {
        return this.array.pop()
    }

    PopFront() {
        return this.array.shift()
    }

    Size() {
        return this.array.length
    }
}

export class ListNode {
    constructor(key) {
        this.key = key
        this.next = null
        this.prev = null
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
            node.prev = this.tail
            this.tail = node
        }
    }

    PopBack() {
        if (this.head == null) {
            console.error('This Linked List is empty')
        }

        if (this.head == this.tail) {
            const X = this.head
            this.head = null
            this.tail = null
            return X
        } else {
            const X = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
            return X
        }


    }

    getFirst() {
        return this.head;
    }

    PopBack() {
        if (this.head == null) {
            return false
        } 
        if (this.head == this.tail) {
            const X = this.head
            this.head = null
            this.tail = null
            return X
        } else {
            const X = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
            return X

        }
    }

    Size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
}

// Stack class extends Linked List:

// Push() -- > super.PushBack()
// Pop()  --> super.PopBack()
export class Stack extends LinkedList {
    constructor () {
        super();
    }


    Push(val) {
        this.PushBack(val)
    }
    
    Pop(){
        const X = this.PopBack()
        return X
    }
}

export class Queue extends LinkedList {
    constructor() {
        super();
    }

    TopFront() {
        if (this.head != null) {
            return this.head
        } else {
            return false
        }       
    }

    Enqueue(val) {
        this.PushBack(val)
    }

    Dequeue() {
        const X = this.PopFront()
        return X
    }

}