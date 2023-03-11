export class Subject {
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

export class Observer {
  constructor() {}
  public subscribe(target: Subject, callback: any) {
    target.register(callback);
  }
}
