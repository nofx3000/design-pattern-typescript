import { Player, Mediator, TeamColor } from "./mediator";

const mediator = new Mediator();

const playerFactory = function (name: string, teamColor: TeamColor) {
  if (!mediator) {
    throw Error("init mediator first");
  }
  const newPlayer = new Player(name, teamColor, mediator);
  mediator.addPlayer(newPlayer);
  return newPlayer;
};

const p1 = playerFactory("1", "red");
const p2 = playerFactory("2", "red");
const p3 = playerFactory("3", "red");
const p4 = playerFactory("4", "red");

const p5 = playerFactory("5", "blue");
const p6 = playerFactory("6", "blue");
const p7 = playerFactory("7", "blue");
const p8 = playerFactory("8", "blue");
p1.quit();
p2.die();
p3.die();
p4.die();
