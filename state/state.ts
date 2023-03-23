type StateType = "1" | "2" | "3";
type StateMapType = { [P in StateType]: State };

export class Context {
  public state: State;
  public stateMap: StateMapType;
  constructor(defaultState: StateType) {
    this.stateMap = {
      "1": new State1(this),
      "2": new State2(this),
      "3": new State3(this),
    };
    this.state = this.stateMap[defaultState];
  }
  public setState(state: StateType) {
    console.log("state truned to", state);
    this.state = this.stateMap[state];
  }
  public request() {
    console.log("a request is being called");
    this.state.handler();
  }
}

abstract class State {
  public context: Context;
  constructor(context: Context) {
    this.context = context;
  }
  public abstract handler(...args: any): unknown;
}

class State1 extends State {
  constructor(context: Context) {
    super(context);
  }
  public handler(...args: any): void {
    this.context.setState("2");
  }
}

class State2 extends State {
  constructor(context: Context) {
    super(context);
  }
  public handler(...args: any): void {
    this.context.setState("3");
  }
}

class State3 extends State {
  constructor(context: Context) {
    super(context);
  }
  public handler(...args: any): void {
    this.context.setState("1");
  }
}
