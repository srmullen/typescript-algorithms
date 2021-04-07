import LinkedList from './linkedList';

describe('LinkedList', () => {
  describe('new LinkedList', () => {
    test('it constructs', () => {
      const list = new LinkedList();
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });

  describe('Append', () => {
    test('first appended item becomes the head and tail', () => {
      const list = new LinkedList();
      list.append(1);
      expect(list.head?.value).toEqual(1);
      expect(list.tail?.value).toEqual(1);
    });

    test('appended items become the tail', () => {
      const list = new LinkedList();
      list.append(1);
      expect(list.head?.value).toEqual(1);
      expect(list.tail?.value).toEqual(1);
      list.append(2);
      expect(list.head?.value).toEqual(1);
      expect(list.tail?.value).toEqual(2);
      list.append(3);
      expect(list.head?.value).toEqual(1);
      expect(list.tail?.value).toEqual(3);
    });
  });

  describe('Prepend', () => {
    test('first item in list becomes head and tail', () => {
      const list = new LinkedList();
      list.prepend(1);
      expect(list.head?.value).toEqual(1);
      expect(list.tail?.value).toEqual(1);
    });

    test('prepended items become the head', () => {
      const list = new LinkedList();
      list.prepend(1);
      expect(list.tail?.value).toEqual(1);
      expect(list.head?.value).toEqual(1);
      list.prepend(2);
      expect(list.tail?.value).toEqual(1);
      expect(list.head?.value).toEqual(2);
      list.prepend(3);
      expect(list.tail?.value).toEqual(1);
      expect(list.head?.value).toEqual(3);
    });
  });

  describe('Contains', () => {
    test('it uses default comparator', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.contains(1)).toBeTruthy();
      expect(list.contains(2)).toBeTruthy();
      expect(list.contains(42)).toBeFalsy();
    });

    test('custom comparator', () => {
      const compare = (a: string, b: string) => {
        if (a === b) {
          return 0;
        }

        return a.charCodeAt(0) < b.charCodeAt(0) ? -1 : 1;
      }

      const list = new LinkedList(compare);
      list.append('a');
      list.append('b');
      list.append('c');
      expect(list.contains('a')).toBeTruthy();
      expect(list.contains('c')).toBeTruthy();
      expect(list.contains('d')).toBeFalsy();
    });
  });

  describe('Remove', () => {
    describe('no items in list', () => {
      test('it returns null', () => {
        const list = new LinkedList();
        expect(list.remove(1)).toBe(null);
      });
    });

    describe('item is not in list', () => {
      test('it returns null', () => {
        const list = new LinkedList();
        list.append(1)
        expect(list.remove(2)).toBe(null);
        expect(list.toArray()).toEqual([1]);
      });
    });

    describe('item is head of the list', () => {
      test('it returns the node containing the value', () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        const node = list.remove(1);
        expect(node?.value).toEqual(1)
        expect(list.head?.value).toEqual(2);
        expect(list.toArray()).toEqual([2]);
      });
    });

    describe('item is tail of the list', () => {
      test('it returns the node and updates the tail.', () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        const node = list.remove(2);
        expect(node?.value).toEqual(2);
        expect(list.head?.next).toBe(null);
        expect(list.toArray()).toEqual([1]);
      });
    });

    describe('list contains multiple of the same item', () => {
      test('it removes all the matching items', () => {
        const list = new LinkedList();
        list.append(1);
        list.append(1);
        list.append(2);
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(3);

        list.remove(2);
        expect(list.toArray()).toEqual([1, 1, 1, 3, 3]);
      });
    });
  });

  describe('deleteHead', () => {
    test('it does nothing if there is no head', () => {
      const list = new LinkedList();
      expect(list.deleteHead()).toBeNull();
    });

    test('it returns the head', () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      const head = list.deleteHead();
      expect(head?.value).toEqual(1);
    });

    test('it sets the new head', () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      list.deleteHead();
      expect(list.head?.value).toEqual(2);
    });
  });

  describe('deleteTail', () => {
    test('it does nothing if there is no tail', () => {
      const list = new LinkedList();
      expect(list.deleteTail()).toBeNull();
    });

    test('it return the tail', () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      const tail = list.deleteTail();
      expect(tail?.value).toEqual(3);
    });

    test('it sets the new tail', () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      list.deleteTail();
      expect(list.tail?.value).toEqual(2);
      expect(list.tail?.next).toBeNull();
    });
  });

  describe('toArray', () => {
    test('it returns an array of the list items', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe('fromArray', () => {
    test('it creates a linked list from the array', () => {
      const list = LinkedList.fromArray(['a', 'b', 'c']);
      expect(list.head?.value).toEqual('a');
      expect(list.tail?.value).toEqual('c');
    });
  });

  // describe('Traversal', () => {
  //   test('it can use a for..of loop', () => {
  //     const list = new LinkedList<string>();
  //     list.append('a');
  //     list.append('b');
  //     list.append('c');

  //     const arr = [];
  //     for (let c of list) {
  //       arr.push(c);
  //     }
  //     expect(list.toArray()).toEqual(['a', 'b', 'c']);
  //   });
  // });
});

// describe('LinkedList', () => {
//   it('should create empty linked list', () => {
//     const linkedList = new LinkedList();
//     expect(linkedList.toString()).toBe('');
//   });

//   it('should append node to linked list', () => {
//     const linkedList = new LinkedList();

//     expect(linkedList.head).toBeNull();
//     expect(linkedList.tail).toBeNull();

//     linkedList.append(1);
//     linkedList.append(2);

//     expect(linkedList.toString()).toBe('1,2');
//     expect(linkedList.tail?.next).toBeNull();
//   });

//   it('should prepend node to linked list', () => {
//     const linkedList = new LinkedList();

//     linkedList.prepend(2);
//     expect(linkedList.head?.toString()).toBe('2');
//     expect(linkedList.tail?.toString()).toBe('2');

//     linkedList.append(1);
//     linkedList.prepend(3);

//     expect(linkedList.toString()).toBe('3,2,1');
//   });

//   it('should delete node by value from linked list', () => {
//     const linkedList = new LinkedList();

//     expect(linkedList.remove(5)).toBeNull();

//     linkedList.append(1);
//     linkedList.append(1);
//     linkedList.append(2);
//     linkedList.append(3);
//     linkedList.append(3);
//     linkedList.append(3);
//     linkedList.append(4);
//     linkedList.append(5);

//     expect(linkedList.head?.value).toBe(1);
//     expect(linkedList.tail?.value).toBe(5);

//     const deletedNode = linkedList.remove(3);
//     expect(deletedNode?.value).toBe(3);
//     expect(linkedList.toString).toBe('1,1,2,4,5');

//     linkedList.remove(3);
//     expect(linkedList.toString()).toBe('1,1,2,4,5');

//     linkedList.remove(1);
//     expect(linkedList.toString()).toBe('2,4,5');

//     expect(linkedList.head?.toString()).toBe('2');
//     expect(linkedList.tail?.toString()).toBe('5');

//     linkedList.remove(5);
//     expect(linkedList.toString()).toBe('2,4');

//     expect(linkedList.head?.toString()).toBe('2');
//     expect(linkedList.tail?.toString()).toBe('4');

//     linkedList.remove(4);
//     expect(linkedList.toString()).toBe('2');

//     expect(linkedList.head?.toString()).toBe('2');
//     expect(linkedList.tail?.toString()).toBe('2');

//     linkedList.remove(2);
//     expect(linkedList.toString()).toBe('');
//   });

  // it('should delete linked list tail', () => {
  //   const linkedList = new LinkedList();

  //   linkedList.append(1);
  //   linkedList.append(2);
  //   linkedList.append(3);

  //   expect(linkedList.head?.toString()).toBe('1');
  //   expect(linkedList.tail?.toString()).toBe('3');

  //   const deletedNode1 = linkedList.deleteTail();

  //   expect(deletedNode1.value).toBe(3);
  //   expect(linkedList.toString()).toBe('1,2');
  //   expect(linkedList.head.toString()).toBe('1');
  //   expect(linkedList.tail.toString()).toBe('2');

  //   const deletedNode2 = linkedList.deleteTail();

  //   expect(deletedNode2.value).toBe(2);
  //   expect(linkedList.toString()).toBe('1');
  //   expect(linkedList.head.toString()).toBe('1');
  //   expect(linkedList.tail.toString()).toBe('1');

  //   const deletedNode3 = linkedList.deleteTail();

  //   expect(deletedNode3.value).toBe(1);
  //   expect(linkedList.toString()).toBe('');
  //   expect(linkedList.head).toBeNull();
  //   expect(linkedList.tail).toBeNull();
  // });

  // it('should delete linked list head', () => {
  //   const linkedList = new LinkedList();

  //   expect(linkedList.deleteHead()).toBeNull();

  //   linkedList.append(1);
  //   linkedList.append(2);

  //   expect(linkedList.head.toString()).toBe('1');
  //   expect(linkedList.tail.toString()).toBe('2');

  //   const deletedNode1 = linkedList.deleteHead();

  //   expect(deletedNode1.value).toBe(1);
  //   expect(linkedList.toString()).toBe('2');
  //   expect(linkedList.head.toString()).toBe('2');
  //   expect(linkedList.tail.toString()).toBe('2');

  //   const deletedNode2 = linkedList.deleteHead();

  //   expect(deletedNode2.value).toBe(2);
  //   expect(linkedList.toString()).toBe('');
  //   expect(linkedList.head).toBeNull();
  //   expect(linkedList.tail).toBeNull();
  // });

  // it('should be possible to store objects in the list and to print them out', () => {
  //   const linkedList = new LinkedList();

  //   const nodeValue1 = { value: 1, key: 'key1' };
  //   const nodeValue2 = { value: 2, key: 'key2' };

  //   linkedList
  //     .append(nodeValue1)
  //     .prepend(nodeValue2);

  //   const nodeStringifier = (value) => `${value.key}:${value.value}`;

  //   expect(linkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  // });

  // it('should find node by value', () => {
  //   const linkedList = new LinkedList();

  //   expect(linkedList.find({ value: 5 })).toBeNull();

  //   linkedList.append(1);
  //   expect(linkedList.find({ value: 1 })).toBeDefined();

  //   linkedList
  //     .append(2)
  //     .append(3);

  //   const node = linkedList.find({ value: 2 });

  //   expect(node.value).toBe(2);
  //   expect(linkedList.find({ value: 5 })).toBeNull();
  // });

  // it('should find node by callback', () => {
  //   const linkedList = new LinkedList();

  //   linkedList
  //     .append({ value: 1, key: 'test1' })
  //     .append({ value: 2, key: 'test2' })
  //     .append({ value: 3, key: 'test3' });

  //   const node = linkedList.find({ callback: (value) => value.key === 'test2' });

  //   expect(node).toBeDefined();
  //   expect(node.value.value).toBe(2);
  //   expect(node.value.key).toBe('test2');
  //   expect(linkedList.find({ callback: (value) => value.key === 'test5' })).toBeNull();
  // });

  // it('should create linked list from array', () => {
  //   const linkedList = new LinkedList();
  //   linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

  //   expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  // });

  // it('should find node by means of custom compare function', () => {
  //   const comparatorFunction = (a, b) => {
  //     if (a.customValue === b.customValue) {
  //       return 0;
  //     }

  //     return a.customValue < b.customValue ? -1 : 1;
  //   };

  //   const linkedList = new LinkedList(comparatorFunction);

  //   linkedList
  //     .append({ value: 1, customValue: 'test1' })
  //     .append({ value: 2, customValue: 'test2' })
  //     .append({ value: 3, customValue: 'test3' });

  //   const node = linkedList.find({
  //     value: { value: 2, customValue: 'test2' },
  //   });

  //   expect(node).toBeDefined();
  //   expect(node.value.value).toBe(2);
  //   expect(node.value.customValue).toBe('test2');
  //   expect(linkedList.find({ value: 2, customValue: 'test5' })).toBeNull();
  // });

  // it('should find preferring callback over compare function', () => {
  //   const greaterThan = (value, compareTo) => (value > compareTo ? 0 : 1);

  //   const linkedList = new LinkedList(greaterThan);
  //   linkedList.fromArray([1, 2, 3, 4, 5]);

  //   let node = linkedList.find({ value: 3 });
  //   expect(node.value).toBe(4);

  //   node = linkedList.find({ callback: (value) => value < 3 });
  //   expect(node.value).toBe(1);
  // });

  // it('should convert to array', () => {
  //   const linkedList = new LinkedList();
  //   linkedList.append(1);
  //   linkedList.append(2);
  //   linkedList.append(3);
  //   expect(linkedList.toArray().join(',')).toBe('1,2,3');
  // });

  // it('should reverse linked list', () => {
  //   const linkedList = new LinkedList();

  //   // Add test values to linked list.
  //   linkedList
  //     .append(1)
  //     .append(2)
  //     .append(3);

  //   expect(linkedList.toString()).toBe('1,2,3');
  //   expect(linkedList.head.value).toBe(1);
  //   expect(linkedList.tail.value).toBe(3);

  //   // Reverse linked list.
  //   linkedList.reverse();
  //   expect(linkedList.toString()).toBe('3,2,1');
  //   expect(linkedList.head.value).toBe(3);
  //   expect(linkedList.tail.value).toBe(1);

  //   // Reverse linked list back to initial state.
  //   linkedList.reverse();
  //   expect(linkedList.toString()).toBe('1,2,3');
  //   expect(linkedList.head.value).toBe(1);
  //   expect(linkedList.tail.value).toBe(3);
  // });
// });
