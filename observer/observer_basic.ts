class Subject {
  private list: any = [];
  constructor() {}
  public register(fn: any) {
    this.list.push(fn);
  }
  public broadcast() {
    this.list.forEach((fn: any) => {
      fn.apply(this, arguments);
    });
  }
}

class Observer {
  constructor() {}
  public subscribe(target: Subject, callback: any) {
    target.register(callback);
  }
}

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
