type SubjectState = "s1" | "s2" | "s3";
type Observers = {
  [K in SubjectState]?: ObserverCallObj[];
};
type ObserverCallObj = {
  name: string;
  callback: () => any;
};

export class Subject {
  private state: SubjectState = "s1";
  private observers: Observers = {};
  constructor() {}
  public register(
    state: SubjectState,
    observerName: string,
    callback: () => any
  ) {
    if (!this.observers[state]) {
      this.observers[state] = [];
    }
    this.observers[state]?.push({
      name: observerName,
      callback: callback,
    });
    console.log(callback, "of", observerName, "is registered");
  }
  public unregister(state: SubjectState, observerName: string) {
    if (!this.observers[state]) {
      console.log(`there is no state: ${state}`);
      return;
    }
    const index = this.observers[state]?.findIndex((val, idx) => {
      return observerName === val.name;
    });
    this.observers[state]?.splice(index as number, 1);
    console.log("unregistered", state, "of", observerName);
  }
  public broadcast(state: SubjectState) {
    this.observers[state]?.forEach((observer) => {
      observer.callback();
    });
  }
  public getState() {
    return this.state;
  }
  public setState(state: SubjectState) {
    console.log(`state changed into ${state}`);
    this.state = state;
    this.broadcast(state);
  }
}

export class Observer {
  private name: string;
  private subject: Subject;
  constructor(name: string, subject: Subject) {
    this.name = name;
    this.subject = subject;
  }
  public on(state: SubjectState, callback: () => any) {
    this.subject.register(state, this.name, callback);
  }
  public cancel(state: SubjectState) {
    this.subject.unregister(state, this.name);
  }
}
