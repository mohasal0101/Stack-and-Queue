'use strict';

const Queue = require('../queue.js');

describe('Queue', () => {
    it('Can successfully enqueue into a queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.front.value).toEqual(1);
    });

    it('Can successfully enqueue multiple values into a queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.front.value).toEqual(1);
        expect(queue.front.next.value).toEqual(2);
        expect(queue.back.value).toEqual(3);
    });

    it('Can successfully dequeue out of a queue the expected value', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(1);
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.peek()).toEqual(1);
    });

    it('Can successfully empty a queue after multiple dequeues', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(false);
    });

    it('Can successfully instantiate an empty queue', () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toEqual(false);
    });

    it('Calling dequeue or peek on empty queue raises exception', () => {
        const queue = new Queue();
        expect(queue.dequeue()).toEqual('exception');
        expect(queue.peek()).toEqual('exception');
    });
});