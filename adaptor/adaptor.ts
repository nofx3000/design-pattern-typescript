export class Adaptee {
  public method() {
    console.log("method in adaptee");
  }
}

export class Adaptor {
  private adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  public call() {
    console.log("adaptor is being called");
    this.adaptee.method();
  }
}
