type ChainFunc = (...args: any) => any;

export class Chain {
  public fn: ChainFunc;
  public successor: Chain | null = null;
  constructor(fn: ChainFunc) {
    this.fn = fn;
  }
  public setSuccessor(successor: Chain | null): any {
    return (this.successor = successor);
  }
  public syncPassRequest(...args: any): any {
    // 由于 箭头函数没有自己的 this 指针，
    // 通过 call()、bind() 或 apply() 方法调用一个函数时，
    // 只能传递参数（不能绑定 this---译者注），他们的第一个参数会被忽略。
    const res = this.fn.apply(this, args);
    console.log(this.fn.name, res);
    if (res === "nextSuccessor") {
      return this.successor && this.successor.syncPassRequest(...args);
    }
    return res;
  }
  public asyncPassRequest(...args: any) {
    this.successor &&
      this.successor.syncPassRequest.apply(this.successor, args);
  }
}
