import { MyIterator } from "./iterator";

const arr = [0, 1, 2, 3, 4];
const obj = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
};

const arrIterator = new MyIterator(arr);
console.log(arrIterator.hasNext() ? arrIterator.next() : "end");
console.log(arrIterator.hasNext() ? arrIterator.next() : "end");
console.log(arrIterator.hasNext() ? arrIterator.next() : "end");
console.log(arrIterator.hasNext() ? arrIterator.next() : "end");
console.log(arrIterator.hasNext() ? arrIterator.next() : "end");
console.log(arrIterator.hasNext() ? arrIterator.next() : "end");

const objIterator = new MyIterator(obj);
console.log(objIterator.hasNext() ? objIterator.next() : "end");
console.log(objIterator.hasNext() ? objIterator.next() : "end");
console.log(objIterator.hasNext() ? objIterator.next() : "end");
console.log(objIterator.hasNext() ? objIterator.next() : "end");
console.log(objIterator.hasNext() ? objIterator.next() : "end");
console.log(objIterator.hasNext() ? objIterator.next() : "end");
