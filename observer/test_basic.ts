import { Observer, Subject } from "./observer_basic";

const o1 = new Observer();
const o2 = new Observer();
const o3 = new Observer();
const subject = new Subject();
o1.subscribe(subject, () => {
  console.log("o1");
});
o2.subscribe(subject, () => {
  console.log("o2");
});
o3.subscribe(subject, () => {
  console.log("o3");
});
subject.broadcast();
