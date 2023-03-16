abstract class Component {
  public abstract add(child: Component): void;
  public abstract execute(): void;
}

export class Composite {
  private children: Component[] = [];
  public add(child: Component) {
    this.children.push(child);
  }
  public execute() {
    this.children.forEach((child) => {
      child.execute();
    });
  }
}

export class Leaf {
  public add(child: Component) {
    throw new Error("Leaf cannot add child");
  }
  public execute() {
    console.log("Leaf executed");
  }
}
