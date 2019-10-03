import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameBusiness } from '../../model/business/game.business';
import { UserBusiness } from '../../model/business/user.business';


@Component({
  selector: 'app-list-detail-game',
  templateUrl: './list-detail-game.component.html',
  styleUrls: ['./list-detail-game.component.scss']
})
export class ListDetailGameComponent implements OnInit {

  @Input() gamesListFromContainer: GameBusiness[];
  @Input() borrowerFromContainer: UserBusiness;
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectGame(gameId: number) {
    this.selected.emit(gameId);
  }

}
