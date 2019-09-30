import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { GameInterface } from '../../model/game.interface';

@Component({
  selector: 'app-game-list-container',
  templateUrl: './game-list-container.component.html',
  styleUrls: ['./game-list-container.component.scss']
})
export class GameListContainerComponent implements OnInit {

  games: GameInterface[];

  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.getAllGames();

  }

getAllGames() {

  this.gameService.getAllGames().subscribe((games: GameInterface[]) => {
    console.log(typeof games);
    console.log(games);
    this.games = games.payload;
    console.log('games vaut ', this.games);

  });
}

}
