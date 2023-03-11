import { Observer, Subject } from "./observer_state";
const s = new Subject();
const o1 = new Observer("o1", s);
const o2 = new Observer("o2", s);
o1.on("s2", () => {
  console.log("o1, s2");
});
o2.on("s3", () => {
  console.log("o2, s3");
});
s.setState("s2");
s.setState("s3");
o1.cancel("s2");
s.setState("s2");
