import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { UserBusiness } from '../../model/business/user.business';
import { UserService } from '../../service/user.service';
import { GameBusiness } from '../../model/business/game.business';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GamifyContainerComponent implements OnInit {

  games: GameBusiness[];
  users: UserBusiness[];

  displayGames = true;
  displayUsers = false;
  isFormDisplayed = false;

  constructor(private gameService: GameService, private userService: UserService) { }

  ngOnInit() {

    this.getAllGames();
    this.getAllUsers();

  }

  getAllGames() {

    this.gameService.getAllGames().subscribe((games: GameBusiness[]) => {
      this.games = games;

    });
  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe((users: UserBusiness[]) => {
      this.users = users;

    });
  }

  public postUser(user: any) {

    this.userService.postUser(user).subscribe((isAdded: boolean) => {
      if (isAdded) {
        this.getAllUsers();
      }
    });

  }

  public deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe((isDeleted: boolean) => {
      if (isDeleted) {
        this.getAllUsers();
      }
    });
  }

  switchStateElementToDisplay(isGameButton: boolean) {

    if (isGameButton) {

      this.displayGames = true;
      this.displayUsers = false;

    } else {

      this.displayGames = false;
      this.displayUsers = true;
    }
  }

  public displayForm() {
    this.isFormDisplayed = !this.isFormDisplayed;
  }
}

