import LinkedList from '../LinkedList';

export default class Stack<T> {

  private list = new LinkedList<T>();

  push(value: T) {
    this.list.prepend(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.list.deleteHead();
    return node?.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.head?.value;
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}