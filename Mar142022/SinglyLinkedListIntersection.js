class SinglyLinkedListIntersection {
    findIntersection(a, b) {
        current_a = a.head;
        current_b = b.head;
        // Traverse the larger of the two lists until they have equal length
        if(a.length < b.length) {
            diff = b.length - a.length;
            for(let i = 0; i < diff; i++) {
                current_b = current_b.next;
            }
        }
        if(a.length > b.length) {
            diff = a.length - b.length;
            for(let i = 0; i < diff; i++) {
                current_a = current_a.next;
            }
        }
        // Then we search both in parallel
        while(current_a.value != current_b.value) {
            current_a.value = current_a.next;
            current_b.value = current_b.next;
        }

        return current_a.value;
    }

}



class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new SinglyLinkedListNode(value);

        // If the list doesn't have a head, this value is the new head (and tail)
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
        // Otherwise, the current tail has this as the next value, and the new value is the new tail
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        // If the list is empty, we can't pop any elements
        if(!this.head) {
            return undefined;
        }
        // Else, find the element before the tail, and make it the new tail
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }
}

class SinglyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = next;
    }
}