import { GameBusiness } from '../model/business/game.business';
import { GameInterface } from '../model/game.interface';

export class GameConverter {

  public static fromDTO(game: GameInterface): GameBusiness {
    return new GameBusiness(

      game.id,
      game.name,
      game.description,
      game.pegi

    );
  }

  public static fromDTOArray(gamesList: GameInterface[]): GameBusiness[] {

    return gamesList.map((game: GameInterface) => GameConverter.fromDTO(game));
  }
}
