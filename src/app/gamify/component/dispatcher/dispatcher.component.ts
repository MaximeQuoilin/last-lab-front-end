import { Component, OnInit, Input } from '@angular/core';
import { UserBusiness } from '../../model/business/user.business';
import { GameBusiness } from '../../model/business/game.business';

@Component({
  selector: 'app-dispatcher',
  templateUrl: './dispatcher.component.html',
  styleUrls: ['./dispatcher.component.scss']
})
export class DispatcherComponent implements OnInit {

  @Input() gamesListFromContainer: GameBusiness[];
  @Input() usersListFromContainer: UserBusiness[];


  constructor() { }

  ngOnInit() {
  }

}
