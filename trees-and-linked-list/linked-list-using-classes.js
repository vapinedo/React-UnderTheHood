class LinkedListNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(head, tail) {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new LinkedListNode(val);

        // is there is not head yet, let's make new node a head.
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    print() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let myLinkedList = new LinkedList();
myLinkedList.append("Victor");
myLinkedList.append("Jose");
myLinkedList.append("Pedro");
myLinkedList.print();