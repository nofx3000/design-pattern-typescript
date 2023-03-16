abstract class Command {
  protected receiver: any;
  constructor(receiver: any) {
    this.receiver = receiver;
  }
  public abstract execute(): void;
}

export class CommandA extends Command {
  constructor(receiver: any) {
    super(receiver);
  }
  execute() {
    this.receiver.a();
  }
}

export class CommandB extends Command {
  constructor(receiver: any) {
    super(receiver);
  }
  execute() {
    this.receiver.b();
  }
}

export class CommandC extends Command {
  constructor(receiver: any) {
    super(receiver);
  }
  execute() {
    this.receiver.c();
  }
}

export class Invoker {
  private commands: Command[] = [];
  public storeAndExecute(command: Command) {
    this.commands.push(command);
    command.execute();
  }
}
