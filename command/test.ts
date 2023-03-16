import { CommandA, CommandB, CommandC, Invoker } from "./command";

const receiverA = {
  a: () => {
    console.log("this is receiver A");
  },
};

const receiverB = {
  b: () => {
    console.log("this is receiver B");
  },
};

const receiverC = {
  c: () => {
    console.log("this is receiver C");
  },
};

const A = new CommandA(receiverA);
const B = new CommandB(receiverB);
const C = new CommandC(receiverC);

const invoker = new Invoker();
invoker.storeAndExecute(A);
invoker.storeAndExecute(B);
invoker.storeAndExecute(C);
