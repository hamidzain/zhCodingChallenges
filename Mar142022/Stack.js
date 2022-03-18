// Arrays in JS make this easy, because they already have many stack functions built into them

class Stack {
    constructor() {
        this.elements = [];
    }

    push(value) {
        this.elements.push(value);
    }

    pop() {
        if(this.elements.length === 0) {
            throw new NoStackElementsException();
        }
        return this.elements.pop();
    }


    max() {
        if(this.elements.length === 0) {
            throw new NoStackElementsException();
        }
        return arr.reduce(function(a, b) {
            return Math.max(a, b);
        }, -Infinity)
    }
}


class NoStackElementsException extends Error {
    constructor() {
        this.name = "NoStackElementsException";
    }
}