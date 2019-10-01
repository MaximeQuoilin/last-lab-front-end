import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { GameInterface } from '../../model/game.interface';
import { UserBusiness } from '../../model/business/user.business';
import { UserService } from '../../service/user.service';
import { UserInterface } from '../../model/user.interface';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GamifyContainerComponent implements OnInit {

  games: GameInterface[];
  users: UserBusiness[];

  constructor(private gameService: GameService, private userService: UserService) { }

  ngOnInit() {

    this.getAllGames();
    this.getAllUsers();

  }

  getAllGames() {

    this.gameService.getAllGames().subscribe((games: GameInterface[]) => {
      this.games = games;

    });
  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe((users: UserBusiness[]) => {
      console.log('je suis dans le container', users);
      this.users = users;

    });
  }

}

