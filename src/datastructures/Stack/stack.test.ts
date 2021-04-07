import Stack from './stack';

describe('Stack', () => {
  describe('push', () => {
    test('it add elements top the stack', () => {
      const stack = new Stack();
      stack.push('a');
      stack.push('b');
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('pop', () => {
    test('it returns and removes the last element added to the stack', () => {
      const stack = new Stack();
      expect(stack.pop()).toBeNull();
      stack.push('a');
      expect(stack.pop()).toEqual('a');
      expect(stack.isEmpty()).toBe(true);
      stack.push('b');
      stack.push('c');
      expect(stack.pop()).toEqual('c');
      expect(stack.pop()).toEqual('b');
    });
  });

  describe('peek', () => {
    test('it returns the last element added to the stack and does not remove it', () => {
      const stack = new Stack();
      expect(stack.peek()).toBeNull();
      stack.push('a');
      expect(stack.peek()).toEqual('a');
      expect(stack.isEmpty()).toBe(false);
      stack.push('b');
      stack.push('c');
      expect(stack.peek()).toEqual('c');
    });
  });

  describe('isEmpty', () => {
    test('it returns true if there are no elements on the stack', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBe(true);
    });

    test('it returns false if there are elements on the stack', () => {
      const stack = new Stack();
      stack.push('a');
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('toArray', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});