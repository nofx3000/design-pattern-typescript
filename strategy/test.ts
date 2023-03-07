import { StrategyA, StrategyB, StrategyC, Context } from "./strategy";

const contextA = new Context(new StrategyA());
const contextB = new Context(new StrategyB());
const contextC = new Context(new StrategyC());

contextA.executeStrategy();
contextB.executeStrategy();
contextC.executeStrategy();
