// this pattern can achieve a effect in which subject can broadcast before being registered
// when observer subscribe it, offline messages will be sended to the observer
export class Subject {
  private offlineList: ((...args: any) => any)[] | null = [];
  private list: ((...args: any) => any)[] = [];
  public register(fn: (...args: any) => any) {
    this.list.push(fn);
    if (this.offlineList === null) {
      return;
    }
    this.offlineList.forEach((fn) => {
      fn();
    });
    this.offlineList = null;
  }
  public broadcast(...args: any) {
    if (this.offlineList === null) {
      // 先register
      this.list.forEach((fn) => {
        fn.apply(this, args);
      });
    } else {
      // 先broadcast
      const cb = () => {
        this.list.forEach((fn) => {
          fn.apply(this, args);
        });
      };
      this.offlineList.push(cb);
    }
  }
}

export class Observer {
  private subject: Subject;
  constructor(subject: Subject) {
    this.subject = subject;
  }
  public subscribe(fn: (...args: any) => any) {
    this.subject.register(fn);
  }
}
