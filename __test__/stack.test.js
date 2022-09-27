'use strict';

const Stack = require('../stack.js');

describe('Testing the stack class', () => {
    it('test creating a new ins.', () => {
        let stack = new Stack();
        expect(stack.top).toBeNull();

    });
  
    it('Test pushing to the stack', () => {
        const newStack = new Stack();
        newStack.push(1);
        expect(newStack.top.value).toEqual(1);
        expect(newStack.top.next).toBeNull();
    });
  
    it('Testing the pop from the stack', () => {
        const newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        expect(newStack.pop()).toEqual(3);
        expect(newStack.pop()).toEqual(2);
        expect(newStack.pop()).toEqual(1);
    })

    it('Testing the peek from the stack', () => {
        const newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        expect(newStack.peek()).toEqual(2);
        expect(newStack.peek()).toEqual(2);
        expect(newStack.peek()).toEqual(2);
    })

    it('Testing the isEmpty from the stack', () => {
        const newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        expect(newStack.isEmpty()).toEqual(false);
        newStack.pop();
        newStack.pop();
        expect(newStack.isEmpty()).toEqual(true);
    })
    
  })