export class Subject {
  public doSomething() {
    console.log("did Something");
  }
}

export class ProxyOfSubject {
  private subject: Subject | undefined = undefined;
  constructor() {}
  public doSomething() {
    if (!this.subject) {
      this.subject = new Subject();
    }
    this.subject.doSomething();
  }
}
