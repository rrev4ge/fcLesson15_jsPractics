"use strict";

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.lenght = 0;
  }

  addNode(value) {
    const node = new ListNode(value);

    if (this.lenght === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.lenght++;
  }

  getNodeByIndex(index) {
    if (this.lenght === 0 || index < 0 || index > this.lenght) {
      throw new RangeError("Not in list");
    }
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

class LinkedListIterator {
  constructor(list) {
    this.iterable = list.head;
  }

  next() {
    if (this.iterable) {
      const value = this.iterable.value;
      this.iterable = this.iterable.next;
      return {
        value,
        done: false,
      };
    }
    return { done: true };
  }
}

const list = new LinkedList();

list.addNode("test1");
list.addNode("test2");
list.addNode("test3");

//LIFO - 
class Stack {
  constructor(maxSize = 1000){


    this._maxSize = maxSize;
    this._size = 0;
  }

  get maxSize() {
    return this._maxSize;
  }

  get isEmpty() {
    return this._maxSize;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  push(value) {
    if (this.size >= this.maxSize) {
      throw new RangeError("Stack overflow");
    }
    this[this.size++] = value;
    return this.size;
  }

  pop() {
    if (this.isEmpty) {
      return
    }
    const buffer = this[--this.size];
    delete this[this.size];
    return buffer;
  }

  peek() {
    if (this.isEmpty) {
      return;
    }
    return this[this.size - 1];
  }



}

function reverse(string) {
  const stack = new Stack(string.lenght);
  for (const stack of string) {
      stack.push(latter); 
  } 
  const result = [];
  return  buffer;
  
}

function checkBraces(string) {
  const stack1 = new Stack();
  const stack2 = new Stack();
  if (string) {
        return false;
  }

  for (const brace of string) {

      if (brace === "(") {
          
      }
      if (condition) {
        
      }
  } 
  
}

//FIFO -

class Queue {
  constructor(...rest){
    this._oldIndex = 0;
    this._newIndex = 0;

    for (const item of rest) {
      this.push(item)
    }
  }
  get size(){
      return this._newIndex - this._oldIndex;
  }
  push(...rest) {
   
    for (const item of rest) {
      this[this._newIndex++] = item;
    }
    return this.size;
  }

  pop() {
    if (this.size === 0) {
      return;
    }
    const buffer = this[this._oldIndex];
    delete this[this._oldIndex++];
    return buffer;
  }

  peek() {
    return this[this._oldIndex];
  }
}

let q1 = new Queue("Test1", "Test2", "Test3", "Test4");
q1.push("Test5", "Test6");
let q2 = new Queue("Test7", "Test8", "Test9", "Test10");
q2.push("Test11", "Test12");

function getQueues(que1, que2,...rest) {
  
  const result = new Queue();
  while (que1.size || que2.size) {
    result.push(que1.pop());
    
  }
  for (const item of rest) {
    for (let i = 0; i < item.size; i++) {
      result.push(item[item._oldIndex]);
      item.pop();
    }
  
  }
  return result;

}