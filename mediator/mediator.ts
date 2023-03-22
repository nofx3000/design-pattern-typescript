export type TeamColor = "red" | "blue";
export type PlayerStatus = "alive" | "dead";

export class Player {
  public name: string;
  public teamColor: TeamColor;
  public mediator: Mediator;
  public status: PlayerStatus = "alive";
  constructor(name: string, teamColor: TeamColor, mediator: Mediator) {
    this.name = name;
    this.teamColor = teamColor;
    this.mediator = mediator;
  }
  public quit() {
    console.log("player", this.name, "quit the game");
    this.mediator.delPlayer(this);
  }
  public die() {
    console.log("player", this.name, "dead");
    this.status = "dead";
    this.mediator.playerDead(this);
  }
  public won() {
    console.log(this.name, "won");
  }
  public lose() {
    console.log(this.name, "lose");
  }
}

export class Mediator {
  private team: { [P in TeamColor]?: Player[] } = {};
  public addPlayer(player: Player) {
    if (!this.team[player.teamColor]) {
      this.team[player.teamColor] = [];
    }
    console.log("player", player.name, "joined the game");
    this.team[player.teamColor]?.push(player);
  }
  public delPlayer(player: Player) {
    const index: number = this.team[player.teamColor]
      ? (this.team[player.teamColor] as Player[]).findIndex(
          (_player) => _player.name === player.name
        )
      : -1;
    if (index < 0) {
      console.log("doesn't have this player");
      return;
    }
    (this.team[player.teamColor] as Player[]).splice(index, 1);
  }
  public playerDead(player: Player) {
    const all_dead = (this.team[player.teamColor] as Player[]).every(
      (_player) => {
        return _player.status === "dead";
      }
    );
    if (all_dead) {
      console.log("team", player.teamColor, "all dead");
      (this.team[player.teamColor] as Player[]).forEach((_player) =>
        _player.lose()
      );
      let _teamColor: TeamColor;
      for (_teamColor in this.team) {
        if (_teamColor !== player.teamColor) {
          this.team[_teamColor]?.forEach((_player) => _player.won());
        }
      }
      return;
    }
  }
}
