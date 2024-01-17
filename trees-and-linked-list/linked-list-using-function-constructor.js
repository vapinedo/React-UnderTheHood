function Node(value, next = null) {
    this.value = value;
    this.next = next;
}

function LinkedList(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
}

LinkedList.prototype.append = function(value) {
    const node = new Node(value);

    if (this.head === null) {
        this.head = node;
        this.tail = node;
        return this;
    }

    this.tail.next = node;
    this.tail = node;
    return this;
};

LinkedList.prototype.print = function() {
    let currentNode = this.head;
    while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next
    }
};

const linkedList1 = new LinkedList();
linkedList1.append("Victor");
linkedList1.append("Jose");
linkedList1.append("Pedro");
linkedList1.print();
console.log(linkedList1);