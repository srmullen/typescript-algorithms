import Queue from './queue';

describe('Queue', () => {
  describe('toArray', () => {
    test('it returns an array of the queue elements', () => {
      const queue = new Queue();
      queue.push(1);
      queue.push(2);
      queue.push(3);
      expect(queue.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe('push', () => {
    test('elements are added to the queue', () => {
      const queue = new Queue();
      queue.push('a');
      expect(queue.pop()).toEqual('a');
    })
  });

  describe('pop', () => {
    test('it returns the next item and removes it', () => {
      const queue = new Queue();
      expect(queue.pop()).toBeNull();
      queue.push('a');
      expect(queue.pop()).toEqual('a');
      queue.push('b');
      queue.push('c');
      expect(queue.pop()).toEqual('b');
      expect(queue.pop()).toEqual('c');
    });
  });

  describe('peek', () => {
    test('it returns the next item and does not remove it', () => {
      const queue = new Queue();
      expect(queue.peek()).toBeNull();
      queue.push('a');
      expect(queue.peek()).toEqual('a');
      queue.push('b');
      expect(queue.peek()).toEqual('a');
    });
  });

  describe('isEmpty', () => {
    test('it returns true if there are no elements in the queue', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
      queue.push(1);
      queue.pop();
      expect(queue.isEmpty()).toBe(true);
    });

    test('it returns false if there are elements in the queue', () => {
      const queue = new Queue();
      queue.push('a');
      expect(queue.isEmpty()).toBe(false);
    });
  });
});