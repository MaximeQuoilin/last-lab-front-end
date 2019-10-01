import { Component, OnInit, Input } from '@angular/core';
import { GameInterface } from '../../model/game.interface';
import { UserBusiness } from '../../model/business/user.business';

@Component({
  selector: 'app-dispatcher',
  templateUrl: './dispatcher.component.html',
  styleUrls: ['./dispatcher.component.scss']
})
export class DispatcherComponent implements OnInit {

  @Input() gamesListFromDispatcher: GameInterface[];
  @Input() usersListFromDispatcher: UserBusiness[];


  constructor() { }

  ngOnInit() {
  }

}
