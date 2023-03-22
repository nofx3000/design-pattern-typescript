import { Chain } from "./chain_of_responsibility";

function fn1(msg: string) {
  if (msg === "pass") {
    console.log("fn1 pass");
    return "nextSuccessor";
  }
  console.log("fn1 stop");
  return "stop";
}

function fn2(this: Chain, msg: string) {
  setTimeout(() => {
    console.log(this);
    this.asyncPassRequest();
  }, 1000);
}

function fn3(msg: string) {
  if (msg === "pass") {
    console.log("fn3 pass");
    return "nextSuccessor";
  }
  console.log("fn3 stop");
  return "stop";
}

const c1 = new Chain(fn1);
const c2 = new Chain(fn2);
const c3 = new Chain(fn3);

c1.setSuccessor(c2);
c2.setSuccessor(c3);

c1.syncPassRequest("pass");
