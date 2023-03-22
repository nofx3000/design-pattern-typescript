import { DecoratorAfter, DecoratorBefore, Component } from "./decorator";

const c = new Component("c");

const decoratorBefore = new DecoratorBefore(c);

const decoratorAfter = new DecoratorAfter(c);

// decoratorAfter.method();

decoratorBefore.method();
