'use strict';

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }

 class Stack {
  constructor() {
    this.top = null;
  }



push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this;
    }


pop(){
    if (!this.top) {
        return 'Exception';
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
    }


peek() {
    if (!this.top) {
        return 'Exception';
    }
    return this.top.value;
    }

isEmpty() {
    if (!this.top) {
        return true;
    }
    return false;
    }

}
module.exports = Stack;