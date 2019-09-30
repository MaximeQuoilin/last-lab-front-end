import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { GameInterface } from '../../model/game.interface';
import { ResponseDto } from '../../model/responseDto.interface';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GamifyContainerComponent implements OnInit {

  games: GameInterface[];

  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.getAllGames();

  }

getAllGames() {

  this.gameService.getAllGames().subscribe((games: GameInterface[]) => {
    console.log(typeof games);
    console.log(games);
    this.games = games;
    console.log('games vaut ', this.games);

  });
}

}
