import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { GameInterface } from '../../model/game.interface';
import { ResponseDto } from '../../model/responseDto.interface';
import { UserInterface } from '../../model/user.interface';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GamifyContainerComponent implements OnInit {

  games: GameInterface[];
  users: UserInterface[];
  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.getAllGames();
    this.getAllUser();

  }

getAllGames() {

  this.gameService.getAllGames().subscribe((games: GameInterface[]) => {
    console.log(typeof games);
    console.log(games);
    this.games = games;
    console.log('games vaut ', this.games);

  });
}

getAllUser() {
  this.gameService.getAllUser().subscribe((users: UserInterface[]) => {
    this.users = users;
    console.log('users vaut : ', this.users);
  });
}

}
