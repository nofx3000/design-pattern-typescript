abstract class Beverage {
  public abstract boilWater(): void;
  public abstract brew(): void;
  public abstract pourInCup(): void;
  public abstract addCondiments(): void;
  public templateMethod(): void {
    console.log("templateMothod is being called");
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
}

export class Tea extends Beverage {
  public boilWater(): void {
    console.log("boil water in Tea");
  }
  public brew(): void {
    console.log("brew in Tea");
  }
  public pourInCup(): void {
    console.log("pourInCup in Tea");
  }
  public addCondiments(): void {
    console.log("addCondiments in Tea");
  }
}

export class Coffee extends Beverage {
  public boilWater(): void {
    console.log("boil water in Coffee");
  }
  public brew(): void {
    console.log("brew in Coffee");
  }
  public pourInCup(): void {
    console.log("pourInCup in Coffee");
  }
  public addCondiments(): void {
    console.log("addCondiments in Coffee");
  }
}
