import LinkedList from '../LinkedList';

export default class Queue<T> {

  private list = new LinkedList<T>();
  
  push(value: T) {
    this.list.append(value);
  }

  pop() {
    const node = this.list.deleteHead();
    return node ? node.value : null;
  }

  peek() {
    return this.list.head ? this.list.head.value : null;
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}