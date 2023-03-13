import { Subject, Observer } from "./observer_offline";

const s = new Subject();
s.broadcast("broadcast before subscribe");
const o = new Observer(s);
o.subscribe(function (msg: string) {
  console.log(msg);
});
s.broadcast("broadcast after subscribe");
