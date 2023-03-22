export class Component {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public method() {
    console.log("method in component", this.name, "is being called");
  }
}

export class DecoratorBefore {
  private component: Component;
  constructor(component: Component) {
    this.component = component;
  }
  public method() {
    console.log("method of DecoratorBefore is being called");
    this.component.method();
  }
}

export class DecoratorAfter extends DecoratorBefore {
  constructor(component: Component) {
    super(component);
  }
  public method() {
    super.method();
    console.log("method of DecoratorAfter is being called");
  }
}
