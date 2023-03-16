import { Composite, Leaf } from "./composite";
const c1 = new Composite();
const c2 = new Composite();
const l1 = new Leaf();
const l2 = new Leaf();
const l3 = new Leaf();

c1.add(l1);
c1.add(l2);
c1.add(c2);
c2.add(l3);

c1.execute();
