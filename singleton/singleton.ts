export class Singleton {
  // 设置一个私有静态属性
  // 静态方法不能访问非静态属性
  private static instance: Singleton;
  constructor() {}
  // 设置一个公共静态方法可以获取实例
  public static getInstance() {
    if (!Singleton.instance) {
      console.log("instance created");
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
