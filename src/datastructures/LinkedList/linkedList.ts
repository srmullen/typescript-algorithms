type Comparator<T> = (a: T, b: T) => -1 | 0 | 1;

const defaultCompare = <T>(a: T, b: T) => {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}

export class LinkedListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}
}

export default class LinkedList<T> {

  head: Nullable<LinkedListNode<T>> = null;
  tail: Nullable<LinkedListNode<T>> = null;
  
  constructor(private compare: Comparator<T> = defaultCompare) {}

  append(el: T) {
    const node = new LinkedListNode(el);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    // Attach new node to end of list.
    // Use bang to indicate we know the tail will exist at this point.
    this.tail!.next = node;
    this.tail = node;

    return this;
  }

  prepend(el: T) {
    const node = new LinkedListNode(el, this.head);

    if (!this.tail) {
      this.tail = node
    }

    this.head = node;
    
    return this;
  }

  contains(el: T) {
    let node: Nullable<LinkedListNode<T>> = this.head;

    while (node) {
      if (this.compare(node?.value, el) === 0) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  remove(value: T) {
    if (!this.head) {
      return null;
    }

    let deletedNode: Nullable<LinkedListNode<T>> = null;

    while (this.head && this.compare(this.head.value, value) === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare(currentNode.next.value, value) === 0) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode?.next;
        }
      }
    }

    // Check if the tail must be deleted
    if (this.compare(this.tail!.value, value) === 0) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deleted = this.head;

    this.head = this.head.next;

    return deleted;
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      const deleted = this.tail;
      this.head = null;
      this.tail = null;
      return deleted;
    }

    const deleted = this.tail;

    let curr = this.head!.next;
    while (curr?.next?.next) {
      curr = curr.next;
    }

    curr!.next = null;
    this.tail = curr;

    return deleted;
  }

  toArray() {
    const arr: Array<T> = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }

  static fromArray<T>(arr: Array<T>) {
    const list = new LinkedList<T>();
    for (let i = 0; i < arr.length; i++) {
      list.append(arr[i]);
    }
    return list;
  }
}