import { GameInterface } from '../game.interface';

export class GameBusiness {

  public readonly id: number;
  public name: string;
  public description: string;
  public rating: number;
  public pegi: string;

  constructor(

    id: number,
    name: string,
    description: string,
    rating: number,
    pegi: string,

  ) {

    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.pegi = pegi;
  }

  public static fromDTO(game: GameInterface): GameBusiness {
    return new GameBusiness(
      game.id,
      game.name,
      game.description,
      game.rating,
      game.pegi
    );
  }
}

