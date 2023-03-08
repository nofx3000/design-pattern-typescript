interface ObjInterface {
  [propname: string | number]: any;
}

export class MyIterator {
  private current: number = 0;
  private target: Array<any> | ObjInterface;
  constructor(target: Array<any> | ObjInterface) {
    this.target = target;
  }
  public next() {
    let res: any;
    if (this.target instanceof Array) {
      res = this.target[this.current];
    } else {
      const keys: any[] = Object.keys(this.target);
      const key: any = keys[this.current];
      res = this.target[key];
    }
    this.current += 1;
    return res;
  }
  public hasNext() {
    if (this.target instanceof Array) {
      return this.current < this.target.length;
    } else {
      const keys = Object.keys(this.target);
      return this.current < keys.length;
    }
  }
}
