interface Strategy {
  method: () => void;
}

export class StrategyA implements Strategy {
  public method() {
    console.log("this is StrategyA");
  }
}

export class StrategyB implements Strategy {
  public method() {
    console.log("this is StrategyB");
  }
}

export class StrategyC implements Strategy {
  public method() {
    console.log("this is StrategyC");
  }
}

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public executeStrategy() {
    this.strategy.method();
  }
}
