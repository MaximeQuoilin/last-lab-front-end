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

  public games: GameBusiness[];
  public borrower: UserBusiness;
  public users: UserBusiness[];

  public displayGames = true;
  public displayUsers = false;
  public isFormDisplayed = false;

  constructor(
    private gameService: GameService,
    private userService: UserService
  ) { }

  public ngOnInit() {
    this.getAllGames();
    this.getAllUsers();
  }

  private getAllGames() {
    this.gameService.getAllGames().subscribe((games: GameBusiness[]) => {
      this.games = games;
    });
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe((users: UserBusiness[]) => {
      this.users = users;
    });
  }

  public postUser(user: any) { // TODO (any pas bon)
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

  public showHires(gameId: number) {
    this.gameService.getBorrowerByGame(gameId).subscribe((user: UserBusiness) => {
      this.borrower = user;
    });

  }

  public switchStateElementToDisplay(isGameButton: boolean) {
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
